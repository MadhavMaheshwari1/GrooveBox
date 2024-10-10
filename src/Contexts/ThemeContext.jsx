import { useEffect, useState, createContext } from "react";

// Create the context
const ThemeContext = createContext();

// Create and export the ThemeProvider component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check the user's system preference
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkMode ? 'dark' : 'light';
    });

    useEffect(() => {
        // Apply the theme to the root element
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme}}>
            {children}
        </ThemeContext.Provider>
    );
};

// Export both the context and the provider
export { ThemeContext, ThemeProvider };
