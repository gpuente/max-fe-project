import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, Link } from 'react-router-dom';

import { SearchInput, ArtistList } from '../../components';
import { searchGenre, searchArtistsByGenre } from '../../rquery';

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
      <Link to="/favorites">View My List</Link>
      <SearchInput
        label="Search"
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
    </div>
  );
};
