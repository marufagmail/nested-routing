import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Services from './pages/Services/Services';
import Contact from './pages/contact/Contact';
import Mahin from './pages/Home/sideBarMenu/Mahin';
import Rikta from './pages/Home/sideBarMenu/Rikta';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/mahin",
        element: <Mahin></Mahin>,
      },
      {
        path: "/rikta",
        element: <Rikta></Rikta>,
      }
    ]
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/services",
    element: <Services></Services>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
