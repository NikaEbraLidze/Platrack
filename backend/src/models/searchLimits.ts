import { db } from "../utils/db.js";

// Increase User search
export async function incrementUserSearch(userId: string) {
  const result = await db.query(
    `
        INSERT INTO user_search_limits (user_id, search_date, searches_count)
        VALUES ($1, CURRENT_DATE, 1)
        ON CONFLICT (user_id, search_date)
        DO UPDATE SET searches_count = user_search_limits.searches_count + 1
        RETURNING *;
    `,
    [userId]
  );

  return result.rows[0];
}

// Increase Guest search
export async function incrementGuestSearch(guestId: number) {
  const result = await db.query(
    `
        INSERT INTO guest_search_limits (guest_id, search_date, searches_count)
        VALUES ($1, CURRENT_DATE, 1)
        ON CONFLICT (guest_id, search_date)
        DO UPDATE SET searches_count = guest_search_limits.searches_count + 1
        RETURNING *;
    `,
    [guestId]
  );

  return result.rows[0];
}

// Retrieve today's searches for User
export async function getUserSearchCount(userId: string) {
  const result = await db.query(
    `
        SELECT searches_count
        FROM user_search_limits
        WHERE user_id = $1 AND search_date = CURRENT_DATE;
    `,
    [userId]
  );

  return result.rows[0]?.searches_count || 0;
}

// Retrieve today's searches for Guest
export async function getGuestSearchCount(guestId: number) {
  const result = await db.query(
    `
        SELECT searches_count
        FROM guest_search_limits
        WHERE guest_id = $1 AND search_date = CURRENT_DATE;
    `,
    [guestId]
  );

  return result.rows[0]?.searches_count || 0;
}
