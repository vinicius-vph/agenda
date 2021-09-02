import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';

import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

import { Form } from './styles';

import { IContact, IModalEditProps } from '../../types';

const ModalEditContact: React.FC<IModalEditProps> = ({ 
    isOpen, 
    setIsOpen, 
    editingContact, 
    handleUpdateContact 
  }) => {
  const [isFilled, setIsFilled] = useState(true);

  const formRef = useRef<FormHandles>(null);
  
  function handleInputBlur(): void {
    const name = !!formRef.current?.getFieldValue('name')
    const email = !!formRef.current?.getFieldValue('email')
    const phone = !!formRef.current?.getFieldValue('phone')
    
    if (name || email || phone) {
      setIsFilled(true);
    }else {
      return setIsFilled(false);
    }
  }

  const handleSubmit = useCallback(
    (editedContact: IContact) => {
      handleUpdateContact(editedContact);
      setIsOpen();
    }, [handleUpdateContact, setIsOpen]
  );
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingContact}>
        <span className="Criar-novo-contato Text-Style">Criar novo contato</span>
        <div className="divisor"></div>
        <span className="Nome">Nome</span>
          <Input name="name" className="text_field" type="text" onBlur={handleInputBlur} required/>
        <span className="E-mail">Email</span>
          <Input name="email" className="text_field" type="email" onBlur={handleInputBlur} required/>
        <span className="Telefone">Telefone</span>
          <Input name="phone" className="text_field" type="tel" maxLength={11} onBlur={handleInputBlur} required/>
        <div className="divisor"></div>
        <span className="Cancelar" onClick={setIsOpen}>Cancelar</span>
        <Button data-testid="save-contact" className="Rectangle-Copy" isFilled={isFilled}>
          <span className="Salvar">Salvar</span>
        </Button>
      </Form>
    </Modal>
  )
};

export default ModalEditContact;