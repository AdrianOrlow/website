import styled from 'styled-components';
import { Breakpoints, Colors } from '../../../constants';
import Tag from '../../../shared/Tag';

export const Container = styled.li`
  display: grid;
  grid-template-columns: 100%;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
  }
  
  &:hover {
    filter: brightness(97.5%);
  }
  
  &:active {
    filter: brightness(95%);
  }
`;

export const Inner = styled.div`
  padding: 1rem;
  background: ${Colors.fog};
  
  @media only screen and (min-width: ${Breakpoints.smallMobile}) {
    padding: 1.25rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    padding: 1.5rem;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${Colors.blackBluish};
`;

export const Description = styled.p`
  margin: 0;
  color: ${Colors.blueGreyish};
  font-weight: 500;
  padding-top: 0.25rem;
  font-size: 1.15rem;
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    font-size: 1.15rem;
  }
`;

export const TechnologiesList = styled.div`
  @media only screen and (min-width: ${Breakpoints.smallMobile}) {
    padding-top: 0.15rem;
  }

  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    padding-top: 0.25rem;
  }

  div {
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }
`;
