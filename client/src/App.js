import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import New from './routes/New';
import Search from './routes/Search';

import './App.css';
import Result from './routes/Result';

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
    {
      path: '/search/:q',
      element: <Result />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
