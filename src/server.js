import express, { Router } from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);

export default app;
