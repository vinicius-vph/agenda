import React, { useCallback, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormHandles } from '@unform/core';

import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

import { Form } from './styles';

import { IContact, IModalAddProps } from '../../types';

const ModalAddContact: React.FC<IModalAddProps> = ({ isOpen, setIsOpen, handleAddContact }) => {
  const [isFilled, setIsFilled] = useState(false);
  
  const formRef = useRef<FormHandles>(null);
  
  function idGenerator():string  {
    return uuidv4();
  };
  
  function handleInputBlur(): void {
    const name = !!formRef.current?.getFieldValue('name')
    const email = !!formRef.current?.getFieldValue('email')
    const phone = !!formRef.current?.getFieldValue('phone')
    
    if (name || email || phone) {
      setIsFilled(true)
    }else {
      return setIsFilled(false);
    }
  }

  useEffect(() => {
    setIsFilled(false);
  }, [isOpen])

  const handleSubmit = useCallback(
    (contact: IContact) => {
      handleAddContact({...contact, id: idGenerator()});
      setIsOpen();
      setIsFilled(false);
    }, [handleAddContact, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} >
        <span className="Criar-novo-contato Text-Style">Criar novo contato</span>
        <div className="divisor"></div>
        <span className="Nome">Nome</span>
          <Input name="name" className="text_field" type="text" onBlur={handleInputBlur} required/>
        <span className="E-mail">Email</span>
          <Input name="email" className="text_field" type="email" onBlur={handleInputBlur} required/>
        <span className="Telefone">Telefone</span>
          <Input name="phone" className="text_field" type="tel" onBlur={handleInputBlur} maxLength={11} required/>
        <div className="divisor"></div>
        <span className="Cancelar" onClick={setIsOpen}>Cancelar</span>
        <Button data-testid="save-contact" className="Rectangle-Copy" isFilled={isFilled}>
          <span className="Salvar">Salvar</span>
        </Button>
      </Form>
    </Modal>
  )
};

export default ModalAddContact;