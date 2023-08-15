import { styled } from '@mui/material/styles';
import { TextField as MuiTextField} from '@mui/material';

export const TextField = styled(MuiTextField)`
  background-color: #14162b;
  & input {
    color: white;
  }
`;
