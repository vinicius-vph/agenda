import React, { useEffect, useState } from "react";

import ic_book from '../../assets/ic-book.svg';
import ic_plus from '../../assets/ic-plus.svg';

import Header from "../../components/Header";
import Body from "../../components/Body";

import { Container } from "./styles";
import ModalAddContact from "../../components/ModalAddContact";

import IContact from "./dtos/IContactDTO";

const Dashboard: React.FC = () => {
  const [addModalOpen, setAddModalOpen] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [contacts, setContacts] = useState<IContact[]>(() => {
    const storagedContacts = localStorage.getItem('@agenda:contacts');
    if (storagedContacts) {
      return JSON.parse(storagedContacts);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@agenda:contacts', JSON.stringify(contacts));
  }, [contacts]);

  async function handleAddContact(contact: IContact): Promise<void> {
    setContacts([...contacts, contact]);
  } 

  function toogleAddModal():void {
    setAddModalOpen(!addModalOpen);
  }
  
  return (
    <Container className="Agenda-vazia">
      <Header />

      <ModalAddContact 
        isOpen={addModalOpen}
        setIsOpen={toogleAddModal}
        handleAddContact={handleAddContact}
      />
        
      <Body>
      {contacts ? 
        contacts.map((contact: IContact) => (
          <>
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </>
        ))
        :
          <>
            <img src={ic_book} alt="ubook" className="ic_book" />
            <span className="Nenhum-contato-foi-c">Nenhum contato foi criado ainda.</span>
            <div className="Rectangle">
              <img src={ic_plus} alt="imagem-adicionar" className="ic_plus" />
              <span className="Criar-contato">Criar contato</span>
            </div>
          </>
        }    
      </Body>
    </Container>  
  )
};

export default Dashboard;