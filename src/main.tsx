import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import '@/assets/scss/core.scss';
import router from './routes';
import { makeServer } from './__mocks__';

if (process.env.NODE_ENV === "development") {
  makeServer()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
