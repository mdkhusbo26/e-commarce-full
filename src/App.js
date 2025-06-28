import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { createBrowserRouter, Navigate } from 'react-router-dom';

let allRous = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/dashboard',
    element: <Home />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'Login',
    element: <Login />,
  },
]);

export { allRous };
