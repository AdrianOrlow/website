import { Box } from '@shared/Box';
import { Section } from '@shared/Page';
import { spacingX, spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Wrapper = styled(Section)``;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingX(3)};

    ${Box}:first-child {
      min-width: 30rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingY(1)};
    flex-direction: column;

    ${Box} {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  ${spacingY(1.5)};

  label {
    width: 100%;
  }

  textarea {
    resize: vertical;
    min-height: 8rem;
  }
`;

export const TextContact = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.5;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialContact = styled.div`
  display: flex;
  ${spacingX(0.5)};
`;

export const SocialContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  height: 3rem;
  width: 3rem;
  border-radius: 3rem;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const PrivacyInfo = styled.div`
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
