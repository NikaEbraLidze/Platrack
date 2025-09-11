import dotenv from "dotenv";
import app from "./app.js";
import { config } from "./config.js";
import { testDbConnection } from "./utils/db.js";

dotenv.config();

app.listen(config.port, async () => {
  await testDbConnection();
  console.log(`🚀 Server running on port ${config.port}`);
});
