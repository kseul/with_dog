import ReactDOM from 'react-dom/client';
import Router from 'Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';
import theme from 'styles/Theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from 'redux/store';
import { persistor } from 'redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </>
);
