import React from "react";
import { createContext, useContext } from "react"
import { ThemeProvider as StyledProvider } from "styled-components"
import themes from './themes'

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext)

export class AppThemeProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: this.initialTheme()
    }

    const methods = ['handleToggleTheme']
    methods.forEach(methodName => {
      this[methodName] = this[methodName].bind(this)
    });
  }

  initialTheme() {
    return localStorage.getItem('myAppThemeValue') || 'light'
  }

  handleToggleTheme() {
    this.setState(
      prevState => ({
        theme: (prevState.theme === 'light' ? 'dark' : 'light')
      })
    )
  }

  componentDidUpdate() {
    localStorage.setItem('myAppThemeValue', this.state.theme);
  }

  render() {
    const { children } = this.props
    const { theme } = this.state

    this.unm

    return (
      <ThemeContext.Provider value={{theme, onToggleTheme: this.handleToggleTheme}}>
        <StyledProvider theme={themes[theme] || themes.light}>
          {children}
        </StyledProvider>
      </ThemeContext.Provider>
    )
  }
}
