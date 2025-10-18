import { ISession } from "@/lib/type/session";
import { Document, Model, model, models, Schema } from "mongoose";

const SessionSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const SessionModel: Model<ISession & Document> =
  models.Session || model("Session", SessionSchema);
