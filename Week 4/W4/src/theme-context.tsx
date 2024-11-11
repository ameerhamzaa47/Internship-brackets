import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: boolean;  // true for light, false for dark
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState(true); // true = light theme, false = dark theme

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
    // Dynamically change the theme by setting a 'data-theme' attribute on the <html> tag
    if (theme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};