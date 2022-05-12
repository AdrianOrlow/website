import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ImageWrapper = styled.div`
  img {
    display: block;
    border-radius: 2rem;
    object-fit: cover;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 150%;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    top: 50%;
    height: unset;
  }
`;
