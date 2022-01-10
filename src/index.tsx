import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/styles/theme';
import GlobalStyle from 'components/styles/global-styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
