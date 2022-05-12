import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: ${({ theme }) => theme.breakpoints.lg}px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.light};
  width: 100%;
  font-size: 2rem;
  padding: 3rem;
  border-radius: 3rem;
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  margin: 0.5rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
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

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 3rem;
    padding: 4rem;
    border-radius: 6rem;
  }
`;
