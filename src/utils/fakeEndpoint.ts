import { IContact } from "../types";
let database = localStorage;

const orm = {
  findAllContacts(path: string) {
    return database.getItem(path);
  },

  createContacts(path: string, contacts: string) {
   database.setItem(path, contacts); 
  }
}

const fakeEndpoint = {
  async find(path: string) {
    const storagedContacts = orm.findAllContacts(path)
    return storagedContacts ? JSON.parse(storagedContacts) : [];
  },
  async create(path: string, contactData: IContact[]) {
    const contacts: string = JSON.stringify(contactData);
    try {
      orm.createContacts(path, contacts);
    } catch (error) {
      console.log(error)
    }  
  }
}

export default fakeEndpoint;
