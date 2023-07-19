import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/skeleton/normalize.css';
import './assets/skeleton/skeleton.css';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
