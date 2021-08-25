import React, { useCallback, useRef } from "react";
import { FormHandles } from '@unform/core';

import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";

import { Form } from "./styles";

import IContact from "./dtos/IContactDTO";
import IModalProps from "./dtos/IModalPropsDTO";

const ModalAddContact: React.FC<IModalProps> = ({ isOpen, setIsOpen, handleAddContact }) => {
  const formRef = useRef<FormHandles>(null);

  function idGenerator():string  {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  
  const handleSubmit = useCallback(
    (contact: IContact) => {
      handleAddContact({...contact, id: idGenerator()});
      setIsOpen();
    }, [handleAddContact, setIsOpen]
  );
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} >
        <span className="Criar-novo-contato Text-Style">Criar novo contato</span>
        <div className="divisor"></div>
        <span className="Nome">Nome</span>
          <Input name="name" className="text_field" type="text" required/>
        <span className="E-mail">Email</span>
          <Input name="email" className="text_field" type="email" required/>
        <span className="Telefone">Telefone</span>
          <Input name="phone" className="text_field" type="tel" maxLength={11} required/>
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