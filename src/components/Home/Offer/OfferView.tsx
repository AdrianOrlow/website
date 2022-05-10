import { faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import Trans from 'next-translate/Trans';
import * as React from 'react';
import SectionHeader from '../../../shared/SectionHeader';
import OfferSection from './OfferSection';
import { Container, Inner, Wrapper } from './OfferStyle';

const Offer: React.FC = () => {
  const { t } = useTranslationWithFallback('home');

  return (
    <Wrapper breakpoint="lg" id="offer">
      <Container>
        <SectionHeader
          title={
            <Trans
              i18nKey="home:offer.title"
              components={[<React.Fragment key="0" />, <span key="1" />]}
            />
          }
          descriptions={[t('offer.subTitle')]}
        />
        <Inner>
          <OfferSection
            title={t('offer.sections.web.title')}
            description={
              <Trans
                i18nKey="home:offer.sections.web.description"
                components={[
                  <React.Fragment key="0" />,
                  <b key="1" />,
                  <br key="2" />,
                ]}
              />
            }
            icon={
              <img
                src={require('@assets/icons/font-awesome5/fa-solid_code.svg')}
                alt="Code icon"
              />
            }
            imageUrl="/static/assets/offer/web.png"
          />
          <OfferSection
            title={t('offer.sections.design.title')}
            description={
              <Trans
                i18nKey="home:offer.sections.design.description"
                components={[
                  <React.Fragment key="0" />,
                  <b key="1" />,
                  <br key="2" />,
                ]}
              />
            }
            icon={<FontAwesomeIcon icon={faPencilRuler} />}
            imageUrl="/static/assets/offer/design.png"
          />
          <OfferSection
            title={t('offer.sections.branding.title')}
            description={
              <Trans
                i18nKey="home:offer.sections.branding.description"
                components={[
                  <React.Fragment key="0" />,
                  <b key="1" />,
                  <br key="2" />,
                ]}
              />
            }
            icon={
              <img
                src={require('@assets/icons/custom/smile.svg')}
                alt="Smile icon"
              />
            }
            imageUrl="/static/assets/offer/branding.png"
          />
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Offer;
