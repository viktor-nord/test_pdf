import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pos.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Monsters from './monsters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/monsters" element={<Monsters />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
