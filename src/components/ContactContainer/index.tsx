import React from 'react';
import randomColor from 'randomcolor';

import { IContactContainerProps } from '../../types/';

import ic_edit from '../../assets/ic-edit.svg';
import ic_delete from '../../assets/ic-delete.svg';

import { Container } from './styles';

const ContactContainer: React.FC<IContactContainerProps> = (
  { 
    contact, 
    idToHighlight,  
    filteredContact, 
    handleEditContact, 
    handleDeletingContact
  }
  ) => {
  const color = randomColor();

  return (
    <Container 
      contact={contact}  
      idToHighlight={idToHighlight} 
      filteredContact={filteredContact}
    >
      <div className="Rectangle-flex">
        <div className="Oval" style={{backgroundColor: color}}>
          <span>{contact.name.charAt(0).toUpperCase()}</span>
        </div> 
        <span className="Contact-name">{contact.name}</span>
      </div>
      <div className="Rectangle-flex">
        <span className="Contact-name">{contact.email}</span>
      </div>
      <div className="Rectangle-flex">
        <span className="Contact-name">{contact.phone}</span>
        <div className="Button-container"> 
          <img 
            src={ic_edit} 
            alt="imagem_edit" 
            className="ic_edit" 
            onClick={() => handleEditContact(contact)}
          />
          <img 
            src={ic_delete} 
            alt="imagem_delete" 
            className="ic_delete" 
            onClick={() => {handleDeletingContact(contact)}}
          />
        </div>
      </div>
      
    </Container>
  )
};

export default ContactContainer;
