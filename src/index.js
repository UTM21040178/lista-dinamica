import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tecnologia from './Tecnologia'
import Ciencia from './Ciencia';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Counter } from './Counter';
import Historia from './Historia';
import Economia from './Economia';
import Cultura from './Cultura';
import CienYTec from './CienYTec';
import Psicologia from './Psicologia';
import Filosofia from './Filosofia';
import Educacion from './Educacion';
import Deportes from './Deportes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Counter",
    element: <Counter/>,
  },

  {
    path: "/Tecnologia",
    element: <Tecnologia/>,
  },

  {
    path: "/Ciencia",
    element: <Ciencia/>,
  },

  {
    path: "/Historia",
    element: <Historia/>,
  },

  {
    path: "/Economia",
    element: <Economia/>,
  },
  {
    path: "/Cultura",
    element: <Cultura/>,
  },
  {
    path: "/CienYTec",
    element: <CienYTec/>,
  },
  {
    path: "/Psicologia",
    element: <Psicologia/>,
  },
  {
    path: "/Filosofia",
    element: <Filosofia/>,
  },
  {
    path: "/Educacion",
    element: <Educacion/>,
  },
  {
    path: "/Deportes",
    element: <Deportes/>,
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
