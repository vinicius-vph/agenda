import React, { useCallback, useRef } from "react";
import { FormHandles } from '@unform/core';

import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";

import { Form } from "./styles";

interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddContact: (data: IContact) => void;
}

const ModalAddContact: React.FC<IModalProps> = ({ isOpen, setIsOpen, handleAddContact}) => {
  const formRef = useRef<FormHandles>(null);

  function idGenerator():string  {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  
  const handleSubmit = useCallback(
    (contact: IContact) => {
      contact.id = idGenerator();
      handleAddContact(contact);
      setIsOpen();
    }, [handleAddContact, setIsOpen]
  )
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} >
        <span className="Criar-novo-contato Text-Style">Criar novo contato</span>
        <div className="divisor"></div>
        <span className="Nome">Nome</span>
          <Input name="name" className="text_field" type="text"/>
        <span className="E-mail">Email</span>
          <Input name="email" className="text_field" type="text" />
        <span className="Telefone">Telefone</span>
          <Input name="phone" className="text_field" type="text" />
        <div className="divisor"></div>
        <span className="Cancelar">Cancelar</span>
        <Button data-testid="save-contact" className="Rectangle-Copy">
          <span className="Salvar">Salvar</span>
        </Button>
      </Form>
    </Modal>
  )
};

export default ModalAddContact;