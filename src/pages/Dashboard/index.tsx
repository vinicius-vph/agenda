import React, { useEffect, useState } from 'react';

import ic_book from '../../assets/ic-book.svg';
import ic_plus from '../../assets/ic-plus.svg';

import Header from '../../components/Header';
import Body from '../../components/Body';
import ModalAddContact from '../../components/ModalAddContact';
import ModalEditContact from '../../components/ModalEditContact';
import ModalDeleteContact from '../../components/ModalDeleteContact';
import ContactContainer from '../../components/ContactContainer';

import { Container } from './styles';

import { IContact } from '../../types';

const Dashboard: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>(() => {
    const storagedContacts = localStorage.getItem('@agenda:contacts');

    return ( storagedContacts ? JSON.parse(storagedContacts) : [] );
  });

  useEffect(() => {
    localStorage.setItem('@agenda:contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [highlightContact, setHighlightContact] = useState<IContact>({} as IContact);

  function toogleAddModal(): void {
    setAddModalOpen(!addModalOpen);
  }

  function timeOutHighlight(): void {
    setTimeout(() => {setHighlightContact({} as IContact)}, 10000);
  }

  async function handleAddContact(contact: IContact): Promise<void> {
    setContacts([...contacts, contact]);
    setHighlightContact(contact);
    timeOutHighlight();
  }

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

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletingContact, setDeletingContact] = useState<IContact>({} as IContact);

  function toggleDeleteModal(): void {
    setDeleteModalOpen(!deleteModalOpen);
  }

  function handleDeletingContact(contact: IContact): void {
    setDeletingContact(contact);
    toggleDeleteModal();
  }

  async function handleDeleteContact(id: string): Promise<void> {
    try {
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (err) {
      console.log(err);
    }
    toggleDeleteModal();
  }
  
  const [filteredContact, setFilteredContact] = useState<IContact | undefined>({} as IContact);

  function handleFilterContact(contactName: string):  void | undefined {
    setFilteredContact(contacts.find(contact =>
      contact.name.toLowerCase() === contactName?.toLowerCase())
    );
  }

  return (
    <Container>
      { contacts.length === 0 ?
        <div className="Agenda-vazia">
          <Header handleFilterContact={handleFilterContact} />

          <ModalAddContact
            isOpen={addModalOpen}
            setIsOpen={toogleAddModal}
            handleAddContact={handleAddContact}
          />

          <Body>
            <div className="Adjust-body">
              <img src={ic_book} alt="ubook" className="ic_book" />
              <span className="Nenhum-contato-foi-c">Nenhum contato foi criado ainda.</span>
              <div className="Rectangle" onClick={toogleAddModal}>
                <img src={ic_plus} alt="imagem-adicionar" className="ic_plus" />
                <span className="Criar-contato">Criar contato</span>
              </div>
            </div>
          </Body>
        </div>

      :
        <div className="Contato-criado-com-sucesso">
          <Header handleFilterContact={handleFilterContact}>
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

          <ModalDeleteContact
            isOpen={deleteModalOpen}
            setIsOpen={toggleDeleteModal}
            deletingContact={deletingContact}
            handleDeleteContact={handleDeleteContact}
          />
          <Body>
            <div className="Rectangle-head">
              <span className="Contatos">Contatos</span>
              <span className="E-mail">E-mail</span>
              <span className="Telefone">Telefone</span>
            </div>
          {
            contacts.sort(
              (a, b) => {
                const contactA = a.name.toLowerCase();
                const contactB = b.name.toLowerCase();
                if (contactA > contactB) { return 1; }
                if (contactA < contactB) { return -1; }
                return 0;
              }
            ).map(
              (contact: IContact) => (
                <ContactContainer
                  key={contact.id}
                  filteredContact={filteredContact}
                  contact={contact}
                  handleEditContact={handleEditContact}
                  highlightContact={highlightContact}
                  handleDeletingContact={handleDeletingContact}
                />
              )
            )
          }
          </Body>
        </div>
      }
    </Container>
  )
};

export default Dashboard;