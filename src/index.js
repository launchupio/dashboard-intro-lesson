import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LeftNavBar from "./components/LeftNavBar";
import MainContent from "./components/MainContent";
import GraphandOrders from './components/GraphandOrders';
import App from './App';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />
  // },
  {
    path: "/left-nav-bar",
    element: <LeftNavBar />,
  },
  {
    path: "/main-content",
    element: <MainContent />
  },
  {
    path: "/graph-and-orders",
    element: <GraphandOrders />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
