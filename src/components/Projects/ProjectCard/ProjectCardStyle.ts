import styled from 'styled-components';
import { Breakpoints, Colors } from '../../../constants';
import Tag from '../../../shared/Tag';

export const Container = styled.li`
  display: grid;
  border-radius: 4px;
  overflow: hidden;
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
  padding-bottom: 0.15rem;
`;

export const Description = styled.p`
  margin: 0;
  color: ${Colors.blueGreyish};
  font-weight: 500;
  
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