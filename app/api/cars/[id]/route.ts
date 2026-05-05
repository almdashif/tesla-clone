import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import { Car } from "@/app/models/Car";
import { applyCORS } from "@/app/lib/security";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const car = await Car.findOne({ id: Number(params.id) }).lean();

    if (!car) {
      return NextResponse.json({ error: "Car not found" }, { status: 404 });
    }

    return NextResponse.json(car);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch car" },
      { status: 500 }
    );
  }
}

export async function OPTIONS(req: Request) {
  const res = new NextResponse(null, { status: 204 });
  return applyCORS(req, res);
}