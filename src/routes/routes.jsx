import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Unity2026 from '../pages/Unity2026';
import Partnership from '../pages/Partnership';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/unity2026', element: <Unity2026 /> },
  { path: '/partnership', element: <Partnership /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
