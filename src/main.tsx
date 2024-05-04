import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import About from './components/About';
import Resume from './components/Resume';
import Work from './components/Work';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
  {
    path: '/work',
    element: <Work />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
