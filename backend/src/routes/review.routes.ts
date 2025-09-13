import express from "express";
import { insertReviewController } from "../controllers/review.controller.js";

const insertReviewRoute = express.Router();

insertReviewRoute.post("/review", insertReviewController);

export default insertReviewRoute;
