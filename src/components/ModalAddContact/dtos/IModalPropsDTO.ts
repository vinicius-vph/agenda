import IContact from "./IContactDTO";

export default interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddContact: (data: IContact) => void;
}