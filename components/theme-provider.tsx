'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Define the possible theme values. This type ensures we can only use valid theme options.
type Theme = 'dark' | 'light' | 'system';

// Props interface for the ThemeProvider component, making it highly configurable
type ThemeProviderProps = {
  children: React.ReactNode;            // Child components that will have access to the theme
  defaultTheme?: Theme;                 // Initial theme to use if none is stored
  storageKey?: string;                 // Key used for localStorage
  attribute?: string;                  // HTML attribute used for theme
  enableSystem?: boolean;              // Whether to allow system theme preference
};

// The shape of our theme context state
type ThemeProviderState = {
  theme: Theme;                        // Current theme value
  setTheme: (theme: Theme) => void;    // Function to update the theme
};

// Initial state for the context - used before Provider is initialized
const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

// Create the context with our initial state
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// The main ThemeProvider component that manages theme state and updates
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
  attribute = 'data-theme',
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  // Initialize theme state with the default theme
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  
  // Effect to load the saved theme from localStorage after mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [storageKey]);

  // Effect to handle theme changes and system preference
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');

    // Handle system theme preference
    if (theme === 'system' && enableSystem) {
      // Check if user's system prefers dark mode
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      
      // Optional: set a data attribute for CSS targeting
      root.setAttribute(attribute, systemTheme);
      return;
    }

    // Add the selected theme class
    root.classList.add(theme);
    // Set the theme attribute for CSS targeting
    root.setAttribute(attribute, theme);
  }, [theme, enableSystem, attribute]);

  // Create the context value object
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

// Example usage of the theme toggle component
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        // Cycle through themes: light -> dark -> system
        const newTheme: Theme = 
          theme === 'dark' ? 'system' :
          theme === 'system' ? 'light' : 'dark';
        setTheme(newTheme);
      }}
      className="theme-toggle"
    >
      Current theme: {theme}
    </button>
  );
}