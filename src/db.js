import mongoose from "mongoose";

mongoose.connect("moongodb://127.0.0.1:27017/Rhyme-making");

const db = mongoose.connection;

const handleOpen = () => console.log("✅Connected to DB");
const handleError = (error) => console.log("❌DB Error", error);

db.on("error", handleError);
db.once("opne", handleOpen);
