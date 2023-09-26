import React from 'react';
import { useThemeContext } from '../../styles/AppThemeProvider';

export const ToggleThemeButton = () => {
  const { theme, onToggleTheme } = useThemeContext();
  const icon = theme === 'dark'
    ? '🌤'
    : '🌙'

  return (
    <button onClick={onToggleTheme} type="button">{icon}</button>
  )
}