import dynamic from 'next/dynamic';
import NextHead from 'next/head';
import * as React from 'react';
import HeadFonts from './HeadFonts';
import HeadManifest from './HeadManifest';
import HeadSEO from './HeadSEO';

const ThirdPartyScript = dynamic<any>(
  () => Promise.resolve(require('@shared/ThirdPartyScript')),
  {
    ssr: false,
  }
);

const Head: React.FC = () => (
  <>
    <NextHead>
      <HeadFonts />
      <HeadManifest />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-023YDH62HR');
        `}
      </script>
    </NextHead>
    <HeadSEO />
    <ThirdPartyScript scriptKey="googleanalytics" />
  </>
);

export default Head;
