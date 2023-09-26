import React, { useEffect } from "react";
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
      return prevState === 'light'
        ? 'dark'
        : 'light'
    })
  }

  useEffect(() => {
    localStorage.setItem('myAppThemeValue', theme)
  }, [theme])

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