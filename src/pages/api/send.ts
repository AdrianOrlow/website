const sgMail = require('@sendgrid/mail');
import { ContactFormData } from '../../types';
import { composeMail, checkRecaptcha } from '../../utils';

export default async function(req: { body: ContactFormData }, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const recaptchaValid = await checkRecaptcha(req.body.recaptcha);
  if (!recaptchaValid) {
    const error = 'Captcha invalid.';

    console.error(error);
    res.status(400).send(error);
    return;
  }

  const content = composeMail(req.body);

  try {
    await sgMail.send(content);

    res.status(200).send('Message sent successfully!')
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }

    res.status(400).send('Message not sent.')
  }
}
