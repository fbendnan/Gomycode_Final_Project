import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-gray-800 bg-gradient-to-t from-brand-4 to-brand-3">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-extrabold tracking-wide text-brand-1">DeoStore</h3>
            <p className="text-sm text-brand-2">
              Fresh deodorant products online. Quality & freshness delivered straight to your door.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-extrabold tracking-wide text-brand-1">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="transition-all duration-300 text-brand-2 hover:text-brand-1 hover:translate-x-1">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition-all duration-300 text-brand-2 hover:text-brand-1 hover:translate-x-1">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="transition-all duration-300 text-brand-2 hover:text-brand-1 hover:translate-x-1">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-all duration-300 text-brand-2 hover:text-brand-1 hover:translate-x-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-extrabold tracking-wide text-brand-1">Contact Us</h3>
            <ul className="space-y-2 text-sm text-brand-2">
              <li>Email: ELIS@gmail.com</li>
              <li>Phone: +212 600000000</li>
              <li>Address: Casablanca, Morocco</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 mt-10 text-sm text-center border-t text-brand-2 border-brand-2">
          &copy; 2025 ELIS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



