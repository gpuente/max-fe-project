import { styled } from '@mui/material/styles';
import { Paper as MuiPaper } from '@mui/material';

export const Container = styled('div')`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

export const ImageColumn = styled('div')`
  position: relative;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const TitleColumn = styled('div')`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    align-items: flex-start;
    padding-left: 10px;
  }
`;

export const CtaColumn = styled('div')`
  position: relative;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled('img')`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Paper = styled(MuiPaper)`
  &.MuiPaper-root {
    background-color: rgb(146 151 179 / 13%);
    border-radius: 10px;
    color: #F9FAFB;

    &:hover {
      cursor: pointer;
      transition: all 0.4s ease;
      background-color: rgba(16 18 27 / 40%);
    }
  }
`;
