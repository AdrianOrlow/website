import {
  allDisabledPolicy,
  allEnabledPolicy,
} from '@components/Privacy/PrivacyModal/PrivacyModalView';
import { usePrivacyPolicy } from '@components/Privacy/PrivacyPolicy/PrivacyPolicyContext';
import Button from '@shared/Button';
import { scripts, ScriptsPreferences } from '@utils/scriptsManager';
import { useState } from 'react';
import { ButtonsWrapper, Title } from '../PrivacyModalStyle';
import { ScriptsWrapper, Toggle } from './AdvancedSettingsStyle';

interface Props {
  onClose(): void;
}

const AdvancedSettingsView: React.FC<Props> = ({ onClose }) => {
  const { setPreferences: savePreferences } = usePrivacyPolicy();
  const [preferences, setPreferences] =
    useState<ScriptsPreferences>(allDisabledPolicy);

  const handleScriptChange = (key: any, newValue: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  const handleEnableAllAndCloseClick = () => {
    savePreferences(allEnabledPolicy);
    onClose();
  };

  const handleSaveClick = () => {
    savePreferences(preferences);
    onClose();
  };

  return (
    <>
      <div>
        <Title>Cele przetwarzania Twoich danych</Title>
        <ScriptsWrapper>
          {(Object.keys(scripts) as any).map((key) => {
            const script = scripts[key];

            return (
              <div key={key}>
                <Toggle
                  label={script?.name}
                  value={preferences[key]}
                  onValueChange={(v) => handleScriptChange(key, v)}
                />
                {script?.description}
              </div>
            );
          })}
        </ScriptsWrapper>
      </div>
      <ButtonsWrapper>
        <Button background="bluish" onClick={handleSaveClick}>
          Akceptuję wybrane
        </Button>
        <Button onClick={handleEnableAllAndCloseClick}>
          Akceptuję wszystkie
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default AdvancedSettingsView;
