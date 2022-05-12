import { spacingX, spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.a<{ thumbnailUrl: string }>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  background: linear-gradient(
      180deg,
      rgba(120, 148, 176, 0) -0.09%,
      #7894b0 100%
    ),
    url(${({ thumbnailUrl }) => thumbnailUrl}),
    linear-gradient(180deg, #7894b0 0%, #7894b0 100%);
  background-position: center;
  background-size: cover;
  min-height: 15rem;
  max-width: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    aspect-ratio: 4 / 3;
  }
`;

export const Container = styled.div<{ show: boolean }>`
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: 0.5s ease-in-out;
`;

export const Overlay = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  padding: 3rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }) => transparentize(0.1, theme.colors.black)};
  color: ${({ theme }) => theme.colors.light};
  text-align: left;
  ${spacingY(0.5)};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: 0.5s ease-in-out;
  border-radius: 2rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
`;

export const Divider = styled.div`
  width: 2rem;
  height: 1px;
  background: ${({ theme }) => theme.colors.light};
  opacity: 0.5;
`;

export const SubTitle = styled.div`
  font-size: 1rem;
  line-height: 1.33;
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
`;

export const TagsWrapper = styled.div`
  text-align: left;
  ${spacingX(0.5)};
  ${spacingY(0.5)};
  margin-right: -0.5rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.div`
  display: inline-flex;
  align-items: flex-start;
  background: ${({ theme }) => transparentize(0.9, theme.colors.light)};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  border-radius: 0.25rem;
  padding: 0.5rem;
  line-height: 1;
`;
