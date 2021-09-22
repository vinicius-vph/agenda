import { 
  InputHTMLAttributes, 
  ButtonHTMLAttributes 
} from 'react';

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface IHeaderProps {
  handleFilterContact: (contact: string) => void | undefined; 
}

export interface IContactContainerProps {
  contact: IContact; 
  idToHighlight: string;
  filteredContact: IContact | undefined;
  handleEditContact: (contact: IContact) => void; 
  handleDeletingContact: (contact: IContact) => void;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFilled: boolean;
}

export interface IModalProps {
  children?: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

export interface IModalAddProps extends IModalProps {
  handleAddContact: (data: IContact) => void;
}

export interface IModalEditProps extends IModalProps {
  editingContact: IContact;
  handleUpdateContact: (contact: IContact) => void;
}

export interface IModalDeleteProps extends IModalProps {
  deletingContact: IContact;
  handleDeleteContact: (id: string) => Promise<void>;
}
