import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About';
import './App.css';
import Insights from './Components/Insights';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
// Modal component for user sign-up
const GetStartedModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-300 scale-95 hover:scale-100" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Join EcoFootprint</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Sign up to save your progress and get personalized insights for a greener lifestyle.</p>
        <form>
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 text-gray-800 dark:text-gray-200" />
          <button type="submit" className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-green-500 text-white text-base font-bold shadow-lg hover:bg-green-500/90 transition-all">
            <span className="truncate">Create Account</span>
          </button>
        </form>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  // Initialize theme state to a default value, safe for SSR
  const [theme, setTheme] = useState('light');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State for calculator inputs
  const [homeEnergy, setHomeEnergy] = useState(150); // kWh/month
  const [transport, setTransport] = useState(50); // miles/week
  const [waste, setWaste] = useState(10); // kg/month
  const [footprint, setFootprint] = useState(null);

  // This effect runs only on the client, after the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (userPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  // Effect to apply the theme class and save it to localStorage whenever the theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  // Function to handle the footprint calculation
  const handleCalculation = (e) => {
    e.preventDefault();
    const homeFactor = 0.2; 
    const transportFactor = 0.4;
    const wasteFactor = 0.05;
    const calculatedFootprint = (homeEnergy * homeFactor) + (transport * transportFactor) + (waste * wasteFactor);
    setFootprint(calculatedFootprint.toFixed(2));
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Nav toggleTheme={toggleTheme} theme={theme} setIsModalOpen={setIsModalOpen} />
          <Hero onNavigate={(page) => setPage(page)} />
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <Nav toggleTheme={toggleTheme} theme={theme} setIsModalOpen={setIsModalOpen} />
          <About />
        </>
      ),
    },
    {
      path: '/insights',
      element: (
        <>
          <Nav toggleTheme={toggleTheme} theme={theme} setIsModalOpen={setIsModalOpen} />
          <Insights />
        </>
      ),
    },
  ]);

  return (
    <>
    
      <Nav toggleTheme={toggleTheme} theme={theme} setIsModalOpen={setIsModalOpen} />
      <Hero onNavigate={(page) => setPage(page)} />
      <RouterProvider router={router} />
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <video autoPlay muted loop id="myVideo">
            <source src="/background.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
      </video>
    </>
  );
};

export default App;

