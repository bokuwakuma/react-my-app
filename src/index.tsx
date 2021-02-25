import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import TemporaryDrawer from './dashboard/drawer/TemporaryDrawer';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <TemporaryDrawer />
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);
