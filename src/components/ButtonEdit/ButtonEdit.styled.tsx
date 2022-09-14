import styled from '@emotion/styled';
import EditIcon from '@mui/icons-material/Edit';
import { COLORS, FONTS, SPACES } from '../../services/theme';





export const ButtonEdit = styled.button`
  cursor: pointer;
  margin-left: ${SPACES.m};
  border-radius: 3px;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  font-weight: ${FONTS.WEIGHTS};
  &:hover,
  &:focus {
    background-color: ${COLORS.secondary};
  }
`;

export const ButtonIcon = styled(EditIcon)`
  cursor: pointer;
`;
