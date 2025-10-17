import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { getProducts } from "../api/productApi";

type Product = {
  _id: string;
  name: string;
  price: number;
  oldPrice?: number;
  description: string;
images: {
      url: string;
      public_id: string;}
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="py-20 mt-20 text-center text-gray-500 animate-pulse">
        Loading products...
      </div>
    );

  return (
    <section className="px-6 py-16 mt-20 bg-gradient-to-b from-gray-50 to-white sm:px-12">
      <h2 className="mb-10 text-4xl font-bold text-center text-brand-1">
        Our Products
      </h2>

      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
