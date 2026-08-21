import { Schema, model, models, type InferSchemaType } from "mongoose";

export const MEAL_TYPES = ["breakfast", "lunch", "dinner", "snack"] as const;
export type MealType = (typeof MEAL_TYPES)[number];

const mealSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    type: { type: String, enum: MEAL_TYPES, required: true },
    name: { type: String, required: true, trim: true },
    calories: { type: Number, required: true, min: 0 },
    carbG: { type: Number, default: 0, min: 0 },
    proteinG: { type: Number, default: 0, min: 0 },
    fatG: { type: Number, default: 0, min: 0 },
    photoUrl: { type: String },
    // Calendar day this meal belongs to, e.g. "2026-08-21", in the user's local day.
    date: { type: String, required: true, index: true },
  },
  { timestamps: true }
);

mealSchema.index({ userId: 1, date: 1 });

export type MealDoc = InferSchemaType<typeof mealSchema>;

export const Meal = models.Meal || model("Meal", mealSchema);
