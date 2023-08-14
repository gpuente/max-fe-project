import React from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'

import { ArtistCard, ArtistList } from '../../components';
import { getArtist, getSimilarArtists } from '../../rquery';

export const Artist: React.FC = () => {
  const params = useParams<{ id: string }>();
  const artist = useQuery(getArtist(params.id));
  const similarArtists = useQuery(getSimilarArtists(params.id));

  const navigate = useNavigate();

  return (
    <div>
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Back
      </Button>
      <ArtistCard
        id={artist.data?.id || 0}
        title={artist.data?.name || ''}
        image={artist.data?.image || ''}
        genres={artist.data?.genres.map((genre) => ({
          id: genre.id,
          isPrimary: Boolean(genre.is_primary),
          name: genre.name,
        })) || []}
        popularity={artist.data?.popularity || 0}
      />
      <div>
        {similarArtists.data && (
          <ArtistList artists={similarArtists.data} />
        )}
      </div>
    </div>
  );
};
