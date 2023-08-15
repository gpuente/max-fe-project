import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { Link, FavoritesContainer, MessageContainer } from './styles';
import { SearchInput, ArtistList } from '../../components';
import { searchGenre, searchArtistsByGenre } from '../../rquery';
import { Typography } from '@mui/material';

export const Root: React.FC = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const urlSearchParams = new URLSearchParams(location.search);
  const genreId = urlSearchParams.get('genre');

  const genreResult = useQuery(searchGenre(input));
  const artistsResult = useQuery(searchArtistsByGenre(genreId || ''));

  const onInputChange = (value: string) => {
    if (input === value) {
      return;
    }

    setInput(value);
  }

  return (
    <div>
      <FavoritesContainer>
        <Link to="/favorites">View My List</Link>
      </FavoritesContainer>
      <SearchInput
        label="Search by genre"
        options={genreResult.data?.map((genre) => ({ id: genre.id.toString(), label: genre.name })) || []}
        onInputChange={onInputChange}
        value={null}
        onChange={(_, value) => {
          navigate({
            pathname: '',
            search: `?genre=${value?.id}`,
          })
        }}
      />
      <div>
        {artistsResult.data && (
          <ArtistList artists={artistsResult.data} />
        )}
      </div>
      {!genreId && (
        <MessageContainer>
          <Typography variant="h6">
            Start by searching for a music genre
          </Typography>
        </MessageContainer>
      )}
    </div>
  );
};
