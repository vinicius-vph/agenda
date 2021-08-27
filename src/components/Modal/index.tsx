import React, { useEffect, useState } from "react";

import ReactModal from "react-modal";

import IModalProps from "./dtos/IModalPropsDTO";

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
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
          height: '352px',
          margin: '170px 167px 23px 486px',
          padding: '16px 0 0',
          borderRadius: '16px',
          boxShadow: '0 16px 10px 0 rgba(0, 0, 0, 0.16)',
          backgroundColor: 'var(--white-two)',
        },
        overlay: {
          width: '1440px',
          height: '1024px',
          padding: '0 0 324px',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;