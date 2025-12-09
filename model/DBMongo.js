import { MongoClient } from "mongodb";

import config from "../config.js";

class ConnectMongoDB {
  static connectionOK = false;
  static db = null;

  static conectar = async () => {
    try {
      console.log("Conectando a la base de datos...");
      const client = new MongoClient(config.CONN_STRING);
      await client.connect();
      console.log("Base de datos conectada!");

      ConnectMongoDB.db = client.db(config.BASE);

      ConnectMongoDB.connectionOK = true;
    } catch (error) {
      console.log(`Error en conexión de base de datos: ${error.message}`);
    }
  };
}

export default ConnectMongoDB;
