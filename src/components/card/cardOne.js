import { ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";

export default function Card({ item }) {
  return (
    <div className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={item.photos[0]}
          alt={item.title}
          width={500}
          height={625}
          className={`object-cover w-full h-full transition-all duration-700 ${item.photos[1] ? 'group-hover:opacity-0 group-hover:scale-110' : 'group-hover:scale-105'}`}
        />
        {item.photos[1] && (
          <Image
            src={item.photos[1]}
            alt={`${item.title} - view 2`}
            width={500}
            height={625}
            className="absolute inset-0 object-cover w-full h-full opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        )}
        
        {/* Sale Badge */}
        {item.oldPrice && (
          <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Sale
          </div>
        )}

        <div className="absolute top-4 right-4 z-10">
          <button className="p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white transition-colors cursor-pointer group/heart">
            <Heart className="w-5 h-5 text-zinc-600 group-hover/heart:text-red-500 group-hover/heart:fill-red-500 transition-colors" />
          </button>
        </div>
        
        {item.photos.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            {item.photos.map((_, idx) => (
              <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-white' : 'bg-white/40'}`} />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2 truncate">
          {item.title}
        </h3>
        <div className="flex items-end justify-between gap-2">
          <div className="flex flex-col">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider mb-1">Price</p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                {item.price.toLocaleString()} <span className="text-sm font-medium">Tk</span>
              </span>
              {item.oldPrice && (
                <del className="text-sm text-zinc-400 dark:text-zinc-500 decoration-zinc-400/50">
                  {item.oldPrice.toLocaleString()} Tk
                </del>
              )}
            </div>
          </div>
          <button className="flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer shrink-0">
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
