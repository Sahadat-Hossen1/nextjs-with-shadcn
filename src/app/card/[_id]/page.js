import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function ProductCard({ params }) {
  if (!params) {
    throw new Error("params is undefined");
  }

  const { id } = params;

  const res = await fetch("http://localhost:4000/products/" + id);
  if (!res.ok) {
    const message = await res.text();
    throw new Error(`Failed to load product ${id}: ${res.status} ${message}`);
  }

  const product = await res.json();
  console.log(product);

  return (
    <Card className="w-[300px] rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105 duration-300">
      {/* Image */}
      {product.image ? (
        <div className="relative w-full h-[220px]">
          {/* <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-t-2xl"
          /> */}
          <Image src={product["valid photo"]} alt={product.title} fill />
        </div>
      ) : (
        <div className="w-full h-[220px] rounded-t-2xl bg-gray-100 flex items-center justify-center">
          <span className="text-sm text-gray-500">No image available</span>
        </div>
      )}

      <CardContent className="p-4 space-y-2">
        <h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <p className="text-yellow-500">⭐ {product.rating}</p>

        {/* Price */}
        <p className="text-xl font-bold text-primary">${product.price}</p>
      </CardContent>

      <CardFooter className="p-4">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
