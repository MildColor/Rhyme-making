import express from "express";
import { home, feedback } from "../controllers/homeController.js";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/feedback", feedback);

export default globalRouter;
