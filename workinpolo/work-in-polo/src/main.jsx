import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home.jsx'
import routes from './routes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

const router = createBrowserRouter(routes)


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
