import React, { useEffect, useState } from 'react';

import ic_book from '../../assets/ic-book.svg';
import ic_plus from '../../assets/ic-plus.svg';

import Header from '../../components/Header';
import Body from '../../components/Body';
import ModalAddContact from '../../components/ModalAddContact';
import ModalEditContact from '../../components/ModalEditContact';
import ContactContainer from '../../components/ContactContainer';

import { Container } from './styles';

import { IContact } from '../../types';

const Dashboard: React.FC = () => {  
  // pega os contatos salvos se ouver ou retorna um array vazio
  const [contacts, setContacts] = useState<IContact[]>(() => {
    const storagedContacts = localStorage.getItem('@agenda:contacts');
    
    return ( storagedContacts ? JSON.parse(storagedContacts) : [] );
  });

  // salva os contatos sempre que ouver alteração na variavel ou inicializa um array no localstorge, 
  useEffect(() => {
    localStorage.setItem('@agenda:contacts', JSON.stringify(contacts));
  }, [contacts]);

  // adicionar contato
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [highlightContact, setHighlightContact] = useState<IContact>({} as IContact);

  function toogleAddModal(): void {
    setAddModalOpen(!addModalOpen);
  }

  function timeOutHighlight(): void {
    setTimeout(() => {setHighlightContact({} as IContact)}, 10000)
  }

  async function handleAddContact(contact: IContact): Promise<void> {
    setContacts([...contacts, contact]);
    setHighlightContact(contact);
    timeOutHighlight();
  }
  
  // modal editar contato
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<IContact>({} as IContact);

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditContact(contact: IContact): void {
    setEditingContact(contact);
    toggleEditModal();
  }

  async function handleUpdateContact(editedContact: IContact): Promise<void> {
    try {
      setContacts(
        contacts.map(contact =>
          contact.id === editingContact.id ? {...editedContact, id: editingContact.id} : contact
        )
      )
    } catch (error) {
      console.log(error)
    }
  }

  //deletar contato
  async function handleDeleteContact(id: string): Promise<void> {
    try {
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      { contacts.length === 0 ? 
        <div className="Agenda-vazia">
          <Header />
          <ModalAddContact 
            isOpen={addModalOpen}
            setIsOpen={toogleAddModal}
            handleAddContact={handleAddContact}
          />

          <Body>
            <img src={ic_book} alt="ubook" className="ic_book" />
            <span className="Nenhum-contato-foi-c">Nenhum contato foi criado ainda.</span>
            <div className="Rectangle" onClick={toogleAddModal}>
              <img src={ic_plus} alt="imagem-adicionar" className="ic_plus" />
              <span className="Criar-contato">Criar contato</span>
            </div>
          </Body>
        </div>

      :
        <div className="Contato-criado-com-sucesso"> 
          <Header>
            <div className="Rectangle" onClick={toogleAddModal}>
              <img src={ic_plus} alt="imagem-adicionar" className="ic_plus" />
              <span className="Criar-contato">Criar contato</span>
            </div>
          </Header>

          <ModalAddContact 
            isOpen={addModalOpen}
            setIsOpen={toogleAddModal}
            handleAddContact={handleAddContact}
            />

          <ModalEditContact
            isOpen={editModalOpen}
            setIsOpen={toggleEditModal}
            editingContact={editingContact}
            handleUpdateContact={handleUpdateContact}
            />

          <Body>
            <div className="RectangleHead">
              <span className="Contatos">Contatos</span>
              <span className="E-mail">E-mail</span>
              <span className="Telefone">Telefone</span>          
            </div>
            {
              contacts.map((contact: IContact) => (
                <ContactContainer 
                  key={contact.id}
                  contact={contact}
                  handleEditContact={handleEditContact}
                  handleDeleteContact={handleDeleteContact}
                  highlightContact={highlightContact}
                />
              ))
            }
          </Body>
        </div>    
      }
    </Container>  
  )
};

export default Dashboard;