import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from 'src/components/About';
import ErrorPage from 'src/components/ErrorPage';
import Resume from 'src/components/Resume';
import Root from 'src/components/Root';
import Work from 'src/components/Work';

import './index.css';

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
