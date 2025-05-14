import React from 'react';
import ReactDOM from 'react-dom';
import { MemberstackProvider } from '@memberstack/react';
import App from './App';

const config = {
  publicKey: 'app_cmanyhawg01vb0wtn0ikl229j'
};

ReactDOM.render(
  <React.StrictMode>
    <MemberstackProvider config={config}>
      <App />
    </MemberstackProvider>
  </React.StrictMode>,
  document.getElementById('root')
);