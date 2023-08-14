import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const HeaderRow = styled('div')`
  position: relative;
  display: flex;
  flex-direction: row;
`;


export const CoverColumn = styled('div')`
  position: relative;
  & > img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const DetailColumn = styled('div')`
  position: relative;
  display: flex;
  flex: 1;
  margin-left: 20px;
  flex-direction: column;
`;

export const DetailRow = styled('div')`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const GenreColumn = styled('div')`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const CtaColumn = styled('div')`
  position: relative;
`;
