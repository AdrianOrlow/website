import { Section } from '@shared/Page';
import { spacingX, spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  height: min(60vh, 40rem);
  position: relative;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  background-color: ${({ theme }) => transparentize(0.9, theme.colors.gray)};
`;

export const Container = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${spacingY(2)};
  max-width: 800px;
  width: 100%;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${spacingX(1)}
`;

export const TagsWrapper = styled.div`
  display: flex;
  ${spacingX(0.5)}
  margin-top: 1rem;
`;

export const Tag = styled.span`
  display: flex;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  line-height: 1;
`;
