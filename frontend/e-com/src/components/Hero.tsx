import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-brand-1 bg-gradient-to-r from-brand-4 via-brand-3 to-brand-2">
      {/* Decorative circles */}
      <div className="absolute rounded-full bg-brand-1 -top-20 -left-20 w-96 h-96 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute rounded-full bg-brand-2 -bottom-32 -right-32 w-96 h-96 opacity-30 blur-3xl animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32 md:flex-row md:justify-between">
        
        {/* Text content */}
        <div className="mb-10 md:w-1/2 md:mb-0">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold uppercase rounded-full text-brand-4 bg-brand-1">
            20% Off First Order
          </span>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-brand-1 sm:text-5xl lg:text-6xl">
            Stay Fresh, Feel Confident <br className="hidden sm:block"/> Every Day
          </h1>

          <p className="mb-8 text-lg text-brand-1/80 sm:text-xl">
            Explore our premium deodorant collection designed to keep you fresh and energized all day.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/shop"
              className="px-6 py-3 font-semibold text-white transition-colors rounded-lg shadow-lg bg-brand-1 hover:bg-brand-2 hover:text-brand-1"
            >
              Shop Now
            </a>
            <a
              href="/about"
              className="px-6 py-3 font-semibold transition-colors border-2 rounded-lg text-brand-1 border-brand-1 hover:bg-brand-1 hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:w-1/2 md:justify-end">
          <img
            src="https://www.laino.fr/wp-content/uploads/2024/07/LAI-ambiance-602117-3616826021173-deodorant-amande-texture-819x1024.png"
            alt="Deodorant"
            className="object-contain transition-transform duration-500 transform rounded-full w-60 sm:w-96 lg:w-full hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

