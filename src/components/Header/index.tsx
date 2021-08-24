import React from "react";

import ic_search from '../../assets/ic-search.svg';
import ic_logo from '../../assets/ic-logo.svg';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <header className="bg_header">
      <img
        src={ic_logo}
        alt="imagem_ubook"
        className="ic_logo" />
      <div className="busca_field">
        <span className="Buscar">Buscar...</span>
        <img
          src={ic_search}
          className="ic_search" />
      </div>
    </header>
  </Container>
);

export default Header;