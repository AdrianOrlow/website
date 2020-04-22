import React, { Fragment } from 'react';
import Router from 'next/router';
import withGA from 'next-ga';
import 'normalize.min.css';

import '../index.css';
import Head from '../components/Head';

const enhance = (
  withGA(process.env.GA_TAG, Router)
);

const App = ({ Component, pageProps }) => (
  <Fragment>
    <Head/>
    <Component {...pageProps} />
  </Fragment>
);

export default enhance(App);
