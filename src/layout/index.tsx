// import Header from '@shared/Header';
import Footer from '@shared/Footer';
import Header from '@shared/Header';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import React from 'react';
import GlobalStyle from './globalStyles';
import Head from './Head';
import { ContentWrapper } from './style';
import { pathsWithHero } from './utils';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const pathWithoutHero = R.not(R.includes(router.pathname, pathsWithHero));

  return (
    <>
      <Head />
      <GlobalStyle />
      <Header />
      <ContentWrapper headerMargin={pathWithoutHero}>{children}</ContentWrapper>
      <Footer />
    </>
  );
};

export default Layout;
