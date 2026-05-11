
import CardOne from "./cardOne";
import CardTwo from "./cardTwo";

const demoCardData = [
  {
    _id: "12345689",
    title: "Apple iPhone 15 Pro",
    photos: ["https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=500"],
    price: 899,
    oldPrice: 999,
    discount: "-10%",
    rating: 5,
    reviewsCount: 97
  },
  {
    _id: "2",
    title: "Minimalist Smart Watch",
    photos: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500"],
    price: 199,
    oldPrice: 249,
    discount: "-20%",
    rating: 4,
    reviewsCount: 42
  },
  {
    _id: "3",
    title: "Premium Headphones",
    photos: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500"],
    price: 299,
    oldPrice: 399,
    discount: "-25%",
    rating: 5,
    reviewsCount: 156
  },
  {
    _id: "4",
    title: "Mechanical Keyboard",
    photos: ["https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=500"],
    price: 149,
    oldPrice: 179,
    discount: "-15%",
    rating: 4,
    reviewsCount: 88
  }
];

export default function CardList() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      {/* Design Two Section */}
      <section>
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white">Premium Design Two</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">A clean, focused product card layout.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
          {demoCardData.map((item) => (
            <CardTwo key={item._id} item={item} />
          ))}
        </div>
      </section>

      {/* Design One Section */}
      <section>
        <div className="mb-10 text-center border-t pt-20 border-zinc-100 dark:border-zinc-800">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Design One</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">The original hover-focused design.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {demoCardData.map((item) => (
            <CardOne key={item._id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}