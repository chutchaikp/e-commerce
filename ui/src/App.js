import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <Outlet />
    </>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },

    ]

  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
