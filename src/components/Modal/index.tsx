import React, { 
  useEffect, 
  useState 
} from 'react';

import ReactModal from 'react-modal';

import { IModalProps } from '../../types';

const Modal: React.FC<IModalProps> = (
  { 
    children, 
    isOpen, 
    setIsOpen 
  }
  ) => {
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
          margin: '170px auto 23px auto',
          padding: '16px 0 0',
          borderRadius: '16px',
          boxShadow: '0 16px 10px 0 rgba(0, 0, 0, 0.16)',
          backgroundColor: 'var(--white-two)',
        },
        overlay: {
          width: '100vw',
          height: '100vh',
          padding: '0 0 324px',
          margin: '0 auto',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
      }}
    >
    {children}
    </ReactModal>
  );
};

export default Modal;
