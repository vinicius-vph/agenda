import IContact from "./IContactDTO";

export default interface IEditModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingContact: IContact;
  handleUpdateContact: (contact: IContact) => void;
}