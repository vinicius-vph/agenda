import React, { useCallback, useRef } from "react";
import { FormHandles } from '@unform/core';

import Modal from "../Modal";
import Input from "../Input";

import { Form } from "./styles";

interface IContact {
  name: string;
  email: string;
  phone: string;
}

interface ICreateContact {
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

  const handleSubmit = useCallback(
    (data: ICreateContact) => {
      // ADD A NEW FOOD AND CLOSE THE MODAL
      handleAddContact(data);
      setIsOpen();
    }, [handleAddContact, setIsOpen]
  )
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <span className="Criar-novo-contato Text-Style">Criar novo contato</span>
        <div className="divisor"></div>
        <span className="Nome">Nome</span>
          <Input name="name" className="text_field" />
        <span className="E-mail">Email</span>
          <Input name="email" className="text_field" />
        <span className="Telefone">Telefone</span>
          <Input name="phone" className="text_field" />
        <div className="divisor"></div>
        <span className="Cancelar">Cancelar</span>
        <div data-testid="save-contact" className="Rectangle-Copy">
          <span className="Salvar">
            Salvar
          </span>
        </div>
      </Form>
    </Modal>
  )
};

export default ModalAddContact;