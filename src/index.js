import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { Footer } from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

