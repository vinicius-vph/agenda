import React from "react";

import { Container } from './styles';

const Body: React.FC = (props) => (
  <Container>
    <section className="Secção-principal">
      {props.children}    
    </section>
  </Container>
);

export default Body;