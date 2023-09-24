import React, { useMemo, useState } from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes'

function App() {
  const [theme, setTheme] = useState('dark');
  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(
      prevState => (prevState === 'dark') ? 'light' : 'dark'
    )
  }

  return (
    <ThemeProvider theme={{...currentTheme, theme, handleToggleTheme}}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
