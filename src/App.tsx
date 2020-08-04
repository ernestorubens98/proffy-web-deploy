import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './assets/styles/themes/light';
import dark from './assets/styles/themes/dark';

import Routes from './routes';
import GloalStyle from './assets/styles/global';
import ToggleHeader from './components/ToggleHeader';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GloalStyle />
      <ToggleHeader toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
