import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routing from 'routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';
import { RecoilRoot } from 'recoil';
import 'antd/dist/antd.min.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <Routing />
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
