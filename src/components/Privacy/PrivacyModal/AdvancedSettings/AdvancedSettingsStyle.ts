import BaseToggle from '@shared/Toggle';
import { spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Toggle = styled(BaseToggle)`
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  max-width: 15rem;
  width: 100%;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export const ScriptsWrapper = styled.div`
  margin-top: 1rem;
  ${spacingY(2)};
`;
