import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import "./index.css";


const container = document.getElementById('root'); // Make sure this ID matches your HTML
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
