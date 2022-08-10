import mongoose from "mongoose";

const dictSchema = new mongoose.Schema({
  spell: { type: String, required: true, trim: true, maxLength: 200 },
  mean: { type: String, required: true, trim: true },
});

const Dict = mongoose.model("Dict", dictSchema);

export default Dict;
