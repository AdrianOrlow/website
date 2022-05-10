import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
`;

export const RawText = styled.div`
  width: 100%;
  line-height: 1.5;

  img,
  video {
    width: 75%;
    height: auto;
    border-radius: 2rem;
  }

  blockquote {
    position: relative;

    &::before {
      content: '';
      height: 100%;
      width: 4px;
      position: absolute;
      left: -22px;
      top: 0;
      background: ${({ theme }) => theme.colors.gray};
      opacity: 0.1;
      border-radius: 0.5rem;
    }
  }

  table,
  th,
  td {
    border: 0;
    border-collapse: collapse;
    padding: 0.75rem 1.5rem;
  }

  table {
    border-radius: 2rem;

    th {
      background: ${({ theme }) => transparentize(0.95, theme.colors.gray)};

      &:first-child {
        border-top-left-radius: 1rem;
      }

      &:last-child {
        border-top-right-radius: 1rem;
      }

      &:not(:last-child) {
        border-right: 1px solid
          ${({ theme }) => transparentize(0.95, theme.colors.gray)};
      }
    }

    td {
      background: ${({ theme }) => transparentize(0.9, theme.colors.gray)};
      border-top: 1px solid
        ${({ theme }) => transparentize(0.95, theme.colors.gray)};

      &:not(:last-child) {
        border-right: 1px solid
          ${({ theme }) => transparentize(0.95, theme.colors.gray)};
      }
    }

    tr {
      &:last-child td:first-child {
        border-bottom-left-radius: 1rem;
      }

      &:last-child td:last-child {
        border-bottom-right-radius: 1rem;
      }
    }
  }

  code {
    background: ${({ theme }) => transparentize(0.95, theme.colors.gray)};
    padding: 1rem;
    display: flex;
    border-radius: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }

  h2,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: revert;
  }

  pre,
  p {
    margin: 1em 0;
  }
`;
