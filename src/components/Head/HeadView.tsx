import React from 'react';
import NextHead from 'next/head';
import { head } from '../../data';

const Head = () => {
  const { title, description, keywords, url, image } = head;

  return (
    <NextHead>
      <title>{title}</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap" rel="stylesheet"/>
      <meta property="og:type" content="website"/>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon/favicon.ico" />
      <link rel="icon" type="image/png" href="/favicon/favicon16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/favicon/favicon32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon/favicon96.png" sizes="96x96" />
      <meta name="description" content={description}/>
      <meta property="og:title" content={title}/>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta property="og:url" content={url}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>
    </NextHead>
  )
};

export default Head;
