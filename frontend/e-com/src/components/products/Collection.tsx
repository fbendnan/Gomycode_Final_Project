export default function Collection() {
  const products = [
    {
      id: 1,
      name: "Fresh Mint",
      desc: "Invigorating mint freshness with 24hr protection",
      price: "$12.99",
      img: "/images/fresh-mint.jpg",
    },
    {
      id: 2,
      name: "Lavender Dreams",
      desc: "Calming lavender scent with natural extracts",
      price: "$14.99",
      img: "/images/lavender.jpg",
    },
    {
      id: 3,
      name: "Ocean Breeze",
      desc: "Crisp ocean-inspired freshness all day",
      price: "$13.99",
      img: "/images/ocean.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        Our Collection
      </h2>
      <p className="text-gray-500 mb-12">
        Choose your favorite scent and experience premium freshness
      </p>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
          >
            <img
              src={p.img}
              alt={p.name}
              className="rounded-xl mb-4 w-full h-60 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{p.desc}</p>
            <p className="text-teal-500 font-bold mb-4">{p.price}</p>
            <button className="bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}