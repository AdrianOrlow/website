import { spacingX, spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3rem;
  z-index: 1;
`;

export const Container = styled.div`
  padding: 1.75rem;
  border-radius: 4rem;
  width: 100%;
  max-width: 992px;
  position: relative;
  ${spacingY(2)};
  margin: 0 0.5rem;

  ${breakpoint('sm')(css`
    padding: 3rem;
  `)};

  &::before {
    content: '';
    background: ${({ theme }) => theme.colors.black};
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 6rem);
    position: absolute;
    border-radius: inherit;
    z-index: -1;
  }

  @media only screen and (max-width: 380px) {
    border-radius: 3rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${spacingX(1.25)};
  font-size: 1.5rem;
  flex-direction: column;
  text-align: center;

  ${breakpoint('lg')(css`
    font-size: 1.5rem;
    flex-direction: row;
    ${spacingX(1.5)};
    text-align: left;
  `)}
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};

  span {
    position: relative;
    z-index: 1;
    display: inline-block;
    height: 1em;

    ::before {
      content: '';
      position: absolute;
      top: 90%;
      left: 0;
      width: 100%;
      height: 0.33em;
      background: ${({ theme }) => theme.colors.primary};
      opacity: 0.2;
      z-index: -1;
    }
  }
`;

export const HeaderIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  height: 2em;
  width: 2em;
  font-size: 1.75em;
  background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primary};

  @media only screen and (max-width: 380px) {
    display: none;
  }
`;

export const DividerVector = styled.img`
  max-width: 1200px;
  z-index: -1;
`;

export const ExpierienceDivider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 900px;
  z-index: 1;
  color: ${({ theme }) => theme.colors.light};
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
`;

export const Experience = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoint(
    'xs',
    'md'
  )(css`
    flex-direction: column;
    text-align: center;

    & > *:not(:first-child) {
      margin-top: 0.75rem;
    }
  `)}

  ${breakpoint('md')(css`
    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  `)}
`;

export const ExperienceIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6rem;
  background: ${({ theme }) => transparentize(0.9, theme.colors.light)};
  height: 5rem;
  width: 5rem;
  font-size: 2.5rem;

  img {
    height: 2.5rem;
    width: auto;
  }
`;

export const ExperienceInfo = styled.div``;

export const Content = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  width: 100%;

  ${breakpoint(
    'xs',
    'md'
  )(css`
    flex-direction: column;

    & > *:not(:first-child) {
      margin-top: 2rem;
    }
  `)}

  ${breakpoint('md')(css`
    justify-content: space-between;

    & > *:not(:first-child) {
      margin-left: 1rem;
    }
  `)}
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ColHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${spacingX(0.75)};
  font-size: 1.1rem;
  margin-bottom: -0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding: 1rem;
  border-radius: 2rem;
  width: 100%;
  z-index: 1;

  span {
    display: flex;
    align-items: center;
  }

  svg,
  img {
    font-size: 1.5rem;
    height: 1.5rem;
  }
`;

export const Divider = styled.div`
  width: 2rem;
  height: 1px;
  margin: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.25;

  ${breakpoint(
    'xs',
    'md'
  )(css`
    display: none;
  `)}
`;

export const List = styled.div`
  padding: 1rem;
  padding-top: 1.5rem;
  background: #224260;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  text-align: center;
  margin-right: -0.5rem;
  margin-top: -0.5rem;
  width: calc(100% - 2rem);

  & > * {
    margin-top: 0.5rem;
  }

  & > *:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

export const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => transparentize(0.9, theme.colors.light)};
  border-radius: 0.75rem;
  padding: 0.75rem;
  ${spacingX(0.5)};
  line-height: 1;

  &:first-child {
    background: ${({ theme }) => transparentize(0.9, theme.colors.yellow)};
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
