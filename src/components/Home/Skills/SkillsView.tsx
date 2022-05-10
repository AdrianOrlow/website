import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCode,
  faPencilRuler,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import Trans from 'next-translate/Trans';
import * as React from 'react';
import {
  Chip,
  Col,
  ColHeader,
  Container,
  Content,
  DividerVector,
  Experience,
  ExperienceIconWrapper,
  ExperienceInfo,
  ExperienceWrapper,
  ExpierienceDivider,
  Header,
  HeaderIconWrapper,
  HeaderTitle,
  List,
  Row,
  Wrapper,
} from './SkillsStyle';
import { useSkills } from './SkillsUtils';

library.add(faCode, faPencilRuler, faStar);

const Skills: React.FC = () => {
  const { t } = useTranslationWithFallback('home');
  const skills = useSkills();

  return (
    <>
      <ExpierienceDivider>
        <DividerVector src={require('@assets/vectors/divider-big.svg')} />
        <ExperienceWrapper>
          <Experience>
            <ExperienceIconWrapper>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={require('@assets/icons/font-awesome5/fa-solid_code.svg')}
                alt="Code icon"
              />
            </ExperienceIconWrapper>
            <ExperienceInfo>
              <b>{t('skills.base.programming.title')}</b>
              <br />
              {t('skills.base.programming.experience')}
            </ExperienceInfo>
          </Experience>
          <Experience>
            <ExperienceIconWrapper>
              <FontAwesomeIcon icon={faPencilRuler} />
            </ExperienceIconWrapper>
            <ExperienceInfo>
              <b>{t('skills.base.design.title')}</b>
              <br />
              {t('skills.base.design.experience')}
            </ExperienceInfo>
          </Experience>
        </ExperienceWrapper>
      </ExpierienceDivider>
      <Wrapper id="skills">
        <Container>
          <Header>
            <HeaderIconWrapper>
              <FontAwesomeIcon icon={faStar} />
            </HeaderIconWrapper>
            <Trans
              i18nKey="home:skills.title"
              components={[<HeaderTitle key="0" />, <span key="1" />]}
            />
          </Header>
          <Content>
            {skills.map(({ icon, title, list }) => (
              <Col key={title}>
                <ColHeader>
                  <span>{icon}</span>
                  <span>{title}</span>
                </ColHeader>
                <Row>
                  <List>
                    {list.map((element, index) => (
                      <Chip key={element}>
                        {index === 0 && (
                          <span>
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                        )}
                        <span>{element}</span>
                      </Chip>
                    ))}
                  </List>
                </Row>
              </Col>
            ))}
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

export default Skills;
