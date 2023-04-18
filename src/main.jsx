import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Home from './component/Layout/Home';
import Order from './component/Orders/Order';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductsLoader from './Loaders/CartProductsLoadet';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Order></Order>,
        loader:cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
