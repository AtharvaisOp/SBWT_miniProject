import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Card = ({ className, children }) => (
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

export const CardTitle = ({ className, children }) => (
  <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
    {children}
  </h4>
);

export const CardDescription = ({ className, children }) => (
  <p
    className={cn(
      "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
      className
    )}
  >
    {children}
  </p>
);

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}
    >
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

// --- MAIN ABOUT COMPONENT ---
export default function About({ onNavigate }) {
  const [co2Data, setCo2Data] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  const [city, setCity] = useState("");

  // Step 1: Detect user location using ipapi.co
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setCoords({ latitude: data.latitude, longitude: data.longitude });
        setCity(data.city || "your area");
      } catch (err) {
        console.error("Failed to fetch location:", err);
        setCoords({ latitude: 19.07, longitude: 72.87 }); // fallback: Mumbai
        setCity("Mumbai");
      }
    };
    fetchLocation();
  }, []);

  // Step 2: Fetch CO2 data from Open-Meteo when coordinates are ready
  useEffect(() => {
    if (!coords.latitude || !coords.longitude) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=carbon_monoxide`
        );
        const data = await res.json();
        const hourly = data.hourly;
        const formatted = hourly.time.map((time, i) => ({
          time,
          value: hourly.carbon_monoxide[i],
        }));
        setCo2Data(formatted);
      } catch (err) {
        console.error("Failed to fetch CO₂ data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [coords]);

  const chartData = {
    labels: co2Data.slice(0, 24).map((d) => d.time.split("T")[1]),
    datasets: [
      {
        label: "Carbon Monoxide (μg/m³)",
        data: co2Data.slice(0, 24).map((d) => d.value),
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgba(34,197,94,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "white" } },
      title: {
        display: true,
        text: `Air Quality (CO Levels) - Last 24 Hours in ${city}`,
        color: "white",
      },
    },
    scales: {
      x: { ticks: { color: "#ccc" } },
      y: { ticks: { color: "#ccc" } },
    },
  };

  const insights = [
    {
      title: "Global Impact",
      description:
        "Urban carbon levels fluctuate daily due to transportation and energy use. Monitoring these helps track sustainability progress.",
      link: "#",
    },
    {
      title: "Why It Matters",
      description:
        "CO and CO₂ contribute to air pollution and global warming. Reducing emissions improves public health and climate stability.",
      link: "#",
    },
    {
      title: "How You Can Help",
      description:
        "Every small action—like conserving energy or using public transport—reduces carbon output and helps achieve a greener future.",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">About EcoFootprint</h1>
        <p className="text-lg text-gray-400 mb-8">
          Explore real environmental data around <span className="text-green-400">{city}</span> and understand your role in creating a sustainable planet.
        </p>

        {loading ? (
          <p className="text-gray-400 text-center">Fetching live CO₂ data...</p>
        ) : (
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl mb-12">
            <Line data={chartData} options={chartOptions} />
          </div>
        )}

        <HoverEffect items={insights} />

        <Link
          to="/home"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-green-500 font-semibold text-white shadow-md hover:bg-green-600 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
