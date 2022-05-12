import {
  getScriptsPreferences,
  saveScriptsPreferences,
  ScriptsPreferences,
} from '@utils/scriptsManager';
import React, { useContext, useEffect, useState } from 'react';

type SetFunc = (previous: ScriptsPreferences) => ScriptsPreferences;

export interface PrivacyPolicyContextType {
  preferences: ScriptsPreferences;
  setPreferences(newPreferences: ScriptsPreferences | SetFunc): void;
}

const PrivacyPolicyContext =
  React.createContext<PrivacyPolicyContextType>(undefined);

export const usePrivacyPolicy = () => {
  const context = useContext(PrivacyPolicyContext);
  if (context === undefined) {
    throw new Error(
      'usePrivacyPolicy must be used within PrivacyPolicyProvider'
    );
  }

  return context;
};

const PrivacyPolicyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [preferences, setPreferences] = useState<ScriptsPreferences>(null);

  useEffect(() => {
    setPreferences(getScriptsPreferences());
  }, []);

  useEffect(() => {
    if (preferences) {
      saveScriptsPreferences(preferences);
    }
  }, [preferences]);

  const value = {
    preferences,
    setPreferences,
  };

  return (
    <PrivacyPolicyContext.Provider value={value}>
      {children}
    </PrivacyPolicyContext.Provider>
  );
};

export default PrivacyPolicyProvider;
