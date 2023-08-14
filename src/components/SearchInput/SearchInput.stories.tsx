import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput, Option } from './SearchInput';

const meta = {
  title: 'SearchInput',
  component: SearchInput,
  argTypes: {
    label: { control: 'string' },
    delay: { control: 'number' },
    options: { control: 'array' },
    onChange: { action: 'onChange' },
    value: { control: 'object' },
    onInputChange: { action: 'onInputChange' },
  },
} satisfies Meta<typeof SearchInput>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Search',
    delay: 500,
    options: [{ label: 'one', id: '1' }, { label: 'two', id: '2' }, { label: 'three', id: '3' }],
    value: null,
  },
};


const defaultOptions: Array<Option> = [
  { label: 'one', id: '1' },
  { label: 'two', id: '2' },
  { label: 'three', id: '3' },
  { label: 'four', id: '4' },
  { label: 'five', id: '5' },
  { label: 'six', id: '6' },
  { label: 'seven', id: '7' },
  { label: 'eight', id: '8' },
  { label: 'nine', id: '9' },
  { label: 'ten', id: '10' },
];

const SearchNumbers: React.FC = () => {
  const [options, setOptions] = useState(defaultOptions);
  const [input, setInput] = useState('');
  const [selectedOption, setSelectedOption] = useState<null | Option>(null);

  const onInputChange = (value: string) => {
    if (input === value) {
      return;
    }

    setInput(value);
    setTimeout(() => {
      if (value === '') {
        setOptions(defaultOptions);
      } else {
        setOptions(defaultOptions.filter((option) => option.label.includes(value)));
      }
    }, 1000);
  }

  console.log(selectedOption);

  return (
    <SearchInput
      label="Search"
      delay={500}
      options={options}
      onInputChange={onInputChange}
      value={selectedOption}
      onChange={(_, value) => setSelectedOption(value)}
    />
  );
};

export const FilterNumbers: StoryObj<typeof SearchInput> = {
  render: () => <SearchNumbers />,
};
