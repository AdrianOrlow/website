import { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import { ContactFormData } from '../types';
import { escapeHtml } from './index';

const composeMail = (formData: ContactFormData): MailDataRequired => {
  const {
    name,
    email,
    topic,
    message,
  } = formData;

  const escapedMessage = escapeHtml(message);

  return {
    to: 'adrian@orlow.me',
    from: 'contact@orlow.me',
    replyTo: email,
    subject: `Nowa wiadomość | ${topic}`,
    text: `
      Imię: ${name}
      Email: ${name}
      
      ${escapedMessage}
    `,
    html: `
      <p>
        <b>Imię:</b> ${name}
      </p>
      <p>
        <b>Email:</b> ${name}
      </p>
      <p>
        ${escapedMessage} 
      </p>
    `
  };
};

export default composeMail;
