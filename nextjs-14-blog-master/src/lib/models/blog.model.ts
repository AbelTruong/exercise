import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String },
    userId: { type: mongoose.Types.ObjectId, required: true },
    name: { type: String, unique: true, required: true },
  },
  { timestamps: true }
);
export const BlogModel =
  mongoose.models?.blog || mongoose.model("blog", BlogSchema);
