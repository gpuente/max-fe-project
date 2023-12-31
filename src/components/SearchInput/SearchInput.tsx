import React, { useState, useEffect } from 'react';
import { Autocomplete } from '@mui/material';

import { useDebounce } from '../../hooks';
import { TextField, InputAdornment } from './styles';

export type Option = {
  label: string;
  id: string;
};

export interface SearchInputProps {
  label: string;
  delay?: number;
  options: Array<Option>;
  onInputChange: (value: string) => void;
  value: null | Option;
  onChange: (event: React.SyntheticEvent, value: Option | null) => void
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  const {
    label,
    delay,
    options,
    onChange,
    value,
    onInputChange,
  } = props;

  const [inputValue, setInputValue] = useState<string>('');
  const debouncedInputValue = useDebounce<string>(inputValue, delay);

  useEffect(() => {
    onInputChange(debouncedInputValue);
  }, [debouncedInputValue, onInputChange]);

  return (
    <Autocomplete
      disablePortal
      options={options}
      onChange={onChange}
      filterOptions={(x) => x}
      value={value}
      onInputChange={(_, value) => setInputValue(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <span role="img" aria-label="search">🔍</span>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { color: '#F9FAFB' }
          }}
        />
      )}
      isOptionEqualToValue={(option, value) => option.id === value?.id}
    />
  );
};
