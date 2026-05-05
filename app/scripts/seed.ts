import {connectDB}  from "@/app/lib/mongodb";
import { Car } from "@/app/models/Car";
import { CARS } from "@/app/data/car";

async function seed() {
  await connectDB();

  await Car.deleteMany({});
  await Car.insertMany(CARS);

  console.log("✅ Seeded");
  process.exit();
}

seed();