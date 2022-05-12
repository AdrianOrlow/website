import { Spinner } from '@shared/Loading';
import * as R from 'ramda';
import React from 'react';
import { useTheme } from 'styled-components';
import { Container, IconWrapper } from './ButtonStyle';
import { ButtonProps } from './ButtonTypes';

const Button: React.FC<ButtonProps> = ({
  beforeIcon,
  children,
  loading,
  background,
  ...props
}) => {
  const theme = useTheme();
  const spinnerColor = R.cond([[R.T, R.always(theme.colors.light)]])(
    background
  );
  const showIcon = loading || beforeIcon;
  const icon = loading ? <Spinner color={spinnerColor} /> : beforeIcon;

  return (
    <Container {...props} background={background} disabled={loading}>
      {showIcon && <IconWrapper>{icon}</IconWrapper>}
      {children && <span>{children}</span>}
    </Container>
  );
};

Button.defaultProps = {
  size: 'middle',
  background: 'blue',
};

export default Button;
