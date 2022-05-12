import { apiPaths, paths, ResponseCode } from '@constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from '@shared/Alert';
import { Box, BoxDivider, BoxTitle } from '@shared/Box';
import Button from '@shared/Button';
import Input from '@shared/Input';
import InputLabel from '@shared/InputLabel';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import Trans from 'next-translate/Trans';
import getConfig from 'next/config';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Container,
  Form,
  PrivacyInfo,
  SocialContact,
  SocialContactLink,
  TextContact,
  Wrapper,
} from './ContactStyle';
import { alertsTypes, CONTACT_FIELDS } from './ContactUtils';

const { publicRuntimeConfig } = getConfig();
library.add(faGithub, faLinkedinIn);

const Contact: React.FC = () => {
  const { t } = useTranslationWithFallback('common');
  const [loading, setLoading] = useState<boolean>(false);
  const [responseCode, setReponseCode] = useState<ResponseCode>(undefined);
  const [data, setData] = useState(
    Object.fromEntries(CONTACT_FIELDS.map((k) => [k, '']))
  );

  const handleChange = (e: React.ChangeEvent<any>) => {
    if (loading) {
      return;
    }

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch(apiPaths.send, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then(({ code }) => setReponseCode(code))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!responseCode) {
      return;
    }

    const timeout = setTimeout(() => setReponseCode(undefined), 5000);
    return () => clearTimeout(timeout);
  }, [responseCode]);

  return (
    <Wrapper breakpoint="lg" id="contact">
      <Container>
        <Box>
          <BoxTitle>{t(`contact.form.title`)}</BoxTitle>
          <BoxDivider />
          <Form onSubmit={handleSubmit}>
            {CONTACT_FIELDS.map((field) => (
              <InputLabel
                key={field}
                title={t(`contact.form.fields.${field}.label`)}
              >
                {/* @ts-ignore due to "as" field typings */}
                <Input
                  name={field}
                  placeholder={t(`contact.form.fields.${field}.placeholder`)}
                  as={field === 'message' ? 'textarea' : undefined}
                  value={data[field]}
                  onChange={handleChange}
                  type={field === 'mail' ? 'email' : undefined}
                  disabled={loading}
                  required
                />
              </InputLabel>
            ))}
            <Trans
              i18nKey="common:contact.form.privacy"
              components={[
                <PrivacyInfo key="0" />,
                <Link key="1" href={paths.privacy}>
                  <a></a>
                </Link>,
              ]}
            />
            <ReCAPTCHA
              sitekey={publicRuntimeConfig.RECAPTCHA_CLIENT_KEY}
              onChange={(value) =>
                setData({
                  ...data,
                  recaptcha: value,
                })
              }
            />
            {responseCode && (
              <Alert type={alertsTypes[responseCode]}>
                {t(`responseCodes.${responseCode}`)}
              </Alert>
            )}
            {!responseCode && (
              <Button
                type="submit"
                size="large"
                loading={loading}
                disabled={loading}
              >
                {t(`contact.form.submit`)}
              </Button>
            )}
          </Form>
        </Box>
        <Box>
          <BoxTitle>{t(`contact.alt.title`)}</BoxTitle>
          <BoxDivider />
          <TextContact>
            <span>
              {t(`contact.alt.mail`)}:&nbsp;
              <a href="mailto:adrian@orlow.me">adrian@orlow.me</a>
            </span>
            <span>
              {t(`contact.alt.phone`)}:&nbsp;
              <a href="tel:+48573491241">+48 573 491 241</a>
            </span>
          </TextContact>
          <SocialContact>
            <SocialContactLink href="https://www.linkedin.com/in/adrianorlow/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialContactLink>
            <SocialContactLink href="https://github.com/AdrianOrlow">
              <FontAwesomeIcon icon={faGithub} />
            </SocialContactLink>
          </SocialContact>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Contact;
