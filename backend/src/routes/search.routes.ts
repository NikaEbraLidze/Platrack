import express from "express";
import { dailySearchLimit } from "../middleware/dailySearchLimit.middleware.js";
import { SearchYoutubeController } from "../controllers/search.controller.js";

const searchRouter = express.Router();

searchRouter.post("/youtube", dailySearchLimit, SearchYoutubeController);

export default searchRouter;
