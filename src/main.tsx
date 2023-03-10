import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';

import './styles/reset.css';
import './styles/_variables.css';
import './styles/shared.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
