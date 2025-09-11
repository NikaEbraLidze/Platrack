import { Pool } from "pg";
import { config } from "../config.js";

export const db = new Pool({
  connectionString: config.dbUrl,
});

export async function testDbConnection() {
  try {
    const client = await db.connect();
    const result = await client.query("SELECT NOW()");
    console.log("✅ Database connected:", result.rows[0]);
    client.release();
  } catch (err) {
    console.error("❌ Database connection error:", err);
  }
}