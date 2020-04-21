import React from 'react';
import ReactGA from 'react-ga';
import getConfig from 'next/config';

import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const { publicRuntimeConfig } = getConfig();
ReactGA.initialize(publicRuntimeConfig.GA_TAG);

const Main = () => (
  <main>
    <Hero/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
  </main>
);

export default Main;
