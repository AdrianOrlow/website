import * as React from 'react';

export const smoothScroll = (e: React.MouseEvent<HTMLElement>) => {
  const target = (e.currentTarget as any).href.split('#')[1];
  const elementInView = !!document.querySelector(`#${target}`);
  if (!elementInView) {
    return;
  }

  e.preventDefault();
  document.querySelector(`#${target}`).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
