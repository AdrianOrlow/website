import { spacingX, spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  ${breakpoint('xs', 'md')`
    flex-direction: column;
    ${spacingY(0.5)}
  `}

  ${breakpoint('md')`
    flex-direction: row;
    ${spacingX(0.5)}
  `}
`;

export const TextWrapper = styled.div`
  max-width: 100%;
  overflow-y: scroll;

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;
