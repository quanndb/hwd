// mongoose.d.ts (ở root)
import mongoose from "mongoose";

declare global {
  var mongoose: MongooseCache | undefined;
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

export {};
