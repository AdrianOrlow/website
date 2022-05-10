import Trans from 'next-translate/Trans';
import * as React from 'react';
import { Container, Wrapper } from './CTABuildProductStyle';

const CTABuildProduct: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Trans
          i18nKey="common:CTABuildProduct.title"
          components={[<div key="0" />, <span key="1" />]}
        />
      </Container>
    </Wrapper>
  );
};

export default CTABuildProduct;
