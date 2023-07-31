import { Client, Databases, Account } from "appwrite";
import { Server } from "../src/Config";

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }

    let client = new Client();
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("64aaa243700fd9c20743");

    const account = new Account(client);
    const database = new Databases(client);

    api.sdk = { database, account };
    return api.sdk;
  },

  createSession: (email, password) => {
    return api.provider().account.createEmailSession(email, password);
  },

  listDocuments: (databaseId, collectionId) => {
    return api.provider().database.listDocuments(databaseId, collectionId);
  },
};

export default api;
