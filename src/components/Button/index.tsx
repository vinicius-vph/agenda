import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFilled: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isFilled, ...rest }) => (
  <Container type="submit" isFilled={isFilled} {...rest}>
    {children}
  </Container>
);

export default Button;