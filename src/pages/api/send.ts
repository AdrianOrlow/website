import { ResponseCode } from '@constants';
import sgMail from '@sendgrid/mail';
import checkRecaptcha from '@utils/check-recaptcha';
import composeMail from '@utils/composeMail';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const Send = async (req, res) => {
  const { method } = req;
  if (method !== 'POST') {
    return;
  }

  sgMail.setApiKey(serverRuntimeConfig.SENDGRID_API_KEY);

  const recaptchaValid = await checkRecaptcha(req.body.recaptcha);
  if (!recaptchaValid) {
    const error = 'Captcha invalid.';
    console.error(error);

    res.status(400).send({ code: ResponseCode.CAPTCHA_INVALID });
    return;
  }

  const content = composeMail(req.body);

  try {
    await sgMail.send(content);

    res.status(200).send({ code: ResponseCode.MESSAGE_SENT });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }

    res.status(400).send({ code: ResponseCode.MESSAGE_NOT_SENT });
  }
};

export default Send;
