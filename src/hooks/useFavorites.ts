import { useLocalStorage } from './useLocalStorage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

  const addFavorite = (id: string) => {
    setFavorites([...favorites, id]);
  };

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter((favorite) => favorite !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.includes(id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
