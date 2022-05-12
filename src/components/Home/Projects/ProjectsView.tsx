import { paths } from '@constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Page, ProjectData } from '@prisma/client';
import Button from '@shared/Button';
import SectionHeader from '@shared/SectionHeader';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import { smoothScroll } from '@utils/smoothScroll';
import Trans from 'next-translate/Trans';
import Link from 'next/link';
import * as React from 'react';
import SectionCTA from '../shared/SectionCTA';
import ProjectCard from './ProjectCard';
import { Col, Container, Content, Wrapper } from './ProjectsStyle';

library.add(faGithub);

interface Props {
  data: (Page & { projectData: ProjectData })[];
}

const Projects: React.FC<Props> = ({ data }) => {
  const { t } = useTranslationWithFallback('home');
  const [projectsFirst, projectsSecond] = data.reduce(
    (prev, curr, index) => {
      const cols = [...prev];
      const col = index % 2;
      cols[col].push(curr);

      return cols;
    },
    [[], []]
  );

  return (
    <Wrapper breakpoint="lg" id="projects">
      <Container>
        <SectionHeader
          title={
            <Trans
              i18nKey="home:projects.title"
              components={[<React.Fragment key="0" />, <span key="1" />]}
            />
          }
          descriptions={[t('projects.subTitle')]}
        />
        <Content>
          <Col>
            {projectsFirst.map((project) => (
              <ProjectCard key={project.id} page={project} />
            ))}
          </Col>
          <Col>
            {projectsSecond.map((project) => (
              <ProjectCard key={project.id} page={project} />
            ))}
          </Col>
        </Content>
        <SectionCTA
          title={
            <Trans
              i18nKey="home:projects.CTA.title"
              components={[<React.Fragment key="0" />, <span key="1" />]}
            />
          }
          buttons={
            <>
              <Link href={paths.homeSections.contact} passHref>
                <Button onClick={smoothScroll} as="a">
                  {t('projects.CTA.contact')}
                </Button>
              </Link>
              <Link href="https://github.com/AdrianOrlow" passHref>
                <Button
                  as="a"
                  background="bluish"
                  beforeIcon={<FontAwesomeIcon icon={faGithub} />}
                >
                  {t('projects.CTA.github')}
                </Button>
              </Link>
            </>
          }
        />
      </Container>
    </Wrapper>
  );
};

export default Projects;
