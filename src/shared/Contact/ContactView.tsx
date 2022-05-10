import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, BoxDivider, BoxTitle } from '@shared/Box';
import Button from '@shared/Button';
import Input from '@shared/Input';
import InputLabel from '@shared/InputLabel';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import * as React from 'react';
import {
  Container,
  Form,
  SocialContact,
  SocialContactLink,
  TextContact,
  Wrapper,
} from './ContactStyle';

library.add(faGithub, faLinkedinIn);

const Contact: React.FC = () => {
  const { t } = useTranslationWithFallback('common');
  const fields = ['name', 'mail', 'phone', 'message'];

  return (
    <Wrapper breakpoint="lg" id="contact">
      <Container>
        <Box style={{ minWidth: '30rem' }}>
          <BoxTitle>{t(`contact.form.title`)}</BoxTitle>
          <BoxDivider />
          <Form>
            {fields.map((field) => (
              <InputLabel
                key={field}
                title={t(`contact.form.fields.${field}.label`)}
              >
                <Input
                  name="name"
                  placeholder={t(`contact.form.fields.${field}.placeholder`)}
                  as={field === 'message' ? 'textarea' : undefined}
                />
              </InputLabel>
            ))}
            <Button type="submit" size="large">
              {t(`contact.form.submit`)}
            </Button>
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
