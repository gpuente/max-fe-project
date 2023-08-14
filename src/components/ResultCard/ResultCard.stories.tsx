import type { Meta, StoryObj } from '@storybook/react';

import { ResultCard } from './ResultCard';

const meta = {
  title: 'ResultCard',
  component: ResultCard,
  argTypes: {
    image: { control: 'string' },
    title: { control: 'string' },
    genre: { control: 'string' },
    ctaLabel: { control: 'string' },
    onClickArtist: { action: 'onClickArtist' },
  },
} satisfies Meta<typeof ResultCard>

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    image: 'https://via.placeholder.com/150',
    title: 'Title',
    genre: 'Genre',
    ctaLabel: 'Add',
  },
};
