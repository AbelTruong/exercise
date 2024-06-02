import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 5, max: 15 },
    email: { type: String, required: true, max: 50 },
    password: { type: String, required: true, min: 6 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
export const UserModel =
  mongoose.models?.user || mongoose.model("user", UserSchema);
