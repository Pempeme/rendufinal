import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {AuthContexProvider} from "./context/authContext";

// Utilisez AuthContexProvider ici

import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContexProvider>
    <App />
  </AuthContexProvider>
</React.StrictMode>
);