import React, { useState, useEffect } from "react";

// --- Reusable Components ---
const InputSection = ({ title, children }) => (
  <div className="mb-10 bg-gray-900/40 p-6 rounded-2xl shadow-md border border-gray-800 backdrop-blur-sm">
    <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
      {title}
    </h3>
    <div className="space-y-4">{children}</div>
  </div>
);

const InputField = ({ label, placeholder, name, value, onChange, unit }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <div className="relative">
      <input
        type="number"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition placeholder-gray-500"
      />
      {unit && (
        <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 text-sm">
          {unit}
        </span>
      )}
    </div>
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg appearance-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-gray-900">
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
);

// --- Pie Chart ---
const PieChart = ({ data }) => {
  const categories = [
    { name: "Transport", value: data.transport, color: "fill-green-400" },
    { name: "Energy", value: data.energy, color: "fill-blue-400" },
    { name: "Food", value: data.food, color: "fill-yellow-400" },
    { name: "Waste", value: data.waste, color: "fill-red-400" },
  ];

  const total = categories.reduce((sum, cat) => sum + cat.value, 0) || 1;
  let cumulativeAngle = 0;

  const slices = categories
    .map((cat) => {
      const angle = (cat.value / total) * 360;
      if (angle === 0) return null;
      const start = (Math.PI / 180) * cumulativeAngle;
      const end = (Math.PI / 180) * (cumulativeAngle + angle);
      cumulativeAngle += angle;

      const x1 = 50 + 40 * Math.cos(start);
      const y1 = 50 + 40 * Math.sin(start);
      const x2 = 50 + 40 * Math.cos(end);
      const y2 = 50 + 40 * Math.sin(end);

      const largeArc = angle > 180 ? 1 : 0;
      const d = `M 50,50 L ${x1},${y1} A 40,40 0 ${largeArc},1 ${x2},${y2} Z`;
      return <path key={cat.name} d={d} className={cat.color} />;
    })
    .filter(Boolean);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-4 sm:space-y-0">
      <svg viewBox="0 0 100 100" className="w-36 h-36 transform -rotate-90">
        {slices.length > 0 ? slices : (
          <circle cx="50" cy="50" r="40" className="fill-gray-700" />
        )}
      </svg>
      <div className="space-y-2 text-sm text-gray-300">
        {categories.map((cat) => (
          <div key={cat.name} className="flex justify-between">
            <span>{cat.name}</span>
            <span className="font-semibold text-white">
              {((cat.value / total) * 100).toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Results Card ---
const ResultsCard = ({ footprint, breakdown }) => (
  <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
    <h2 className="text-2xl font-bold text-white mb-6">Your Results</h2>

    <div className="mb-8">
      <p className="text-sm text-gray-400 mb-1">Total Carbon Footprint</p>
      <p className="text-4xl font-extrabold text-green-400">
        {footprint.toFixed(1)} tons CO₂e/year
      </p>
    </div>

    <div className="mb-8">
      <h3 className="text-md font-semibold text-gray-300 mb-4">
        Breakdown by Category
      </h3>
      <PieChart data={breakdown} />
    </div>

    <div>
      <h3 className="text-md font-semibold text-gray-300 mb-2">
        Comparison to Global Average
      </h3>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-2 rounded bg-gray-700">
          <div
            style={{ width: `${(footprint / 10) * 100}%` }}
            className="h-2 bg-green-400 rounded-full"
          ></div>
        </div>
        <div className="absolute" style={{ left: `48%`, top: "1.5rem" }}>
          <div className="w-px h-2 bg-gray-400"></div>
          <span className="absolute -translate-x-1/2 mt-1 text-xs text-gray-400">
            4.8
          </span>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-2">
        {footprint > 4.8
          ? "You are slightly above the global average of 4.8 tons."
          : "You are below the global average of 4.8 tons. Great job!"}
      </p>
    </div>
  </div>
);

// --- Main Component ---
export default function Calculator() {
  const [inputs, setInputs] = useState({
    kmDriven: "",
    vehicleType: "gas",
    electricityUsage: "",
    naturalGasUsage: "",
    dietType: "average",
    wasteRecycled: "",
  });

  const [footprint, setFootprint] = useState(5.2);
  const [breakdown, setBreakdown] = useState({
    transport: 1.8,
    energy: 2.1,
    food: 1.0,
    waste: 0.3,
  });

  const emissionFactors = {
    transportation: { gas: 0.251, electric: 0.093, hybrid: 0.174, none: 0 },
    energy: { electricity: 0.855, naturalGas: 5.3 },
    food: { vegan: 1.5, vegetarian: 1.7, average: 2.5, meatLover: 3.3 },
    waste: 0.57,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const { kmDriven, vehicleType, electricityUsage, naturalGasUsage, dietType, wasteRecycled } = inputs;
    const km = parseFloat(kmDriven) || 0;
    const kwh = parseFloat(electricityUsage) || 0;
    const therms = parseFloat(naturalGasUsage) || 0;
    const waste = parseFloat(wasteRecycled) || 0;

    const transport = (km * 52 * emissionFactors.transportation[vehicleType]) / 1000;
    const electricity = (kwh * 12 * emissionFactors.energy.electricity) / 1000;
    const gas = (therms * 12 * emissionFactors.energy.naturalGas) / 1000;
    const energy = electricity + gas;
    const food = emissionFactors.food[dietType];
    const totalWaste = 4.9 * 365;
    const recycled = waste * 52;
    const unrecycled = Math.max(0, totalWaste - recycled);
    const wasteEmission = (unrecycled * emissionFactors.waste) / 1000;

    const total = transport + energy + food + wasteEmission;

    setFootprint(total > 0 ? total : 5.2);
    setBreakdown({
      transport: total > 0 ? transport : 1.8,
      energy: total > 0 ? energy : 2.1,
      food: total > 0 ? food : 1.0,
      waste: total > 0 ? wasteEmission : 0.3,
    });
  }, [inputs]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-16 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Calculate Your Carbon Footprint
        </h1>
        <p className="text-gray-400 mb-12 text-lg max-w-2xl">
          Estimate your environmental impact based on your daily habits and
          choices.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form className="w-full">
            <InputSection title="Transportation">
              <InputField
                label="Kilometers Driven per Week"
                name="kmDriven"
                placeholder="Enter kilometers"
                value={inputs.kmDriven}
                onChange={handleInputChange}
              />
              <SelectField
                label="Vehicle Type"
                name="vehicleType"
                value={inputs.vehicleType}
                onChange={handleInputChange}
                options={[
                  { value: "gas", label: "Gasoline Car" },
                  { value: "hybrid", label: "Hybrid Car" },
                  { value: "electric", label: "Electric Car" },
                  { value: "none", label: "No Car / Public Transport" },
                ]}
              />
            </InputSection>

            <InputSection title="Energy Usage">
              <InputField
                label="Electricity Usage (kWh per month)"
                name="electricityUsage"
                placeholder="Enter kWh"
                value={inputs.electricityUsage}
                onChange={handleInputChange}
              />
              <InputField
                label="Natural Gas Usage (therms per month)"
                name="naturalGasUsage"
                placeholder="Enter therms"
                value={inputs.naturalGasUsage}
                onChange={handleInputChange}
              />
            </InputSection>

            <InputSection title="Food Consumption">
              <SelectField
                label="Diet Type"
                name="dietType"
                value={inputs.dietType}
                onChange={handleInputChange}
                options={[
                  { value: "vegan", label: "Vegan" },
                  { value: "vegetarian", label: "Vegetarian" },
                  { value: "average", label: "Average (some meat)" },
                  { value: "meatLover", label: "Meat Lover (daily meat)" },
                ]}
              />
            </InputSection>

            <InputSection title="Waste Management">
              <InputField
                label="Waste Recycled (lbs per week)"
                name="wasteRecycled"
                placeholder="Enter lbs"
                value={inputs.wasteRecycled}
                onChange={handleInputChange}
              />
            </InputSection>
          </form>

          <ResultsCard footprint={footprint} breakdown={breakdown} />
        </div>
      </div>
    </div>
  );
}
