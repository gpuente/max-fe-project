import React from 'react';
import { Typography } from '@mui/material';

import { Button } from '../Button';
import { Container, CtaColumn, ImageColumn, TitleColumn, Avatar, Paper } from './styles';

export interface ResultCardProps {
  image: string;
  title: string;
  genre: string;
  ctaLabel: string;
  onClickCta: () => void;
  onClickArtist: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = (props) => {
  const {
    image,
    title,
    genre,
    ctaLabel,
    onClickCta,
    onClickArtist,
  } = props;

  return (
    <Paper onClick={onClickArtist}>
      <Container>
        <ImageColumn>
          <Avatar src={image} />
        </ImageColumn>
        <TitleColumn>
          <Typography
            variant="h6"
            component="h2"
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
          <Button
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation();
              onClickCta();
            }}
          >
            {ctaLabel}
          </Button>
        </CtaColumn>
      </Container>
    </Paper>
  );
};
