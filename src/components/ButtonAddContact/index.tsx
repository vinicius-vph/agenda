import React from 'react';
import ic_plus from '../../assets/ic-plus.svg';

interface IButtonAddProps{
  toggle: () => void;
}

const ButtonAddContact: React.FC<IButtonAddProps> = ({toggle}) => (
  <div className="Rectangle" onClick={toggle}>
    <img src={ic_plus} alt="imagem-adicionar" className="ic_plus" />
    <span className="Criar-contato">Criar contato</span>
  </div>
);

export default ButtonAddContact;
