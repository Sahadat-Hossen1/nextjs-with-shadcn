"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const products = [
  {
    _id: "EL001",
    title: "Professional Rechargeable Hair Trimmer",
    price: 2499,
    stare: 4.7,
    available: true,
    model: "HT-908 Pro",
    imgUrl: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
    ],
  },
  {
    _id: "EL002",
    title: "Power Bank with Built-In Retractable USB-C Cable - 10000mAh",
    price: 1899,
    stare: 4.5,
    available: true,
    model: "PB-10K X1",
    imgUrl: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5",
    ],
  },
  {
    _id: "EL003",
    title: "Wireless Bluetooth Neckband Earphones",
    price: 1599,
    stare: 4.3,
    available: false,
    model: "NB-AirFlex",
    imgUrl: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    ],
  },
  {
    _id: "EL004",
    title: "Portable Mini Bluetooth Speaker",
    price: 1299,
    stare: 4.4,
    available: true,
    model: "SoundMini S2",
    imgUrl: [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    ],
  },
  {
    _id: "EL005",
    title: "Fast Charging USB Wall Adapter 65W",
    price: 999,
    stare: 4.6,
    available: true,
    model: "ChargeMax 65",
    imgUrl: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
    ],
  },
  {
    _id: "EL006",
    title: "Smart LED Digital Alarm Clock",
    price: 799,
    stare: 4.2,
    available: false,
    model: "TimeGlow D1",
    imgUrl: [
      "https://images.unsplash.com/photo-1501139083538-0139583c060f",
    ],
  },
  {
    _id: "EL007",
    title: "Portable Electric Kettle 1.5L",
    price: 2199,
    stare: 4.5,
    available: true,
    model: "HeatGo K15",
    imgUrl: [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
    ],
  },
  {
    _id: "EL008",
    title: "Wireless Gaming Mouse RGB",
    price: 1499,
    stare: 4.4,
    available: true,
    model: "GX-RGB Pro",
    imgUrl: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
    ],
  },
];

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Mapping Products */}
        {products.map((product) => (
          <Card
            key={product._id}
            className="rounded-3xl border bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <CardContent className="p-5">
              
              {/* Product Image */}
              <div className="relative w-full h-56 mb-5">
                <Image
                  src={product.imgUrl[0]}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Product Title */}
              <h2 className="text-lg font-semibold leading-7 line-clamp-2">
                {product.title}
              </h2>

              {/* Product Price */}
              <p className="text-2xl font-bold mt-4">
                ৳ {product.price}
              </p>

              {/* Optional Extra Info */}
              <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
                <span>⭐ {product.stare}</span>
                <span>{product.model}</span>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}