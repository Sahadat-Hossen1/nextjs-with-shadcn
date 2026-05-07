import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const res = await fetch("http://localhost:4000/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return (
    <div>
      <h1>this is card page</h1>
      <div className="grid grid-cols-3 gap-2">
        {data.map((product) => {
          const imageSrc = product.image || product["valid photo"];

          return (
            <div key={product.id} className="grid grid-cols-3 gap-2">
              <Card className="w-[300px] rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105 duration-300">
                <div className="relative w-full h-[220px]">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={product.title}
                      fill
                      unoptimized
                      className="object-cover rounded-t-2xl"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-t-2xl bg-gray-100">
                      <span className="text-sm text-gray-500">
                        No image available
                      </span>
                    </div>
                  )}
                </div>

                <CardContent className="p-4 space-y-2">
                  <h2 className="text-lg font-semibold line-clamp-1">
                    {product.title}
                  </h2>

                  <p className="text-sm text-gray-500 line-clamp-2">
                    {product.description}
                  </p>

                  <p className="text-yellow-500">Rating: {product.rating}</p>

                  <p className="text-xl font-bold text-primary">
                    ${product.price}
                  </p>
                </CardContent>

                <CardFooter className="p-4">
                  <Button asChild className="w-full">
                    <Link href={`/card/${product.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
