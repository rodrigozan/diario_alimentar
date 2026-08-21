import { Schema, model, models, type InferSchemaType } from "mongoose";

const waterLogSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    amountMl: { type: Number, required: true, min: 1 },
    date: { type: String, required: true, index: true },
  },
  { timestamps: true }
);

waterLogSchema.index({ userId: 1, date: 1 });

export type WaterLogDoc = InferSchemaType<typeof waterLogSchema>;

export const WaterLog = models.WaterLog || model("WaterLog", waterLogSchema);
