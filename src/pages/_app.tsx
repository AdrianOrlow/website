import React from 'react';
import 'normalize.min.css';
import '../index.css';
import Head from '../components/Head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head/>
      <Component {...pageProps} />
    </>
  );
}

export default App;
