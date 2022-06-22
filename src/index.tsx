import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { registerLicense } from '@syncfusion/ej2-base';
import theme from 'theme/index';

import { App } from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

registerLicense(`${process.env.REACT_APP_SYNCFUSION_KEY}`);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
