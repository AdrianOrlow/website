import { paths } from '@constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@shared/Button';
import LanguageSelector from '@shared/LanguageSelector';
import { Section } from '@shared/Page';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import useWindowScroll from '@utils/hooks/useWindowScroll';
import { smoothScroll } from '@utils/smoothScroll';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import {
  Container,
  DesktopActions,
  DesktopActionsInner,
  DesktopNav,
  LanguageSelectorWrapper,
  Logo,
  MobileActions,
  MobileNav,
  NavButton,
  NavLink,
  Wrapper,
} from './HeaderStyle';

library.add(faPhone, faBars, faTimes);

const Header: React.FC = () => {
  const { t } = useTranslationWithFallback('common');
  const { scrollY } = useWindowScroll();
  const [showNav, setShowNav] = useState<boolean>(false);
  const hideNav = () => setShowNav(false);
  const showLanguageSelector = scrollY < 16 * 4;

  const handleClick = (e) => {
    hideNav();
    smoothScroll(e);
  };

  const nav = (
    <>
      <Link href={paths.homeSections.projects} passHref>
        <NavLink onClick={handleClick}>{t('header.nav.projects')}</NavLink>
      </Link>
      <Link href={paths.homeSections.references} passHref>
        <NavLink onClick={handleClick}>{t('header.nav.references')}</NavLink>
      </Link>
      <Link href={paths.homeSections.offer} passHref>
        <NavLink onClick={handleClick}>{t('header.nav.offer')}</NavLink>
      </Link>
      <Link href={paths.homeSections.publications} passHref>
        <NavLink onClick={handleClick}>{t('header.nav.publications')}</NavLink>
      </Link>
    </>
  );

  return (
    <Wrapper fullHeight={showNav}>
      <Section as="header">
        <Container>
          <Link href={paths.home} passHref>
            <Logo as="a">
              <Image
                alt="Logo blue"
                height={24}
                width={78}
                src={require('@assets/icons/logo-blue.svg')}
              />
            </Logo>
          </Link>
          <DesktopActions>
            <DesktopActionsInner showLanguageSelector={showLanguageSelector}>
              <DesktopNav>{nav}</DesktopNav>
              <Link href={paths.homeSections.contact} passHref>
                <Button
                  as="a"
                  onClick={handleClick}
                  beforeIcon={<FontAwesomeIcon icon={faPhone} />}
                >
                  {t('header.contact')}
                </Button>
              </Link>
            </DesktopActionsInner>
            <LanguageSelectorWrapper show={showLanguageSelector}>
              <LanguageSelector />
            </LanguageSelectorWrapper>
          </DesktopActions>
          <MobileActions>
            <LanguageSelectorWrapper show={showLanguageSelector}>
              <LanguageSelector />
            </LanguageSelectorWrapper>
            <NavButton onClick={() => setShowNav((v) => !v)}>
              {showNav && <FontAwesomeIcon icon={faTimes} />}
              {!showNav && <FontAwesomeIcon icon={faBars} />}
            </NavButton>
            <MobileNav show={showNav}>
              {nav}
              <Link href={paths.homeSections.contact} passHref>
                <Button
                  beforeIcon={<FontAwesomeIcon icon={faPhone} />}
                  background="whiteish"
                  size="large"
                  as="a"
                  onClick={handleClick}
                >
                  {t('header.contact')}
                </Button>
              </Link>
            </MobileNav>
          </MobileActions>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Header;
