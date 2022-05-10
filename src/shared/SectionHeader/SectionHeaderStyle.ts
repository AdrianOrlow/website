import { SubTitle, Title } from '@shared/Typography';
import { spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

export const Container = styled.div<{ hasTagline?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  ${spacingY(1)};

  ${Title} {
    max-width: 42rem;
    line-height: 1.2;

    ${({ hasTagline }) => hasTagline && `margin-top: 0 !important;`}
  }

  ${SubTitle} {
    max-width: 32rem;
  }

  ${Title}, ${SubTitle} {
    text-align: left;
  }
`;

export const Tagline = styled.div`
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  color: ${({ theme }) => theme.colors.gray};
  opacity: 0.5;
`;
