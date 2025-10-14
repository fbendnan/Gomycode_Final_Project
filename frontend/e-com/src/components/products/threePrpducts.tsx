import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import ProductPreviewCard from "./ProductPreviewCard";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts(3);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching featured products", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading)
    return (
      <div className="py-20 text-center text-gray-500 animate-pulse">
        Loading featured products...
      </div>
    );

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-[#DDF4E7] via-white to-[#67C090]/10 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-6 text-3xl font-extrabold text-brand-1">
          Featured Products
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-600">
          Discover our best-sellers made with care and natural ingredients.
        </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {products.map((p) => (
    <ProductPreviewCard key={p._id} product={p} />
  ))}
</div>


        <div className="mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 text-lg font-semibold text-gray-600 shadow-md rounded-fll transitio-n bg-brand-3 hover:bg-brand-1 hover:scale-105"
          >
            View All Products →
          </a>
        </div>
      </div>
    </section>
  );
}



