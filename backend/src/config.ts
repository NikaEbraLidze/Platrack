import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  dbUrl: process.env.DATABASE_URL as string,
  youtubeApiKey: process.env.YOUTUBE_API_KEY,
  userDailyLimit: process.env.USER_DAILY_LIMIT,
  guestDailyLimit: process.env.GUEST_DAILY_LIMIT
};
