// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Jika ada file CSS kustom
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
