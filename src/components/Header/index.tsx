import React from 'react';
import { IHeaderProps } from '../../types';
import ic_search from '../../assets/ic-search.svg';
import ic_logo from '../../assets/ic-logo.svg';

import { Container } from './styles';


const Header: React.FC<IHeaderProps> = ({children, handleFilterContact}) => (
  <Container hasChildren={!!children}>
    <header className="bg_header">
      <img src={ic_logo} alt="imagem_ubook" className="ic_logo" />
      
      {children}

      <div className="busca_field">
        {/* <span className="Buscar">Buscar...</span> */}
        <input 
          name="search"
          placeholder="Buscar..."
          onChange={(e) => handleFilterContact(e.target.value)} 
        />
        <img src={ic_search} alt="imagem_search" className="ic_search" />
      </div>
    </header>
  </Container>
);

export default Header;