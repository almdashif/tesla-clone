
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useMemo, useEffect } from "react";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCar } from "@/src/store/slices/carSlice";
import { CARS } from "../data/car";
import { carItem } from "@/types/common";

export default function Vehicles() {
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("default");
    const [maxPrice, setMaxPrice] = useState(250000);
    const [data, setData] = useState<carItem[]>([])

    const dispatch = useDispatch();


    const router = useRouter();

    useEffect(() => {
        getCars()
    }, [])


    async function getCars() {
        try {
            const res = await fetch("http://localhost:3000/api/cars", {
                cache: "no-store", // always fresh
            });

            if (!res.ok) throw new Error("Failed to fetch cars");

            const data = await res.json();
            
            setData(data)
        } catch (error) {
            console.error("API Error:", error);
            return [];
        }
    }

    const filteredCars = useMemo(() => {
        let list = data?.filter(
            (c) =>
                (filter === "All" || c.category === filter) &&
                c.price <= maxPrice
        );

        if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
        if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
        if (sort === "range") list.sort((a, b) => b.range - a.range);

        return list;
    }, [filter, sort, maxPrice, data]);

    return (
        <div className="bg-white min-h-screen">

            <Navbar page='cars' />

            {/* HERO */}
            <div className="text-center py-12 mt-12 border-b bg-gray-50">

                <h1 className="text-4xl font-light tracking-tight text-gray-900">
                    Electric Vehicles
                </h1>

                <p className="text-gray-500 mt-2 text-sm">
                    Configure and order your vehicle
                </p>

                {/* FILTERS */}
                <div className="flex justify-center mt-6">
                    <div className="flex gap-2 bg-white p-1 rounded-full shadow-sm border">

                        {["All", "Sedan", "SUV", 'Truck', "Supercar"].map((f) => {
                            const active = filter === f;

                            return (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`
              px-5 py-2 text-sm rounded-full transition-All duration-200
              ${active
                                            ? "bg-black text-white shadow-md"
                                            : "text-gray-600 hover:bg-gray-100"}
            `}
                                >
                                    {f}
                                </button>
                            );
                        })}

                    </div>
                </div>

                {/* PRICE SLIDER */}
                <div className="mt-8 flex flex-col items-center">

                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                        <span>Max price</span>
                        <span className="font-medium text-black">
                            {maxPrice >= 250000 ? "Any" : `$${maxPrice.toLocaleString()}`}
                        </span>
                    </div>

                    <input
                        type="range"
                        min={40000}
                        max={250000}
                        step={5000}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-64 accent-black cursor-pointer"
                    />
                </div>
            </div>

            {/* SORT + COUNT */}
            <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">

                {/* Count */}
                <p className="text-sm text-gray-500">
                    <span className="text-black font-medium">
                        {filteredCars.length}
                    </span>{" "}
                    vehicles
                </p>

                {/* Sort Dropdown */}
                <div className="relative">
                    <select
                        onChange={(e) => setSort(e.target.value)}
                        className="appearance-none bg-white border border-gray-300 text-sm px-4 py-2 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                    >
                        <option value="default">Featured</option>
                        <option value="price-asc">Price: Low → High</option>
                        <option value="price-desc">Price: High → Low</option>
                    </select>

                    {/* Arrow */}
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
                        ▼
                    </span>
                </div>

            </div>

            {/* GRID */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {filteredCars.map((car, i) => (
                    <div
                        key={car?.id || i}
                        onClick={() => { dispatch(setCar(car)); router.push(`/cars/${car?.id}`) }}
                        className="border rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                        {/* Image */}
                        <div className="bg-gray-100 aspect-video overflow-hidden">
                            <img
                                src={car.images[0]}
                                className="w-full h-full object-cover hover:scale-105 transition"
                            />
                        </div>

                        {/* Body */}
                        <div className="p-4">
                            <p className="text-xs text-gray-400">{car.category}</p>
                            <h2 className="text-xl">{car.name}</h2>
                            <p className="text-sm text-gray-500">{car.tagline}</p>

                            {/* Specs */}
                            <div className="grid grid-cols-3 text-center mt-4 text-sm">
                                <div>{car.range} mi</div>
                                <div>{car.accel}s</div>
                                <div>{car.topSpeed} mph</div>
                            </div>

                            {/* Price */}
                            <div className="mt-4 flex justify-between">
                                <span>${car.price}</span>
                                <span className="text-sm text-gray-400">
                                    ${Math.round(car.price / 72)}/mo
                                </span>
                            </div>

                            {/* Buttons */}
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                <button className="bg-black text-white py-2">
                                    Order
                                </button>
                                <button className="border py-2">
                                    Learn
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <Footer />
        </div>
    );
}