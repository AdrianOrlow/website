import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Title = styled.h2`
  margin: 0;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  max-width: 50rem;
  line-height: 1.33;

  ${breakpoint('sm')(css`
    font-size: 2.5rem;
  `)}

  ${breakpoint('md')(css`
    font-size: 3rem;
  `)}

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubTitle = styled.div`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  text-align: left;
  line-height: 1.2;
  position: relative;
  margin-top: 0 !important;
  opacity: 0.75;
`;

export const Description = styled.div`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  text-align: left;
  max-width: 40rem;
  line-height: 1.5;
  margin-left: 3rem;
  position: relative;
  white-space: pre-line;

  &::before {
    content: '';
    height: 1px;
    width: 2rem;
    background: #5a6c7f;
    position: absolute;
    left: -3rem;
    top: 0.66em;
    opacity: 0.5;
    transform: translateY(50%);
  }
`;
