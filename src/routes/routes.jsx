import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import ComponentLibrary from '../pages/ComponentLibrary';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/components',
    element: <ComponentLibrary />,
  },
];

export default routes;
