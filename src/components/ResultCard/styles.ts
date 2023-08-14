import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

export const ImageColumn = styled('div')`
  position: relative;
`;

export const TitleColumn = styled('div')`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CtaColumn = styled('div')`
  position: relative;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled('img')`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;
