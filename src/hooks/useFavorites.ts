import { ArtistObjectResult } from '../rquery';
import { useLocalStorage } from './useLocalStorage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage<Array<ArtistObjectResult>>('favorites', []);

  const addFavorite = (artist: ArtistObjectResult) => {
    setFavorites([...favorites, artist]);
  };

  const removeFavorite = (id: string | number) => {
    const favoriteId = Number(id);
    setFavorites(favorites.filter((favorite) => favorite.id !== favoriteId));
  };

  const isFavorite = (id: string | number) => {
    const favoriteId = Number(id);
    return favorites.some((favorite) => favorite.id === favoriteId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
