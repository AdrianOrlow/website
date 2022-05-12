import * as R from 'ramda';
import * as React from 'react';

const fontsPreloadPaths = [
  'Poppins/Poppins-Regular.ttf',
  'Poppins/Poppins-Bold.ttf',
];

const HeadFonts: React.FC = () => {
  const toFontPreloadLink = (path: string) => (
    <link key={path} as="font" crossOrigin="" href={`/static/fonts/${path}`} />
  );

  const fontsPreload = R.map(toFontPreloadLink, fontsPreloadPaths);

  return <>{fontsPreload}</>;
};

export default HeadFonts;
