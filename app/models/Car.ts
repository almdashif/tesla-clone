import mongoose, { Schema, models } from "mongoose";

const CarSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    category: String,
    tagline: String,
    price: Number,
    range: Number,
    accel: Number,
    topSpeed: Number,
    colors: [String],
    colorNames: [String],
    images: [String],
  },
  { timestamps: true }
);
CarSchema.index({ id: 1 });
export const Car = models.Car || mongoose.model("Car", CarSchema);