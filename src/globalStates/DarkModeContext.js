// DarkModeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if dark mode is enabled in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    // If it's there, parse it to boolean
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode(true);
  };

  const toggleLightMode = () => {
    setDarkMode(false);
  };

  useEffect(() => {
    // Save dark mode state to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, toggleLightMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
