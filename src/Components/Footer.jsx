import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-black border-t border-green-500/10 ">
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-8 text-center">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {[
            { name: "About Us", href: "/about" },
            { name: "Insights", href: "/insights" },
            { name: "Home", href: "/" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:drop-shadow-[0_0_6px_#00FF84]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-24 mx-auto bg-green-500/20 mb-8" />

        {/* Brand + Tagline */}
        <div className="text-gray-400 text-sm mb-2">
          <span className="font-semibold text-green-400">EcoFootprint</span> — 
          Calculating a Greener Tomorrow
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs tracking-wide">
          © 2025 EcoFootprint. All rights reserved.
        </p>
      </div>
    </footer>
  );
}