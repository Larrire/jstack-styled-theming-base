import React from 'react';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { AppThemeProvider } from './styles/AppThemeProvider';

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <Layout />
    </AppThemeProvider>
  );
};

export default App;
