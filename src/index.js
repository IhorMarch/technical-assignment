import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from "../src/common/GlobalStyles";
import './index.css';
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter basename="/RentalCar">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
