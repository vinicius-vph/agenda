import React from 'react';

import ic_edit from '../../assets/ic-edit.svg';
import ic_delete from '../../assets/ic-delete.svg';

import { IContactContainerProps } from '../../types/';

import { Container } from './styles';

const ContactContainer: React.FC<IContactContainerProps> = ({ contact, handleEditContact, handleDeleteContact, highlightContact }) => {
  return (
    <Container highlightContact={highlightContact} contact={contact}>
      <div className="RectangleBody" key={contact.id}>
        <div>
          <div className="Oval">
          <a href="#">{contact.name[0]}</a>
        </div> 
        <span className="Vinicius">{contact.name}</span>
        </div>
        <div>
          <img src={ic_edit} alt="imagem_edit" className="ic_edit" onClick={() => handleEditContact(contact)}></img>
          <img src={ic_delete} alt="imagem_delete" className="ic_delete" onClick={() => handleDeleteContact(contact.id)}></img>
        </div>
      </div>
    </Container>
  )
};

export default ContactContainer;