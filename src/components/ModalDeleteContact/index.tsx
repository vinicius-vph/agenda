import React, { useEffect, useState } from 'react';

import ReactModal from 'react-modal';

import { IModalDeleteProps } from '../../types';

import { Container } from './styles';

const ModalDeleteContact: React.FC<IModalDeleteProps> = ({ isOpen, setIsOpen, deletingContact, handleDeleteContact }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(()=> {
    setModalStatus(isOpen);
  },[isOpen])
  
  return (
    <ReactModal
      className='bg_modal'
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          width: '432px',
          height: '207px',
          margin: '75px auto 0 auto',
          padding: '16px 0',
          borderRadius: '16px',
          boxShadow: '0 16px 10px 0 rgba(0, 0, 0, 0.16)',
          backgroundColor: 'var(--white-two)',
        },
        overlay: {
          width: '100vw',
          height: '1024px',
          padding: '0 0 581px',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
      }}
    >
    <Container>
      <span className="Excluir-contato Text-Style">
        Excluir contato
      </span>
      <div className="First-divisor"></div>
      <span className="Deseja-realmente-exc">
        Deseja realmente excluir o contato?
      </span>
      <div className="Last-divisor"></div>
      <span className="Cancelar" onClick={setIsOpen}>Cancelar</span>
      <button className="Rectangle-Copy-delete" onClick={() => {handleDeleteContact(deletingContact.id)}}>
        <span className="Excluir">Excluir</span>
      </button>
    </Container>
  </ReactModal>
  );
};

export default ModalDeleteContact;