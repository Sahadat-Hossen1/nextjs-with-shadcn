import { Heart, MessageSquare, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export default function CardTwo({ item }) {
  // Demo data if none provided
  const data = item || {
    _id: "12345689",
    title: "Apple iPhone 15 Pro",
    photos: ["https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=500"],
    price: 899,
    oldPrice: 999,
    discount: "-10%",
    rating: 5,
    reviewsCount: 97
  };

  return (
    <div className="bg-white dark:bg-zinc-950 rounded-[32px] p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 relative group max-w-[340px] font-sans">
      {/* Top ID Section */}
      <div className="flex justify-end mb-2">
        <span className="text-[13px] text-zinc-400 font-medium tracking-tight">id: {data._id}</span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[1/1] mb-6 flex items-center justify-center">
        <Image
          src={data.photos[0]}
          alt={data.title}
          width={280}
          height={280}
          className="object-contain"
          priority
        />
        <button className="absolute top-2 right-2 p-1 text-zinc-700 hover:text-red-500 transition-colors">
          <Heart className="w-7 h-7 stroke-[1.5]" />
        </button>
      </div>

      {/* Product Information */}
      <div className="space-y-3">
        <h3 className="text-[19px] font-semibold text-zinc-800 dark:text-zinc-100 leading-tight">
          {data.title}
        </h3>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-[18px] h-[18px] ${i < data.rating ? "fill-zinc-800 text-zinc-800" : "text-zinc-300"}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-zinc-400 font-medium">
            <MessageSquare className="w-[18px] h-[18px] stroke-[2]" />
            <span className="text-sm">{data.reviewsCount}</span>
          </div>
        </div>

        {/* Footer Section: Price and Cart */}
        <div className="flex items-end justify-between pt-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-zinc-400 line-through text-[16px] font-medium decoration-zinc-400/60">
                ${data.oldPrice?.toLocaleString()}.00
              </span>
              <span className="bg-[#eff4ff] text-[#4d80ff] text-[12px] font-bold px-2 py-0.5 rounded-md">
                {data.discount}
              </span>
            </div>
            <div className="text-[32px] font-extrabold text-zinc-900 dark:text-white leading-none tracking-tight">
              ${data.price?.toLocaleString()}.00
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-[#2b6dff] hover:bg-blue-700 text-white p-[18px] rounded-[22px] transition-all shadow-lg shadow-blue-100 dark:shadow-none active:scale-95 group/cart">
            <ShoppingCart className="w-[26px] h-[26px] stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
