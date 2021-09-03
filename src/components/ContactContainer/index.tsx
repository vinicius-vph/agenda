import React from 'react';
import randomColor from 'randomcolor';
import ic_edit from '../../assets/ic-edit.svg';
import ic_delete from '../../assets/ic-delete.svg';

import { IContactContainerProps } from '../../types/';

import { Container } from './styles';

const ContactContainer: React.FC<IContactContainerProps> = ({ contact, handleEditContact, highlightContact, handleDeletingContact  }) => {
  const color = randomColor();

  return (
    <Container highlightContact={highlightContact} contact={contact}>
      <div className="RectangleBody" key={contact.id}>
        <div className="Rectangle-flex">
          <div className="Oval" style={{backgroundColor: color}}>
            <span>{contact.name.charAt(0).toUpperCase()}</span>
          </div> 
            <span className="Contact-name">{contact.name}</span>
        </div>
        <div className="Rectangle-flex" style={{flex: '34%'}}>
          <span className="Contact-name">{contact.email}</span>
        </div>
        <div className="Rectangle-flex" style={{flex: '28.5%'}}>
          <span className="Contact-name">{contact.phone}</span>
        </div>
        <div className="Rectangle-flex">
          <img src={ic_edit} alt="imagem_edit" className="ic_edit" onClick={() => handleEditContact(contact)}></img>
          <img src={ic_delete} alt="imagem_delete" className="ic_delete" onClick={() => {handleDeletingContact(contact)}}></img>
        </div>
      </div>
    </Container>
  )
};

export default ContactContainer;