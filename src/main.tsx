import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from 'src/components/About';
import ErrorPage from 'src/components/ErrorPage';
import Resume from 'src/components/Resume';
import Root from 'src/components/Root';
import Work from 'src/components/Work';

import './index.css';
import CaseStudy from './components/Work/CaseStudy';
import { Route } from './types';

const router = createBrowserRouter([
  {
    path: Route.ROOT,
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: Route.ABOUT,
    element: <About />,
  },
  {
    path: Route.RESUME,
    element: <Resume />,
  },
  {
    path: Route.WORK,
    element: <Work />,
  },
  {
    path: `${Route.WORK}/:caseStudyId`,
    element: <CaseStudy />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
