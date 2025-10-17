import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// A more robust utility function to combine class names
// using clsx and tailwind-merge.
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Reusable UI Components from your snippet ---

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gray-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}
    >
      {children}
    </p>
  );
};

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};




// --- Main Application Component ---
// This component manages the state and renders the correct page.

export default function App() {
  const [page, setPage] = useState('home'); // Start on the home page

  const navigate = (targetPage) => {
    setPage(targetPage);
  };

  const projects = [
    {
      title: "Our Story",
      description: "EcoFootprint was born from a simple idea: that individual actions, when multiplied, can create a powerful wave of change. In a world facing urgent environmental challenges, we believe that the first step towards a sustainable future is understanding our own impact. Many people want to live more sustainably but don't know where to start. Our application is designed to be that starting point.",
      link: "#",
    },
    {
      title: "Mission",
      description: " Our mission is to provide a user-friendly, accurate, and insightful tool that helps you calculate your carbon footprint. By breaking down complex data into understandable metrics related to home energy, transportation, and waste, we demystify your environmental impact. But we don't stop at calculation. EcoFootprint provides personalized recommendations and tracks your progress over time, turning awareness into meaningful action.",
      link: "#",
    },
    {
      title: "Team",
      description: "We are a team of passionate developers, environmentalists, and designers dedicated to building tools for a greener planet. We are committed to using the latest data and methodologies to ensure our calculations are as accurate as possible. Join our community and take a conscious step towards a more sustainable lifestyle.",
      link: "#",
    }
  ];

  // A simple placeholder for the home page to make navigation work
  const HomePage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-5xl mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4 text-center">EcoFootprint Calculator</h1>
            <p className="text-xl text-gray-400 mb-8 text-center">This is the main calculator page.</p>
            <HoverEffect items={projects} />
        </div>
        
    </div>
  );

  return (
    <main className="bg-gray-900">
      {page === 'about' && <About onNavigate={navigate} />}
      {page === 'home' && <HomePage />}
    </main>
  );
}

