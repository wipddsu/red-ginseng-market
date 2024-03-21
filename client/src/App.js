import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import New from './routes/New';
import Search from './routes/Search';

import './App.css';

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
      path: '/new',
      element: <New />,
    },
    {
      path: '/search',
      element: <Search />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
