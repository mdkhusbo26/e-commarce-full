import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { createBrowserRouter, Navigate } from 'react-router-dom';

let allRous = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashbord" replace />,
  },
  {
    path: '/dashbord',
    element: (
      <div className="h-auto  bg-gray-300 flex">
        <Home />
      </div>
    ),
  },
  {
    path: 'register',
    element: (
      <div className="h-auto  bg-gray-300 flex">
        <Register />
      </div>
    ),
  },
  {
    path: 'Login',
    element: (
      <div className="h-auto  bg-gray-300 flex">
        <Login />{' '}
      </div>
    ),
  },
]);

export { allRous };
