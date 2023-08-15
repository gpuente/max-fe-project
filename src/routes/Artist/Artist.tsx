import React from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';

import { ArtistCard, ArtistList, Button } from '../../components';
import { getArtist, getSimilarArtists } from '../../rquery';
import { useFavorites } from '../../hooks';
import { ButtonContainer } from './styles';

export const Artist: React.FC = () => {
  const params = useParams<{ id: string }>();
  const artist = useQuery(getArtist(params.id));
  const similarArtists = useQuery(getSimilarArtists(params.id));
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const navigate = useNavigate();
  const { id } = params;

  return (
    <div>
      <ButtonContainer>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Back
        </Button>
      </ButtonContainer>
      {artist.data && id && (
        <ArtistCard
          title={artist.data.name || ''}
          image={artist.data.image || ''}
          genres={artist.data.genres.map((genre) => ({
            id: genre.id,
            isPrimary: Boolean(genre.is_primary),
            name: genre.name,
          })) || []}
          popularity={artist.data?.popularity || 0}
          ctaLabel={isFavorite(id) ? 'Remove ⭐️' : 'Add to ⭐️'}
          onClickCta={() => {
            if (isFavorite(id)) {
              removeFavorite(id);
            } else {
              addFavorite(artist.data);
            }
          }}
        />
      )}
      <div>
        {similarArtists.data && (
          <ArtistList artists={similarArtists.data} />
        )}
      </div>
    </div>
  );
};
