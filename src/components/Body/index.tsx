import React from 'react';

import { Container } from './styles';

const Body: React.FC = (props) => (
  <Container>
    {props.children}    
  </Container>
);

export default Body;
