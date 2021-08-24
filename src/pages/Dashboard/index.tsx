import React, { useEffect, useState } from "react";

import ic_book from '../../assets/ic-book.svg';
import ic_plus from '../../assets/ic-plus.svg';

import Header from "../../components/Header";
import Body from "../../components/Body";

import { Container } from "./styles";
import ModalAddContact from "../../components/ModalAddContact";

const Dashboard: React.FC = () => {
  const [addModalOpen, setAddModalOpen] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [contacts, setContacts] = useState(() => { 
    const storagedContacts = localStorage.getItem('@book:contacts');
    if (storagedContacts) {
      return JSON.parse(storagedContacts);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@book:contacts', JSON.stringify(contacts));
  }, [contacts]);
  

  function toogleAddModal():void {
    setAddModalOpen(!addModalOpen);
  }

  function handleAddContact() {
    alert("deu certo")
  } 

  
  return (
    <Container>
      <div className="Agenda-vazia">
        <Header />

        <ModalAddContact 
          isOpen={addModalOpen}
          setIsOpen={toogleAddModal}
          handleAddContact={handleAddContact}
        />
        
        <Body>
        {contacts.length > 0 ? 
          contacts.map((contact: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => (
            <p>{contact}</p>
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
      </div>
    </Container>  
  )
};

export default Dashboard;