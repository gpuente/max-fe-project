import { createBrowserRouter } from 'react-router-dom';

import { Root } from './Root';
import { Artist } from './Artist';

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
    element: <div>Favorites</div>,
  },
]);
