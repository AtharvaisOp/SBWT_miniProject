import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Insights = ({ onNavigate }) => {
  const tips = [
    {
      title: "At Home",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
          <path d="M128,20a108,108,0,1,0,108,108A108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm42.4-129.17-56,40a8,8,0,0,0,0,14.34l56,40A8,8,0,0,0,176,168V88a8,8,0,0,0-5.6-7.56A8.08,8.08,0,0,0,170.4,82.83ZM160,153.05,116.29,128,160,102.95Z"></path>
        </svg>
      ),
      items: [
        "Switch to LED light bulbs to use 75% less energy.",
        "Unplug electronics when not in use to avoid phantom energy loss.",
        "Improve insulation in your home to reduce heating and cooling needs.",
        "Opt for energy-efficient appliances (ENERGY STAR).",
        "Wash clothes in cold water to save energy on heating."
      ]
    },
    {
      title: "Transport",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
          <path d="M208,80a16,16,0,0,0-16,16v88H64V96a16,16,0,0,0-32,0v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM80,48A32,32,0,1,1,48,80,32,32,0,0,1,80,48Zm96,0a32,32,0,1,1-32,32,32,32,0,0,1,32-32Z"></path>
        </svg>
      ),
      items: [
        "Walk, bike, or use public transport whenever possible.",
        "Carpool with friends or colleagues for commutes.",
        "Maintain your vehicle: inflated tires improve mileage by 3%.",
        "Combine errands to reduce driving time.",
        "Consider electric or hybrid vehicles."
      ]
    },
    {
      title: "Waste & Diet",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
          <path d="M202.83,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H53.17a8,8,0,0,0-6.13,2.58L12.35,104.5a8,8,0,0,0,0,11L47,153.42A8,8,0,0,0,53.17,156H80v68a8,8,0,0,0,16,0V156h64v68a8,8,0,0,0,16,0V156h26.83a8,8,0,0,0,6.13-2.58l34.69-37.92a8,8,0,0,0,0-11L209,66.58A8,8,0,0,0,202.83,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM55.3,140,29,109.52,55.3,79.08ZM200,109.52,173.7,140H96V79.08h77.7Z"></path>
        </svg>
      ),
      items: [
        "Reduce, Reuse, Recycle.",
        "Compost food scraps to cut landfill methane.",
        "Avoid single-use plastics — go reusable.",
        "Eat less red meat; it has a high carbon footprint.",
        "Buy local and seasonal produce."
      ]
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white drop-shadow-sm">
          Carbon Footprint Insights
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          Knowledge is power — take charge with these simple, high-impact ways to reduce your footprint.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {tips.map((tip, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/60 border border-green-500/20 dark:border-green-400/20 shadow-lg rounded-2xl p-8 flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 dark:bg-green-400/10 text-green-600 dark:text-green-400">
                  {tip.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{tip.title}</h3>
              </div>
              <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                {tip.items.map((i, j) => (
                  <li key={j}>{i}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <Link
    to="/calculator"
    className="inline-block mt-8 px-8 py-3 rounded-full bg-green-500 font-semibold text-white shadow-md hover:bg-green-600 transition-all"
  >
    Calculate Your Footprint
  </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
