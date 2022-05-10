import styled from 'styled-components';
import breakpoint, {
  DefaultBreakpointName,
} from 'styled-components-breakpoint';

interface Props {
  breakpoint?: DefaultBreakpointName;
}

export const Section = styled.section<Props>`
  max-width: ${({ theme, breakpoint = 'xl' }) =>
    theme.breakpoints[breakpoint]}px;
  margin: 0 0.5rem;
  position: relative;
  width: calc(100% - 1rem);

  ${breakpoint('sm')`
        margin: auto;
      `};
`;
