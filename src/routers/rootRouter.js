import express from "express";
import {
  home,
  feedback,
  search,
  getLogin,
  postLogin,
} from "../controllers/homeController.js";
import {
  getUpload,
  postUpload,
  getEdit,
  postEdit,
} from "../controllers/wordController.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/feedback", feedback);
rootRouter.route("/upload").get(getUpload).post(postUpload);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/edit").get(getEdit).post(postEdit);

export default rootRouter;
