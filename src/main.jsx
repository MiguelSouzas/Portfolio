import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/styles/global.css"
import { RouterProvider } from 'react-router-dom'
import Routers from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ Routers}/>
  </React.StrictMode>,
)
