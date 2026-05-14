import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import ComponentLibrary from '../pages/ComponentLibrary';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import Unity2026 from '../pages/Unity2026';
import Partnership from '../pages/Partnership';

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
  { path: '/events', element: <Events /> },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/unity2026',
    element: <Unity2026 />,
  },
  {
    path: '/partnership',
    element: <Partnership />,
  },
];

export default routes;
