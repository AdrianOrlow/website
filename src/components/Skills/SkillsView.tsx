import React from 'react';

import Section from '../../shared/Section';
import { Sections } from '../../constants';
import { skills } from '../../data';
import { SkillCategoryType } from '../../types';
import Tag from '../../shared/Tag';

import {
  Container,
  ElementContainer,
  Title,
  List,
} from './SkillsStyle';

interface SkillsElementProps {
  skill: SkillCategoryType;
}

const Skills: React.FC = () => {
  const skillsElements = skills.map(skill => (
    <Element skill={skill}/>
  ));

  return (
    <Section type={Sections.Skills} backgroundType="dark">
      <Container>
        {skillsElements}
      </Container>
    </Section>
  );
};

const Element: React.FC<SkillsElementProps> = ({ skill }: SkillsElementProps) => {
  const { title, list } = skill;

  const skillsList = list.map(value => (
    <Tag>{value}</Tag>
  ));

  return (
    <ElementContainer>
      <Title>{title}</Title>
      <List>
        {skillsList}
      </List>
    </ElementContainer>
  );
};

export default Skills;
