import { 
  InputHTMLAttributes, 
  ButtonHTMLAttributes 
} from "react";

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface IContactContainerProps {
  contact: IContact; 
  handleEditContact: (contact: IContact) => void; 
  handleDeleteContact: (id: string) => Promise<void>;
  highlightContact: IContact;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFilled: boolean;
}

export interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

export interface IModalAddProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddContact: (data: IContact) => void;
}

export interface IModalEditProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingContact: IContact;
  handleUpdateContact: (contact: IContact) => void;
}