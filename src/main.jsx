import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import BookNow from "./pages/BookNow";
import Destinations from "./pages/Destinations";
import LandingPage from './pages/LandingPage.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/destinations",
        element: <Destinations />,
      },
      {
        path: "/booknow",
        element: <BookNow />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/> 
  </React.StrictMode>,
);

