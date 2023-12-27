import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import HowTo from './Pages/HowTo';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  
  {
    path: "/home",
    element: <Home/>,
  },

  {
    path: "/howto?",
    element: <HowTo/>,
  },

  {
    path: "/login?",
    element: <Login/>,
  },

  {
    path: "/signup?",
    element: <SignUp/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


reportWebVitals();
