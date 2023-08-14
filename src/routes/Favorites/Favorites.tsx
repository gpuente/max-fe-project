import React from 'react';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import { ArtistList } from '../../components';
import { useFavorites } from '../../hooks';

export const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  const navigate = useNavigate();

  return (
    <div>
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Back
      </Button>
      <div>
        {favorites && (
          <ArtistList artists={favorites} />
        )}
      </div>
    </div>
  );
};
