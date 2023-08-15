import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  color: #F9FAFB;
`;

export const FavoritesContainer = styled('div')`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const MessageContainer = styled('div')`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: #F9FAFB;
`;
