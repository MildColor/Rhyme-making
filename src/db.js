import mongoose from "mongoose";

//rhymer라는 이름의 db만들기
mongoose.connect("mongodb://127.0.0.1:27017/rhymer");

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
