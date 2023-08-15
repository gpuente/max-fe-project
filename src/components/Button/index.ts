import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)`
  border-radius: 20px;
  color: #F9FAFB;
  border: 1px solid rgb(249 250 251 / 55%);
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
`;
