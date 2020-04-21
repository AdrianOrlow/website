import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';

const { serverRuntimeConfig } = getConfig();

const API_URL = 'https://www.google.com/recaptcha/api/siteverify';

const checkRecaptcha = async (recaptcha: string): Promise<boolean> => {
  const data = {
    secret: serverRuntimeConfig.RECAPTCHA_SERVER_KEY,
    response: recaptcha,
  };

  const request = `${API_URL}?secret=${data.secret}&response=${data.response}`;
  const result = await fetch(request).then(r => r.json());

  return result.success;
};

export default checkRecaptcha;
