import { db } from "../utils/db.js"

// Types
export interface Guest {
  id: number;
  ip_address: string;
  created_at: Date;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password_hash: string;
  is_verified: boolean;
  last_ip: string | null;
  created_at: Date;
}

// Helpers
async function getByIp<T>(
  table: "guests" | "users",
  column: string,
  ip: string
): Promise<T | null> {
  try {
    const result = await db.query(
      `SELECT * FROM ${table} WHERE ${column} = $1 LIMIT 1`,
      [ip]
    );

    return result.rowCount ? (result.rows[0] as T) : null;
  } catch (err) {
    console.error(`DB error in getByIp(${table}):`, err);
    throw err;
  }
}

// Guests
export async function getGuestByIp(ipAddress: string): Promise<Guest | null> {
  return getByIp<Guest>("guests", "ip_address", ipAddress);
}

export async function addNewGuest(ipAddress: string): Promise<void> {
  try {
    await db.query(
      `INSERT INTO guests (ip_address)
       VALUES ($1)
       ON CONFLICT (ip_address) DO NOTHING`,
      [ipAddress]
    );
  } catch (err) {
    console.error("DB error in addNewGuest:", err);
    throw err;
  }
}

// const guest = await getGuestByIp(ip);
// if (!guest) {
//   await addNewGuest(ip);
// }

// Users
export async function getUserByIp(ipAddress: string): Promise<User | null> {
  return getByIp<User>("users", "last_ip", ipAddress);
}

export async function updateUserLastIp(userId: string, ipAddress: string): Promise<void> {
  try {
    await db.query(
      `UPDATE users
       SET last_ip = $1, created_at = created_at
       WHERE id = $2`,
      [ipAddress, userId]
    );
  } catch (err) {
    console.error("DB error in updateUserLastIp:", err);
    throw err;
  }
}
