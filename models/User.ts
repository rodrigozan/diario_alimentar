import { Schema, model, models, type InferSchemaType } from "mongoose";

const goalsSchema = new Schema(
  {
    calories: { type: Number, default: 2000 },
    carbG: { type: Number, default: 250 },
    proteinG: { type: Number, default: 120 },
    fatG: { type: Number, default: 65 },
    waterMl: { type: Number, default: 2000 },
  },
  { _id: false }
);

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, select: false },
    image: { type: String },
    provider: { type: String, enum: ["credentials", "google"], default: "credentials" },
    goals: { type: goalsSchema, default: () => ({}) },
  },
  { timestamps: true }
);

export type UserDoc = InferSchemaType<typeof userSchema>;

export const User = models.User || model("User", userSchema);
