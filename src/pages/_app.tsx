import PrivacyModal from '@components/Privacy/PrivacyModal';
import PrivacyPolicyProvider from '@components/Privacy/PrivacyPolicy/PrivacyPolicyContext';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '@layout';
import theme from '@theme';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import 'modern-normalize/modern-normalize.css';
import I18nProvider from 'next-translate/I18nProvider';
import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import React, { useEffect } from 'react';
import { toast, Toaster, useToasterStore } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import commonEN from '../../locales/en/common.json';
import homeEN from '../../locales/en/home.json';
import pageEN from '../../locales/en/page.json';

config.autoAddCss = false;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { lang } = useTranslationWithFallback();
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= 1)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <I18nProvider
      lang={lang}
      namespaces={{
        commonEN,
        homeEN,
        pageEN,
      }}
    >
      <ThemeProvider theme={theme}>
        <PrivacyPolicyProvider>
          <Layout>
            <PrivacyModal />
            <Component {...pageProps} />
          </Layout>
          <Toaster />
          <NextNprogress />
        </PrivacyPolicyProvider>
      </ThemeProvider>
    </I18nProvider>
  );
};

export default App;
