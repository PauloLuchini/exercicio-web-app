import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home/index.jsx'
import Aparelhos from './routes/Aparelhos/index.jsx'
import VisualizaAparelhos from './routes/VisualizaAparelhos/index.jsx'
import Error from './routes/Error/index.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
const router =  createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Aparelhos",
        element: <Aparelhos/>
      },
      {
        path: "/Aparelhos/Visualizar/:id",
        element: <VisualizaAparelhos/>
      }
    ]
  }
])