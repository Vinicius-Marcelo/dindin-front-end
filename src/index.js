import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);
