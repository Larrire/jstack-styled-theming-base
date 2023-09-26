import React from "react";
import { createContext, useContext, useMemo, useState } from "react"
import { ThemeProvider as StyledProvider } from "styled-components"
import themes from './themes'

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext)

export const AppThemeProvider = ({children}) => {
  const initialTheme = localStorage.getItem('myAppThemeValue') || 'light'
  const [theme, setTheme] = useState(initialTheme);

  const handleToggleTheme = () => {
    setTheme( prevState => {
      const newState = prevState === 'light'
        ? 'dark'
        : 'light'

      localStorage.setItem('myAppThemeValue', newState)
      return newState
    })
  }

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.light
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{theme, onToggleTheme: handleToggleTheme}}>
      <StyledProvider theme={currentTheme}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  )
}