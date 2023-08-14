import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { SearchInput, Option, ResultCard } from '../../components';
import { searchGenre, searchArtistsByGenre } from '../../rquery';

export const Root: React.FC = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [selectedOption, setSelectedOption] = useState<null | Option>(null);

  const genreResult = useQuery(searchGenre(input));
  const artistsResult = useQuery(searchArtistsByGenre(selectedOption?.id));

  const onInputChange = (value: string) => {
    if (input === value) {
      return;
    }

    setInput(value);
  }

  return (
    <div>
      <SearchInput
        label="Search"
        options={genreResult.data?.map((genre) => ({ id: genre.id.toString(), label: genre.name })) || []}
        onInputChange={onInputChange}
        value={selectedOption}
        onChange={(_, value) => setSelectedOption(value)}
      />
      <div>
        {artistsResult.data?.map((artist) => (
          <ResultCard
            key={artist.id}
            ctaLabel="Add to favorites"
            title={artist.name}
            image={artist.image}
            onClickArtist={() => {
              queryClient.setQueryData(['getArtist', artist.id.toString()], artist);
              navigate(`/artist/${artist.id}`);
            }}
            genre={artist.genres[0].name}
          />
        ))}
      </div>
    </div>
  );
};
