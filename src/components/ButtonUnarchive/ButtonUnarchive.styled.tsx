import styled from '@emotion/styled';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { COLORS, FONTS, SPACES } from '../../services/theme';

export const UnarchiveButton = styled.button`
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

export const ButtonIcon = styled(UnarchiveIcon)`
  height: 100%;
`;