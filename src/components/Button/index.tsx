import React from 'react';
import { ButtonProps } from '../../types';
import { Container } from './styles';

const Button: React.FC<ButtonProps> = (
  { children, 
    isFilled, 
    ...rest 
  }
  ) => (
  <Container 
    type="submit" 
    isFilled={isFilled} 
    {...rest}
  >
    {children}
  </Container>
);

export default Button;
