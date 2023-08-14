import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { ResultCard } from '../ResultCard';
import { useFavorites } from '../../hooks';
import { ArtistObjectResult } from '../../rquery';

export interface ArtistListProps {
  artists: Array<ArtistObjectResult>;
}

export const ArtistList: React.FC<ArtistListProps> = ({ artists }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <>
      {artists.map((artist) => {
        const id = artist.id.toString();

        return (
          <ResultCard
            key={artist.id}
            title={artist.name}
            image={artist.image}
            onClickArtist={() => {
              queryClient.setQueryData(['getArtist', id], artist);
              navigate(`/artist/${id}`);
            }}
            genre={artist.genres[0].name}
            ctaLabel={isFavorite(id) ? 'Remove from favorites' : 'Add to favorites'}
            onClickCta={() => {
              if (isFavorite(id)) {
                removeFavorite(id);
              } else {
                addFavorite(artist);
              }
            }}
          />
        );
      })}
    </>
  );
}
