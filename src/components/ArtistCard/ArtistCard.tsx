import React from 'react';
import { Typography } from '@mui/material';

import { Button } from '../Button';
import {
  Container,
  CoverColumn,
  CtaColumn,
  DetailColumn,
  DetailRow,
  GenreColumn,
  HeaderRow,
  Paper,
} from './styles';

export interface ResultArtistCardProps {
  image: string;
  title: string;
  popularity: number;
  ctaLabel: string;
  onClickCta: () => void;
  genres: {
    id: number;
    name: string;
    isPrimary: boolean;
  }[];
}

export const ArtistCard: React.FC<ResultArtistCardProps> = (props) => {
  const {
    title,
    image,
    genres,
    ctaLabel,
    onClickCta,
    popularity,
  } = props;

  const primaryGenre = genres.find((genre) => genre.isPrimary)?.name;
  const additionalGenres = genres.filter((genre) => !genre.isPrimary).map((genre) => genre.name);
  const additionalGenresLabel = additionalGenres.length > 0 ? additionalGenres.join(', ') : 'N/A';

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
              {additionalGenresLabel}
            </Typography>
          </GenreColumn>
          <CtaColumn>
            <Button variant="outlined" onClick={onClickCta}>
              {ctaLabel}
            </Button>
          </CtaColumn>
        </DetailRow>
      </Container>
    </Paper>
  );
};
