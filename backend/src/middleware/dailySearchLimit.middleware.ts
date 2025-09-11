import { config } from "../config.js";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import {
  getUserSearchCount,
  incrementUserSearch,
  getGuestSearchCount,
  incrementGuestSearch,
} from "../models/searchLimits.js";
import { getGuestByIp, addNewGuest } from "../models/userModel.js";

dotenv.config();

const USER_DAILY_LIMIT = config.userDailyLimit ?? 20;
const GUEST_DAILY_LIMIT = config.guestDailyLimit ?? 5;

export async function dailySearchLimit(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = (req as any).userId;
    const ipAddress = req.ip;

    if (!ipAddress) {
      return res.status(400).json({ error: "Unable to determine IP address." });
    }

    if (userId) {
      // --- registered user ---
      const count = await getUserSearchCount(userId);

      if (count >= USER_DAILY_LIMIT) {
        return res.status(429).json({
          error: "You have reached your daily search limit.",
        });
      }

      (req as any).currentUser = {
        type: "user",
        id: userId,
        dailyLimit: USER_DAILY_LIMIT,
      };
      await incrementUserSearch(userId);
      return next();
    }

    // --- guest ---
    let guest = await getGuestByIp(ipAddress);
    if (!guest) {
      await addNewGuest(ipAddress);
      guest = await getGuestByIp(ipAddress); // get again
    }

    const guestId = guest!.id;
    const count = await getGuestSearchCount(guestId);

    if (count >= GUEST_DAILY_LIMIT) {
      return res
        .status(429)
        .json({ error: "You have reached your daily search limit." });
    }

    (req as any).currentUser = {
      type: "guest",
      id: guest!.id,
      dailyLimit: GUEST_DAILY_LIMIT,
    };
    await incrementGuestSearch(guestId);
    return next();
  } catch (err) {
    console.error("Error in dailySearchLimit middleware:", err);
    return res
      .status(500)
      .json({ error: "Server error checking daily search limit." });
  }
}
