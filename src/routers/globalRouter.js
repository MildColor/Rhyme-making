import express from "express";
import { home, feedback } from "../controllers/homeController.js";
import { getUpload, postUpload } from "../controllers/wordController.js";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/feedback", feedback);
globalRouter.route("/upload").get(getUpload).post(postUpload);

export default globalRouter;
