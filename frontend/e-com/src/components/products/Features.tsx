export default function Features() {
  const features = [
    { icon: "🌿", title: "Natural Ingredients", desc: "Pure botanical formulas for your skin." },
    { icon: "⏳", title: "24h Protection", desc: "Stay confident and fresh all day long." },
    { icon: "♻️", title: "Eco Packaging", desc: "Sustainable materials, planet-friendly." },
  ];

  return (
    <section className="py-20 bg-brand-4">
      <div className="grid max-w-6xl gap-8 px-6 mx-auto text-center md:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-10 transition-transform duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-4 text-5xl text-brand-1">{f.icon}</div>
            <h3 className="mb-3 text-xl font-semibold text-brand-2">{f.title}</h3>
            <p className="text-brand-1/80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
