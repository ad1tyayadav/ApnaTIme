import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import BookPage from './components/BookPage.jsx'
import Login from './components/Login.jsx'
import AddShop from './components/AddShop.jsx'
import { SignUp } from './components/index.js'
import ShopsPage from './components/ShopListing.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import ShopView from './components/ShopView.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: "book-appointment",
        element: <BookPage />
      },
      {
        path: "add-service",
        element: <AddShop />
      },
      {
        path: "shops-listing",
        element: <ShopsPage />
      },
      {
        path: `shop-details/:id`,
        element: <ShopView />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
