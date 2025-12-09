import Server from "./server.js";

import config from "./config.js";
import ConnectMongoDB from "./model/DBMongo.js";

if (
  config.MODO_PERSISTENCIA_PRODUCTOS == "MONGODB" ||
  config.MODO_PERSISTENCIA_PEDIDOS == "MONGODB"
) {
  await ConnectMongoDB.conectar();
}

const server = new Server(config.PORT);
server.start();
