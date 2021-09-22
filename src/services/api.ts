import { IContact } from "../types";
import fakeEndpoint from "../utils/fakeEndpoint"

const api = {
  async get(path: string) {
    return fakeEndpoint.find(path); 
  },

  async post(path: string, contactData: IContact[]) {
    return fakeEndpoint.create(path, contactData);
  }
}

export default api;
