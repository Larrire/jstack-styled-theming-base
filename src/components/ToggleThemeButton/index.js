import React from 'react';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { useThemeContext } from '../../styles/AppThemeProvider';

export const ToggleThemeButton = () => {
  const { theme, onToggleTheme } = useThemeContext();
  const icon = theme === 'dark'
    ? <BsSunFill color='#FFAD33'/>
    : <BsMoonStarsFill color='#00'/>

  return (
    <button onClick={onToggleTheme} type="button">
      {icon}
    </button>
  )
}