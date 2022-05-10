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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
