import axios from 'axios';
import { UseQueryOptions } from 'react-query';

const api = axios.create({
  baseURL: 'https://music.musicaudience.info/api/v1/music',
  headers: {
    'Authorization': `apikey ${import.meta.env.VITE_APY_KEY}`,
  }
});

type GenreObjectResult = {
  id: number;
  parent_id: number;
  name: string;
};

export const searchGenre = (
  searchValue: string,
): UseQueryOptions<Array<GenreObjectResult>, Error> => ({
  queryKey: ['searchGenre', searchValue],
  enabled: searchValue !== '',
  initialData: [],
  queryFn: async () => {
    const result = await api.get('/genres', {
      params: {
        q: searchValue,
      },
    });

    return result.data.data;
  },
});

type ArtistObjectResult = {
  id: number;
  name: string;
  image: string;
  popularity: number;
  genres: {
    id: number;
    name: string;
    is_primary: number;
  }[];
};

export const searchArtistsByGenre = (
  genreId: number | string | undefined,
): UseQueryOptions<Array<ArtistObjectResult>, Error> => ({
  queryKey: ['searchArtistsByGenre', genreId],
  enabled: !!genreId && genreId !== '',
  initialData: [],
  queryFn: async () => {
    const result = await api.get(`/genres/${genreId}/artists`);

    return result.data.data;
  },
});


export const getArtist = (
  artistId: string | undefined,
): UseQueryOptions<ArtistObjectResult, Error> => ({
  queryKey: ['getArtist', artistId],
  enabled: !!artistId && artistId !== '',
  queryFn: async () => {
    const result = await api.get(`/artists/${artistId}`);

    return result.data.data[0];
  },
});


export const getSimilarArtists = (
  artistId: string | undefined,
): UseQueryOptions<Array<ArtistObjectResult>, Error> => ({
  queryKey: ['getSimilarArtists', artistId],
  enabled: !!artistId && artistId !== '',
  initialData: [],
  queryFn: async () => {
    const result = await api.get(`/artists/${artistId}/similar`);

    return result.data.data;
  },
});
