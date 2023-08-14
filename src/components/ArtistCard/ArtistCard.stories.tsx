import type { Meta, StoryObj } from '@storybook/react';

import { ArtistCard } from './ArtistCard';

const meta = {
  title: 'ArtistCard',
  component: ArtistCard,
  argTypes: {
    image: { control: 'string' },
    title: { control: 'string' },
    popularity: { control: 'number' },
    id: { control: 'number' },
    genres: { control: 'array' },
  },
} satisfies Meta<typeof ArtistCard>

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    image: 'https://via.placeholder.com/150',
    title: 'Title',
    popularity: 10,
    id: 1,
    genres: [
      { id: 1, name: 'Metal', isPrimary: true },
      { id: 2, name: 'Rock', isPrimary: false },
      { id: 3, name: 'Pop', isPrimary: false },
      { id: 4, name: 'Rap', isPrimary: false },
    ],
  },
};
