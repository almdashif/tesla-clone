"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { mapColors } from "@/src/util/common";

export default function Page({ params }: { params: { slug: string } }) {
  const images = [
    "https://images.ctfassets.net/c9t6u0qhbv9e/7kipVGBW9Gqd2amWuTzQfe/ced2fb29912bc79d496c7a4bc4de90bf/ModelS_70.jpg",
  ];
    const selectedCar = useSelector(
    (state: RootState) => state.car.selectedCar
  );

  console.log({params:params?.slug, selectedCar},'dasdasd')

  const [hero, setHero] = useState(selectedCar?.images[0] ?? images[0]);
  const [color, setColor] = useState("Black");
  const [range, setRange] = useState(405);
  const [accel, setAccel] = useState(1.99);
  const [topSpeed, setTopSpeed] = useState(200);
  const [price, setPrice] = useState(74990);
  const [trim, setTrim] = useState("Long Range AWD");
  const router = useRouter();

  const monthly = Math.round(price / 72);

  return (
    <div className="bg-white min-h-screen">

      <Navbar page='cars' />

  

      {/* HERO */}
      <div className="relative h-[560px] overflow-hidden bg-gray-100 mt-12">
        <img src={hero} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute top-8 left-9 bg-black px-4 py-1 text-xs tracking-[3px] uppercase text-white">
          Best Seller
        </div>

        <div className="absolute bottom-10 left-9">
          <p className="text-xs tracking-[5px] text-white/60 uppercase mb-2">
            {selectedCar?.category ?? ''}
          </p>
          <h1 className="text-[88px] leading-[0.88] font-bold tracking-tight text-white">
            {selectedCar?.name ?? ''}
          </h1>
          <p className="text-sm text-white/60 mt-3">
            {selectedCar?.tagline ?? ''}
          </p>
        </div>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-[1fr_360px]">

        {/* LEFT */}
        <div className="p-10">

          {/* STATS */}
          <div className="mb-10">
            <p className="text-xs tracking-[4px] text-gray-400 mb-5 uppercase">
              Performance
            </p>

            <div className="grid grid-cols-3 gap-[1px] bg-gray-200">
              {[ 
                { val: range, unit: "mi", label: "Range" },
                { val: accel, unit: "s", label: "0-60" },
                { val: topSpeed, unit: "mph", label: "Top Speed" },
              ].map((s, i) => (
                <div key={i} className="bg-white p-6">
                  <div className="text-5xl font-bold text-gray-900">
                    {s.val}
                    <span className="text-sm text-gray-400 ml-1">{s.unit}</span>
                  </div>
                  <p className="text-[10px] tracking-[3px] text-gray-400 mt-1 uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* COLORS */}
          <div className="mb-10">
            <p className="text-xs tracking-[4px] text-gray-400 uppercase mb-4">
              Exterior Color
            </p>

            <div className="flex gap-4">
              {mapColors(selectedCar?.colorNames ?? [], selectedCar?.colors ?? [])?.map((c,i) => (
                <div
                  key={c.name}
                  onClick={() => {setColor(c.name); setHero(prev => selectedCar?.images[i] ?? prev)}}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <div
                    className={`w-8 h-8 rounded-full border-2 transition-all  group-hover:border-gray-400`}
                    style={{ background: c.color, borderColor: color == c.name ? c.color : '' }}
                  />
                  <span className={`text-xs mt-1 transition ${
                    color === c.name ? '' : "text-gray-400"
                  } text-red`}
                   style={{ color: color === c.name ? c.color : undefined }}
                   >
                    {c.name ?? ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="border-l border-gray-200 p-8 bg-gray-50">

          <div className="mb-6">
            <h2 className="text-5xl font-bold text-gray-900">
              ${selectedCar?.price?.toLocaleString()}
            </h2>
            <p className="text-xs text-gray-400 mt-2">
              Est. ${(Number(selectedCar?.price)/72)?.toLocaleString()}/mo · 72 mo
            </p>
          </div>

          <div className="space-y-3 text-sm border-y border-gray-200 py-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-400">Type</span>
              <span className="text-gray-800 font-medium">{selectedCar?.category ?? ''}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Color</span>
              <span className="text-gray-800 font-medium">{color}</span>
            </div>
          </div>

          <button className="w-full bg-black text-white py-4 uppercase text-xs tracking-[3px] mb-3 hover:bg-gray-800 transition">
            Order Now
          </button>

          <button className="w-full border border-gray-300 py-3 uppercase text-xs tracking-[3px] text-gray-500 hover:text-black hover:border-black transition">
            Test Drive
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}