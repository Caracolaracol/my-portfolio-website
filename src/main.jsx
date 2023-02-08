import React from 'react'
import ReactDOM from 'react-dom/client'
import MyProvider from './context/general-context'
import { router } from './router/Router'
import { RouterProvider } from 'react-router-dom'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MyProvider>
        <RouterProvider router={router} />
      </MyProvider>
  </React.StrictMode>,
)
