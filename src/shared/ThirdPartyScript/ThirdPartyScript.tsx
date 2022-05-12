import { usePrivacyPolicy } from "@components/Privacy/PrivacyPolicy/PrivacyPolicyContext";
import { scripts } from "@utils/scriptsManager";
import NextHead from "next/head";
import * as React from "react";

interface Props {
  scriptKey: keyof typeof scripts;
}

const ThirdPartyScripts: React.FC<Props> = ({ scriptKey }) => {
  const { preferences } = usePrivacyPolicy();

  if (!preferences || !preferences[scriptKey]) {
    return null;
  }

  const script = scripts[scriptKey];

  return (
    <NextHead>
      <script async src={(script as any).src } />
    </NextHead>
  );
};

export default ThirdPartyScripts;
