import { paths } from '@constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@shared/Button';
import { Section } from '@shared/Page';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import { smoothScroll } from '@utils/smoothScroll';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Container, Logo, Nav, NavLink, Wrapper } from './FooterStyle';

library.add(faPhone, faBars, faTimes);

const Footer: React.FC = () => {
  const { t } = useTranslationWithFallback('common');

  const nav = (
    <>
      <Link href={paths.privacy} passHref>
        <NavLink>{t('footer.nav.privacy')}</NavLink>
      </Link>
    </>
  );

  return (
    <>
      <Wrapper>
        <Section as="footer">
          <Container>
            <Link href={paths.home} passHref>
              <Logo as="a">
                <Image
                  alt="Logo white"
                  height={24}
                  width={78}
                  src={require('@assets/icons/logo-white.svg')}
                />
              </Logo>
            </Link>
            <Nav>
              {nav}
              <Link href={paths.homeSections.contact} passHref>
                <Button
                  background="whiteish"
                  as="a"
                  beforeIcon={<FontAwesomeIcon icon={faPhone} />}
                  onClick={smoothScroll}
                >
                  {t('footer.contact')}
                </Button>
              </Link>
            </Nav>
          </Container>
        </Section>
      </Wrapper>
      {/* <Wrapper color="black">
        <Section>
          <Container style={{ padding: '1.5rem 0' }}>
            <Image
              src="/static/assets/organisations.png"
              alt="LEADEAGLE SOCIOMETRICS"
              height={24}
              width={332}
            />
          </Container>
        </Section>
      </Wrapper> */}
    </>
  );
};

export default Footer;
