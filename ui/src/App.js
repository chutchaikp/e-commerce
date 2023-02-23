import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList.jsx";
import Product from "./pages/productList/ProductPage.jsx";
import Announcement from "./components/Announcement";
import ProductPage from "./pages/productList/ProductPage.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";

import './app.scss'
const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="app">
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </div>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/products', element: <ProductList /> },
      { path: '/products/:category', element: <ProductList /> },
      { path: '/product/:id', element: <ProductPage /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

function AppBak() {
  return (
    <div className="app">
      <div className="items">
        <div className="item">x</div>
        <div className="item">x</div>
        <div className="item">x</div>
      </div>
    </div>
  )

}

export default App;
