import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Login from './routes/Login';
import Register from './routes/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/product/:id',
      element: <Detail />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
