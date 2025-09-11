import { Request, Response } from "express";
import { searchYouTubeVideos } from "../services/search.youtube.js";
import { addSearchLog } from "../models/searchLogs.js";
import {
  getUserSearchCount,
  getGuestSearchCount,
} from "../models/searchLimits.js";

export async function SearchYoutubeController(req: Request, res: Response) {
  const keyword = req.body.q || req.query.q; // შეგიძლიათ მიიღოთ GET ან POST
  const currentUser = (req as any).currentUser;
  // currentUser.type = "user" | "guest"
  // currentUser.id = userId ან guestId

  if (!keyword || keyword.trim() === "") {
    return res.status(400).json({ error: "Search keyword is required." });
  }

  try {
    // --- Call YouTube API ---
    const result = await searchYouTubeVideos(keyword);

    // --- Log search (errors ignored but printed) ---
    try {
      await addSearchLog({
        userId: currentUser?.type === "user" ? currentUser.id : undefined,
        guestId: currentUser?.type === "guest" ? currentUser.id : undefined,
        query: keyword,
        platform: "youtube",
        ipAddress: req.ip || "",
      });
    } catch (logErr) {
      console.error("Failed to log search:", logErr);
    }

    // --- Return API result ---
    return res.json({
      success: result.success,
      message: result.message,
      data: result.data,
      dailyLimit: currentUser?.dailyLimit ?? null,
      usedCount:
        currentUser?.type === "user"
          ? await getUserSearchCount(currentUser.id)
          : await getGuestSearchCount(currentUser.id),
    });
  } catch (err: any) {
    console.error("YouTube search failed:", err);
    return res.status(500).json({
      error: "Failed to perform search.",
      message: err instanceof Error ? err.message : undefined,
    });
  }
}
