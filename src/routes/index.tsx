import { createBrowserRouter } from 'react-router-dom';

import { Root } from './Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/artist/:id',
    element: <div>Artist</div>,
  },
  {
    path: '/favorites',
    element: <div>Favorites</div>,
  },
]);
