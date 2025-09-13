import { db } from "../utils/db.js";

export interface SearchLog {
  id: number;
  user_id: string | null;
  guest_id: number | null;
  query: string;
  platform: string;
  ip_address: string;
  created_at: Date;
}

/**
 * add new search log
 */
export async function addSearchLog(params: {
  userId?: string;
  guestId?: number;
  query: string;
  platform: string;
  ipAddress: string;
}): Promise<SearchLog> {
  const { userId = null, guestId = null, query, platform, ipAddress } = params;

  if (!userId && !guestId) {
    throw new Error("Either userId or guestId must be provided.");
  }

  const result = await db.query<SearchLog>(
    `
    INSERT INTO search_logs (user_id, guest_id, query, platform, ip_address)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `,
    [userId, guestId, query, platform, ipAddress]
  );

  return result.rows[0];
}

/**
 * guest or users old searchs
 */
export async function getSearchLogsByUser(
  userId: string
): Promise<SearchLog[]> {
  const result = await db.query<SearchLog>(
    `SELECT * FROM search_logs WHERE user_id = $1 ORDER BY created_at DESC`,
    [userId]
  );
  return result.rows;
}

export async function getSearchLogsByGuest(
  guestId: number
): Promise<SearchLog[]> {
  const result = await db.query<SearchLog>(
    `SELECT * FROM search_logs WHERE guest_id = $1 ORDER BY created_at DESC`,
    [guestId]
  );
  return result.rows;
}

export interface ReviewInput {
  user_id?: string;
  guest_id?: number;
  rating: number;
  comment?: string;
}

export async function insertReview({
  user_id,
  guest_id,
  rating,
  comment,
}: ReviewInput): Promise<number> {
  if ((!user_id && !guest_id) || (user_id && guest_id)) {
    throw new Error("One and only one of user_id or guest_id must be set");
  }

  try {
    const result = await db.query(
      `INSERT INTO reviews (user_id, guest_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING id;`,
      [user_id, guest_id, rating, comment]
    );

    return result.rowCount ?? 0;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
