import express from "express";
import { home, feedback, search } from "../controllers/homeController.js";
import { getUpload, postUpload } from "../controllers/wordController.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/feedback", feedback);
rootRouter.route("/upload").get(getUpload).post(postUpload);

export default rootRouter;
