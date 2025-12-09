import ConnectMongoDB from "../../DBMongo.js";

class ModelMongoDB {
  constructor() {}

  obtenerPedidos = async () => {
    if (!ConnectMongoDB.connectionOK)
      throw new Error("ERROR CONEXION CON BASE DE DATOS");

    const pedidos = await ConnectMongoDB.db
      .collection("pedidos")
      .find({})
      .toArray();
    //console.log(pedidos)
    return pedidos;
  };

  guardarPedido = async (pedido) => {
    if (!ConnectMongoDB.connectionOK)
      throw new Error("ERROR CONEXION CON BASE DE DATOS");

    await ConnectMongoDB.db.collection("pedidos").insertOne(pedido);
    return pedido;
  };
}

export default ModelMongoDB;
