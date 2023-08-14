import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

import { Container, CtaColumn, ImageColumn, TitleColumn, Avatar } from './styles';

export interface ResultCardProps {
  image: string;
  title: string;
  genre: string;
  ctaLabel: string;
  onClickArtist: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = (props) => {
  const {
    image,
    title,
    genre,
    ctaLabel,
    onClickArtist,
  } = props;

  return (
    <Paper>
      <Container>
        <ImageColumn>
          <Avatar src={image} />
        </ImageColumn>
        <TitleColumn>
          <Typography
            variant="h6"
            component="h2"
            onClick={onClickArtist}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
          >
            {genre}
          </Typography>
        </TitleColumn>
        <CtaColumn>
          <Button variant="outlined">
            {ctaLabel}
          </Button>
        </CtaColumn>
      </Container>
    </Paper>
  );
};
