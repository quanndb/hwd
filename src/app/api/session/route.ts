import { connectDB } from "@/lib/db/mongodb";
import { SessionModel } from "@/lib/model/session.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();
  const body = await request.json();
  await SessionModel.create({ name: body.name });
  return NextResponse.json({});
}
