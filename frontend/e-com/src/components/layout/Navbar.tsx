import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-md bg-brand-1/95 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* 🛍️ Logo */}
          <a href="/" className="text-3xl font-extrabold tracking-wide text-brand-4">
            ELIS
          </a>

          {/* 📄 Links */}
          <div className="hidden space-x-10 text-lg font-medium md:flex">
            <Link to="/" className="transition text-brand-4 hover:text-brand-3">Home</Link>
      <Link to="/products" className="transition text-brand-4 hover:text-brand-3">Store</Link>
      <Link to="/admin/add-product" className="transition text-brand-4 hover:text-brand-3">Add</Link>
   
            
          </div>

          {/* 🧾 Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-xl transition text-brand-4 hover:text-brand-3">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="text-xl transition text-brand-4 hover:text-brand-3">
              <i className="fa-regular fa-user"></i>
            </button>
            <button className="relative text-xl transition text-brand-4 hover:text-brand-3">
              <i className="fa-solid fa-cart-shopping"></i>
              {/* Example badge */}
              {/* <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white rounded-full bg-brand-2 -top-2 -right-2">
                2
              </span> */}
            </button>

            {/*Mobile menu button */}
            <button className="text-2xl transition text-brand-4 md:hidden hover:text-brand-3">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
