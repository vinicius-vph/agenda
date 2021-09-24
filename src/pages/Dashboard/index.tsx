import React, { 
  useEffect, 
  useState 
} from 'react';

import { IContact } from '../../types';

import ic_book from '../../assets/ic-book.svg';

import Header from '../../components/Header';
import Body from '../../components/Body';
import ModalAddContact from '../../components/ModalAddContact';
import ModalEditContact from '../../components/ModalEditContact';
import ModalDeleteContact from '../../components/ModalDeleteContact';
import ContactContainer from '../../components/ContactContainer';
import ButtonAddContact from '../../components/ButtonAddContact/'

import { Container } from './styles';

import api from '../../services/api';

const Dashboard: React.FC = () => {
  const PATH: string  = 'contacts';

  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(()=> {
    api.get(PATH).then((response: IContact[]) => {
      setContacts(response);
    });
  }, []);

  useEffect(() => {
    api.post(PATH, contacts);
  }, [contacts]);
  
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [idToHighlight, setIdToHighlight] = useState('');
  const [editingContact, setEditingContact] = useState<IContact>({} as IContact);
  const [deletingContact, setDeletingContact] = useState<IContact>({} as IContact);
  const [filteredContact, setFilteredContact] = useState<IContact | undefined>({} as IContact);

  function toggle(setState: React.Dispatch<React.SetStateAction<boolean>>, modal: boolean): void {
    setState(!modal);
  }
  
  function timeOutHighlight(): void {
    setTimeout(() => {setIdToHighlight('')}, 10000);
  }

  async function handleAddContact(contact: IContact): Promise<void> {
    try {
      setContacts([...contacts, contact]);
      setIdToHighlight(contact.id)
      timeOutHighlight();
    } catch (error) {
      console.log(error);
    }
  }

  function handleEditContact(contact: IContact): void {
    setEditingContact(contact);
    toggle(setEditModalOpen, editModalOpen);
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

  function handleDeletingContact(contact: IContact): void {
    setDeletingContact(contact);
    toggle(setDeleteModalOpen, deleteModalOpen);
  }

  async function handleDeleteContact(id: string): Promise<void> {
    try {
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.log(error);
    }
    toggle(setDeleteModalOpen, deleteModalOpen);
  }
  

  function handleFilterContact(contactName: string):  void | undefined {
    setFilteredContact(contacts.find(contact =>
      contact.name.toLowerCase() === contactName?.toLowerCase())
    );
  }

  return (
    <>
    { !contacts.length ?
      <Container className="Agenda-vazia">
        <Header 
          handleFilterContact={handleFilterContact} 
        />
        <ModalAddContact
          isOpen={addModalOpen}
          setIsOpen={() => toggle(setAddModalOpen, addModalOpen)}
          handleAddContact={handleAddContact}
        />
        <Body>
          <div className="Adjust-body">
            <img src={ic_book} alt="ubook" className="ic_book" />
            <span className="Nenhum-contato-foi-c">Nenhum contato foi criado ainda.</span>
            <ButtonAddContact toggle={() => toggle(setAddModalOpen, addModalOpen)} />
          </div>
        </Body>
      </Container>
    :
      <Container className="Contato-criado-com-sucesso">
        <Header handleFilterContact={handleFilterContact}>
        <ButtonAddContact toggle={() => toggle(setAddModalOpen, addModalOpen)} />
        </Header>
        <ModalAddContact
          isOpen={addModalOpen}
          setIsOpen={() => toggle(setAddModalOpen, addModalOpen)}
          handleAddContact={handleAddContact}
        />
        <ModalEditContact
          isOpen={editModalOpen}
          setIsOpen={() => toggle(setEditModalOpen, editModalOpen)}
          editingContact={editingContact}
          handleUpdateContact={handleUpdateContact}
        />
        <ModalDeleteContact
          isOpen={deleteModalOpen}
          setIsOpen={() => toggle(setDeleteModalOpen, deleteModalOpen)}
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
            (a: IContact, b: IContact) => {
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
                contact={contact}
                idToHighlight={idToHighlight}
                filteredContact={filteredContact}
                handleEditContact={handleEditContact}
                handleDeletingContact={handleDeletingContact}
              />
            )
          )
        }
        </Body>
      </Container>
    }
    </>
  )
};

export default Dashboard;
