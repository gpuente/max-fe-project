import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

import {  Container, CoverColumn, CtaColumn, DetailColumn, DetailRow, GenreColumn, HeaderRow } from './styles';

export interface ResultArtistCardProps {
  image: string;
  title: string;
  popularity: number;
  id: number;
  genres: {
    id: number;
    name: string;
    isPrimary: boolean;
  }[];
}

export const ArtistCard: React.FC<ResultArtistCardProps> = (props) => {
  const {
    image,
    title,
    popularity,
    id,
    genres,
  } = props;

  const primaryGenre = genres.find((genre) => genre.isPrimary)?.name;
  const additionalGenres = genres.filter((genre) => !genre.isPrimary).map((genre) => genre.name);

  return (
    <Paper>
      <Container>
        <HeaderRow>
          <CoverColumn>
            <img src={image} alt="" />
          </CoverColumn>
          <DetailColumn>
            <Typography
              variant="h6"
              component="h2"
            >
              {title}
            </Typography>
            <Typography>
              Primary Genre: {primaryGenre}
            </Typography>
            <Typography>
              Popularity Score: {popularity}
            </Typography>
          </DetailColumn>
        </HeaderRow>
        <DetailRow>
          <GenreColumn>
            <Typography>
              Additional Genres:
            </Typography>
            <Typography>
              {additionalGenres.join(', ')}
            </Typography>
          </GenreColumn>
          <CtaColumn>
            <Button variant="outlined">
              Add to favorites
            </Button>
          </CtaColumn>
        </DetailRow>
      </Container>
    </Paper>
  );
};
