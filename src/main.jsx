import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Landing'

import Landing from './components/Landing.jsx'
import NotFound from './components/NotFound.jsx'
import Canvas from './components/Canvas.jsx'

import './index.css'

import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import AR from './components/AR.jsx'
import Login from './components/Login.jsx'
import History from './components/History.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Landing />,
    errorElement: <NotFound />
  },
  {
    path: '/canvas',
    element: <Canvas />,
    errorElement: <NotFound />
  },
  {
    path: '/AR',
    element: <AR />,
    errorElement: <NotFound />
  },
  {
    path: '/Login',
    element: <Login />,
    errorElement: <NotFound />
  },
  {
    path: '/History',
    element: <History />,
    errorElement: <NotFound />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
