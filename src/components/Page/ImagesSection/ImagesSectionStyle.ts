import { spacingX } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  ${spacingX(-6)};

  img {
    width: 32rem;
    height: ${32 * (3 / 4)}rem;
    object-fit: cover;
    display: block;
    border-radius: 2rem;
    transform: rotate(-5deg);
    box-shadow: 0px 0px 32px rgba(39, 122, 199, 0.1);

    &:nth-child(even) {
      z-index: -1;
    }
  }
`;
