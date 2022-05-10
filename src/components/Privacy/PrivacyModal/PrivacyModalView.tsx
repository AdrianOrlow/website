import { usePrivacyPolicy } from '@components/Privacy/PrivacyPolicy/PrivacyPolicyContext';
import { paths } from '@constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@shared/Button';
import Modal from '@shared/Modal/ModalView';
import theme from '@theme';
import { scripts, ScriptsPreferences } from '@utils/scriptsManager';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AdvancedSettings from './AdvancedSettings';
import { ButtonsWrapper, TextWrapper } from './PrivacyModalStyle';

library.add(faCookieBite);

export const allDisabledPolicy = Object.fromEntries(
  Object.keys(scripts).map((s) => [s, false])
) as ScriptsPreferences;

export const allEnabledPolicy = Object.fromEntries(
  Object.keys(scripts).map((s) => [s, true])
) as ScriptsPreferences;

const PrivacyModalView = () => {
  const [show, setShow] = useState(false);
  const [showAdvanced] = useState(false);
  const { setPreferences, preferences } = usePrivacyPolicy();

  const header = {
    title: (
      <Image
        height={16}
        width={52}
        src={require('@assets/icons/logo-white.svg')}
      />
    ),
    color: theme.colors.primary,
  };

  const handleEnableAllAndCloseClick = () => {
    setPreferences(allEnabledPolicy);
    handleClose();
  };

  const handleDisableAllAndCloseClick = () => {
    setPreferences(allDisabledPolicy);
    handleClose();
  };

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    setShow(!preferences);
  }, [preferences]);

  if (preferences) {
    return null;
  }

  return (
    <Modal header={header} show={show} disableOverlayClick>
      {showAdvanced ? (
        <AdvancedSettings onClose={handleClose} />
      ) : (
        <>
          <TextWrapper>
            <p>
              Strona korzysta z plików cookie. Zarówno z tych niezbędnych –
              umożliwiających korzystanie z serwisu oraz z dodatkowych,
              wspierających analitykę i marketing. Kliknij, aby zaakceptować
              wybrane pliki cookie.
            </p>
            <p>
              Administratorem Twoich danych jest Adrian Orłów. Z pełnymi
              informacjami możesz zapoznać się w{' '}
              <Link href={paths.privacy}>polityce prywatności</Link>.
            </p>
          </TextWrapper>
          <ButtonsWrapper>
            <Button
              beforeIcon={<FontAwesomeIcon icon={faCookieBite} />}
              onClick={handleEnableAllAndCloseClick}
            >
              Akceptuję wszystkie
            </Button>
            <Button background="bluish" onClick={handleDisableAllAndCloseClick}>
              Odrzuć
            </Button>
          </ButtonsWrapper>
        </>
      )}
    </Modal>
  );
};

export default PrivacyModalView;
