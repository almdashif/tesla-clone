import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import { Car } from "@/app/models/Car";
import { applyCORS, applySecurityHeaders, rateLimit } from "@/app/lib/security";

export async function GET(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    // 🚦 Rate limit
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    await connectDB();

    const cars = await Car.find().lean();

    let res = NextResponse.json(cars);

    res = applySecurityHeaders(res);

    res = applyCORS(req, res);

    return res;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function OPTIONS(req: Request) {
  const res = new NextResponse(null, { status: 204 });
  return applyCORS(req, res);
}