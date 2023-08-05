import { Client, Databases, Account } from "appwrite";
import { Server } from "./Config";

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }

    let client = new Client();
    client.setEndpoint(Server.endpoint).setProject(Server.project);

    const account = new Account(client);
    const database = new Databases(client);

    api.sdk = { database, account };
    return api.sdk;
  },

  getAccount: () => {
    let account = api.provider().account;
    return account.get();
  },

  createSession: (email, password) => {
    return api.provider().account.createEmailSession(email, password);
  },

  listDocuments: (databaseId, collectionId) => {
    return api.provider().database.listDocuments(databaseId, collectionId);
  },
};

export default api;
