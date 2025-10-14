import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/layout/Navbar";
// import Collection from "../components/products/Collection";
import Features from "../components/products/Features";
// import Products from "../components/products/ProductList";
import ThreeProducts from "../components/products/threePrpducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ThreeProducts />
      {/* <Collection /> */}
      {/* <Products /> */}
      <Footer />
    </>
  );
}
