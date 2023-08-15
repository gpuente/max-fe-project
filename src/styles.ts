import { styled } from '@mui/material/styles';

export const AppContainer = styled('div')`
  position: relative;
  max-width: 800px;
  min-width: 400px;
  min-height: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 14px;
  background-color: rgba(16 18 27 / 40%);
  backdrop-filter: blur(20px);

  @media (max-width: 800px) {
    width: calc(100% - 40px);
  }
`;

