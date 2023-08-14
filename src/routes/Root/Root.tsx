import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { SearchInput, Option, ResultCard } from '../../components';
import { searchGenre, searchArtistsByGenre } from '../../rquery';

export const Root: React.FC = () => {
  const [input, setInput] = useState('');
  const [selectedOption, setSelectedOption] = useState<null | Option>(null);

  console.log('input', input);

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
            detailUrl={artist.id.toString()}
            genre={artist.genres[0].name}
          />
        ))}
      </div>
    </div>
  );
};
