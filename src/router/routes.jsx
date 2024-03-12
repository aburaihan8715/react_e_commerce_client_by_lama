import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '../layouts/AppLayout';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import SuccessPage from '../pages/SuccessPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProductsByCategoryPage from '../pages/ProductsByCategoryPage';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/products/categories/:category',
        element: <ProductsByCategoryPage />,
      },
      {
        path: '/products/:id',
        element: <ProductDetailsPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/success',
        element: <SuccessPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
]);
