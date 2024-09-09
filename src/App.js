import React from 'react';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { AppThemeProvider } from './styles/AppThemeProvider';

class App extends React.Component {
  state = {
    theme: 'dark',
  }

  handleToggleTheme = () => {
    this.setState(
      prevState => ({ theme: prevState === 'dark' ? 'light' : 'dark'})
    )
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch');
    console.log(error);
    console.log(info);
    console.log('=============================================');
  }

  render() {
    const { theme } = this.state;

    return (
      <AppThemeProvider>
        <GlobalStyle />
        <Layout />
      </AppThemeProvider>
    )
  }
}

export default App;
