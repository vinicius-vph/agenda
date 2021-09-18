import { IContact } from "../types";
const database = localStorage;
const key = '@agenda:contacts';

const orm = {
  findAllContacts() {
    try {
      const storagedContacts = database.getItem(key);
      return ( storagedContacts ? JSON.parse(storagedContacts) : [] );
    } catch (error) {
      console.log(error);
    }
  },
  create(contacts: IContact[]) {
    try {
      const value = JSON.stringify(contacts)
      return database.setItem(key, value);
      
    } catch (error) {
      console.log(error);
    }
  }
}

export default orm;
