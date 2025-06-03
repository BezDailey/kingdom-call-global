import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import ComponentLibrary from '../pages/ComponentLibrary';
import Events from '../pages/Events';

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
  { path: '/events',
    element: <Events />
  },
];

export default routes;
