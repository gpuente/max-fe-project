import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;

  & > video, & > img  {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
