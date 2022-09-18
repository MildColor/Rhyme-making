import express from "express";
import {
  startKakaoLogin,
  finishKakaoLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/kakao/start", startKakaoLogin);
userRouter.get("/kakao/oauth", finishKakaoLogin);

export default userRouter;
