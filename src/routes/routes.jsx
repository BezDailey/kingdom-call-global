import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import ComponentLibrary from '../pages/ComponentLibrary';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import Unity2025 from '../pages/Unity2025';

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
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/unity2025',
    element: <Unity2025 />,
  }
];

export default routes;
