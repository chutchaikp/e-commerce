
import Pay from './Pay.jsx'
import Success from './Success.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
  path: '/',
  element: <Pay />
}, {
  path: '/success',
  element: <Success />
}
])

const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}
export default App;