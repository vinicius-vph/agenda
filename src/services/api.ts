import { IContact } from "../types";
import orm from "./orm"

const api = {
  get() {
    return orm.findAllContacts(); 
  },

  post(contacts: IContact[]) {
    return orm.create(contacts);
  }
}

export default api;
