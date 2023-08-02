import React, { createContext } from 'react';
import useToggle from '../hooks/useToggle';

const ThemeContext = createContext();

function CustomThemeProvider(props) {
    const [lightTheme, toggleTheme] = useToggle();

    return (
        <ThemeContext.Provider value={{lightTheme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {CustomThemeProvider, ThemeContext}