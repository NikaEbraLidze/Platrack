import express from "express";
import cors from "cors";
import searchRouter from "./routes/search.routes.js";

const app = express();
app.set("trust proxy", true);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (_req, res) => res.send("Backend running 🚀"));
app.use("/search", searchRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
}); // 404 handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error." });
}); // Global error handler

export default app;
