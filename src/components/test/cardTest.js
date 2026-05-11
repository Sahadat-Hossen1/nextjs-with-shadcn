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
      "https://www.istockphoto.com/photo/hair-clipper-machine-with-white-isolated-gm2216362165-633041891?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=professional+rechargeable+hair+trimmer",
    ],
  },
  {
    _id: "EL001",
    title: "Professional Rechargeable Hair Trimmer",
    price: 2499,
    stare: 4.7,
    available: true,
    model: "HT-908 Pro",
    imgUrl: [
      "https://www.istockphoto.com/photo/hair-clipper-machine-with-white-isolated-gm2216362165-633041891?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=professional+rechargeable+hair+trimmer",
    ],
  },
  {
    _id: "EL001",
    title: "Professional Rechargeable Hair Trimmer",
    price: 2499,
    stare: 4.7,
    available: true,
    model: "HT-908 Pro",
    imgUrl: [
      "https://www.istockphoto.com/photo/hair-clipper-machine-with-white-isolated-gm2216362165-633041891?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=professional+rechargeable+hair+trimmer",
    ],
  },
  {
    _id: "EL001",
    title: "Professional Rechargeable Hair Trimmer",
    price: 2499,
    stare: 4.7,
    available: true,
    model: "HT-908 Pro",
    imgUrl: [
      "https://www.istockphoto.com/photo/hair-clipper-machine-with-white-isolated-gm2216362165-633041891?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=professional+rechargeable+hair+trimmer",
    ],
  },

];

export default function ProductGridTest() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Mapping Products */}
        {products.map((product) => (
          <Card
            key={product.index}
            className="rounded-3xl border bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <CardContent className="p-5">

              {/* Product Image with Zoom Effect */}
              <div className="relative w-full h-56 mb-5 overflow-hidden rounded-2xl">
                <Image
                  src={product.imgUrl[0]}
                  alt={product.title}
                  fill
                  className="object-contain transition-transform duration-500 ease-in-out hover:scale-110"
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
