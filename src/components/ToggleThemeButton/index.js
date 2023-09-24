import React from 'react';
import { useTheme } from 'styled-components';

export const ToggleThemeButton = () => {
  const { theme, handleToggleTheme } = useTheme();
  const icon = theme === 'dark'
    ? '🌤'
    : '🌙'

  return (
    <button onClick={handleToggleTheme} type="button">{icon}</button>
  )
}