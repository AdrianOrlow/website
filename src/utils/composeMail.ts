import { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import { ContactData } from '@shared/Contact/ContactUtils';
import escapeHtml from './escapeHtml';

const composeMail = (formData: ContactData): MailDataRequired => {
  const { name, mail, phone, message } = formData;

  const escapedMessage = escapeHtml(message);

  return {
    to: 'adrian@orlow.me',
    from: 'contact@orlow.me',
    replyTo: mail,
    subject: `Adrian, nowa wiadomość od ${name}`,
    text: `
      Imię: ${name}
      E-mail: ${mail}
      Telefon: ${phone}
      
      ${escapedMessage}
    `,
    html: `
      <p>
        <b>Imię:</b> ${name}
      </p>
      <p>
        <b>E-mail:</b> ${mail}
      </p>
      <p>
        <b>Telefon:</b> ${phone}
      </p>
      <br/>
      <p>
        ${escapedMessage} 
      </p>
    `,
  };
};

export default composeMail;
