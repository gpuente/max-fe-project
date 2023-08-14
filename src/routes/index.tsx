import { createBrowserRouter } from 'react-router-dom';

import { Root } from './Root';
import { Artist } from './Artist';
import { Favorites } from './Favorites';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/artist/:id',
    element: <Artist />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
]);
