type ProductProps = {
  product: {
    _id: string;
    name: string;
    price: number;
    description: string;
    images: {
      url: string;
      public_id: string;
    };
  };
};

export default function ProductPreviewCard({ product }: ProductProps) {
  return (
    <div className="flex flex-col items-center overflow-hidden transition shadow-lg md:flex-row bg-brand-4 rounded-2xl hover:shadow-2xl">
      {/* Image */}
      <div className="w-full overflow-hidden md:w-1/2">
        <img
          src={product.images.url}
          alt={product.name}
          className="object-cover w-full h-64 transition-transform duration-500 md:h-full hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="w-full p-6 text-center md:w-1/2 md:p-10 md:text-left">
        <h3 className="text-2xl font-bold text-brand-1">{product.name}</h3>
        <p className="mt-2 text-xl font-semibold text-brand-3">${product.price}</p>
        <p className="mt-3 text-brand-2">{product.description}</p>
        <a
          href={`/products/${product._id}`}
          className="inline-block px-6 py-2 mt-5 font-semibold text-white transition-all rounded-xl bg-brand-1 hover:bg-brand-2 hover:text-brand-4"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
