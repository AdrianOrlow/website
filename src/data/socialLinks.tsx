import { SocialLinkType } from '../types';

import GitHubIcon from '../assets/vectors/fa-github.svg';
import LinkedInIcon from '../assets/vectors/fa-linkedin.svg';
import FacebookIcon from '../assets/vectors/fa-facebook.svg';
import TelegramIcon from '../assets/vectors/fa-telegram.svg';

const socialLinks: SocialLinkType[] = [
  {
    title: 'GitHub',
    url: 'https://l.orlow.me/github',
    icon: <GitHubIcon/>,
  },
  {
    title: 'LinkedIn',
    url: 'https://l.orlow.me/linkedin',
    icon: <LinkedInIcon/>,
  },
  {
    title: 'Facebook',
    url: 'https://l.orlow.me/facebook',
    icon: <FacebookIcon/>,
  },
  {
    title: 'Telegram',
    url: 'https://l.orlow.me/telegram',
    icon: <TelegramIcon/>,
  }
];

export default socialLinks;
