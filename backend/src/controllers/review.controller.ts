import { Request, Response } from "express";
import { insertReview, ReviewInput } from "../models/Logs.js";
import { getGuestByIp, addNewGuest } from "../models/userModel.js";

export async function insertReviewController(req: Request, res: Response) {
  const { rating, comment } = req.body;
  const ipAddress = req.ip;

  if (!ipAddress) {
    return res.status(400).json({ error: "IP address not found" });
  }

  try {
    let guest = await getGuestByIp(ipAddress);
    if (!guest) {
      await addNewGuest(ipAddress);
      guest = await getGuestByIp(ipAddress);
    }

    const guest_id = guest?.id;
    if (!guest_id) {
      return res.status(500).json({ error: "Unable to identify guest" });
    }

    const reviewInput: ReviewInput = { guest_id, rating, comment };

    const rowCount = await insertReview(reviewInput);

    if (rowCount === 1) {
      return res.status(201).json({ success: true });
    } else {
      return res.status(500).json({ success: false, error: "Insert failed" });
    }
  } catch (error: any) {
    console.error("Error inserting review:", error.message);
    return res.status(400).json({ success: false, error: error.message });
  }
}
