import { styled } from '@mui/material/styles';

export const BackgroundVideo = styled('div')`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;

  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

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

