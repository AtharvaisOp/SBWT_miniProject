"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/20 dark:bg-cyan-950/70 border-b border-green-500/20 dark:border-green-500/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 20 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-green-500"
          >
            <svg
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
            </svg>
          </motion.div>
          <a
            href="/"
            className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight hover:text-green-500 transition-colors"
          >
            EcoFootprint
          </a>
        </div>

        {/* NAV LINKS (Desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          {["Calculator","About", "Insights", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <Link to="/calculator" className="rounded-full bg-green-500 text-white text-sm font-semibold px-5 py-2 shadow-md hover:bg-green-600 transition-all" >
          Get Started
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-green-500/20 dark:border-green-500/30"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {["About", "Insights", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-3 rounded-full bg-green-500 text-white font-semibold px-6 py-2 shadow-md hover:bg-green-600 transition-all"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
