import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'

import Sandbox from './pages/sandbox/Sandbox.jsx'
import Home from './pages/home/Home.jsx'
import Products from './pages/products/Products.jsx'
import Product from './pages/product/Product.jsx'
import NewProduct from './page/product/NewProduct.jsx'

import Login from './pages/login/Login.jsx'
import { IconContext } from "react-icons";

// <IconContext.Provider

const router = createBrowserRouter([
  {
    path: '/',
    element: <IconContext.Provider value={{ color: '#5555ff', size: '40px' }}>
      <Navbar />
      <div style={{ display: 'flex', }} >
        <Sidebar />
        <Outlet />
      </div>
    </IconContext.Provider>,
    children: [{
      path: '/', element: <Home />
    }, {
      path: '/products', element: <Products />
    }, {
      path: '/product/:id', element: <Product />
    }, {
      path: '/newproduct', element: <NewProduct />
    }, {
      path: '/home', element: <Home />
    }
    ]
  }, {
    path: '/login', element: <Login />
  }, {
    path: '/sandbox', element: <Sandbox />
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
