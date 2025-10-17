type ProductProps = {
  product: {
    _id: string;
    name: string;
    price: number;
    oldPrice?: number;
    description: string;
    images: {
      url: string;
      public_id: string;
    };
  };
};

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="relative flex flex-col overflow-hidden transition-all duration-300 border shadow-sm border-brand-3 group rounded-2xl bg-gradient-to-b from-brand-4 to-brand-3 hover:-translate-y-1 hover:shadow-xl">
      {/* Wishlist Button */}
      <button className="absolute z-10 p-2 transition rounded-full text-brand-3 right-4 top-4 bg-white/80 backdrop-blur-sm hover:bg-brand-1 hover:text-white">
        <span className="sr-only">Add to wishlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      {/* Image */}
      <div className="relative overflow-hidden">
        {/* Placeholder image */}
        <div className="flex items-center justify-center w-full h-64 text-6xl bg-gradient-to-br from-brand-4 to-brand-2">
          <img
            src={product.images.url}
            alt={product.name}
            className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
          />
        </div>
        <div className="absolute inset-0 transition bg-black/0 group-hover:bg-black/10" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <h3 className="text-lg font-semibold transition text-brand-1 group-hover:text-brand-2">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-brand-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xl font-bold text-brand-1">
              ${product.price.toFixed(2)}
            </p>
            {product.oldPrice && (
              <p className="text-sm line-through text-brand-3">
                ${product.oldPrice.toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-semibold transition shadow rounded-xl bg-brand-2 hover:scale-105">
              Add to Cart
            </button>
            <button className="px-4 py-2 text-sm font-semibold transition shadow rounded-xl bg-brand-1 hover:scale-105">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
