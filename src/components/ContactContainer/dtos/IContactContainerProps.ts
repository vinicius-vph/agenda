import IContact from "./IContactDTO";

export default interface IContactContainerProps {
  contact: IContact; 
  handleEditContact: (contact: IContact) => void; 
  handleDeleteContact: (id: string) => Promise<void>;
  highlightContact: IContact;
}