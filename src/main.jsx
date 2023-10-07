import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import ContextProvider from './ContextProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </ContextProvider>
    </HelmetProvider>
  </React.StrictMode>,
)