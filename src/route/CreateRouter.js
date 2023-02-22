import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './Views/Guest';
import NotFound from './Views/NotFound';

// router.jsx file is the base section where all routes is been created*******
const CreateRouter = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "*",
    element: <NotFound />
  },
]);
export default CreateRouter;