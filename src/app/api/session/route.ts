import { connectDB } from "@/lib/db/mongodb";
import { SessionModel } from "@/lib/model/session.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();
  const body = await request.json();
  await SessionModel.create({ name: body.name });
  return NextResponse.json({});
}

export async function GET(request: NextRequest) {
  await connectDB();

  // Lấy query params từ URL
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const requestDay = searchParams.get("requestDay");

  // Tạo điều kiện lọc động
  const filter: Record<string, unknown> = {};

  if (name) {
    // Tìm gần đúng (case-insensitive)
    filter.name = { $regex: name, $options: "i" };
  }

  if (requestDay) {
    // requestDay dạng '2025-10-18' chẳng hạn
    // lọc theo ngày tạo (createdAt)
    const start = new Date(requestDay);
    const end = new Date(requestDay);
    end.setDate(end.getDate() + 1);
    filter.createdAt = { $gte: start, $lt: end };
  }

  // Query với filter
  const sessions = await SessionModel.find(filter).sort({ createdAt: -1 });

  return NextResponse.json(sessions);
}
