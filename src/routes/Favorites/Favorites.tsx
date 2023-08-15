import React from 'react';
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import { ArtistList } from '../../components';
import { useFavorites } from '../../hooks';
import { Container } from './styles';

export const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  const navigate = useNavigate();

  const favoritesNode = favorites && favorites.length > 0 ? (
    <ArtistList artists={favorites} />
  ) : (
    <Container>
      <Typography variant='h4'>
        No favorites yet
      </Typography>
    </Container>
  );

  return (
    <div>
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Back
      </Button>
      <div>
        {favoritesNode}
      </div>
    </div>
  );
};
