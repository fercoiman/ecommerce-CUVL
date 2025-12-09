import { ObjectId } from "mongodb";
import ConnectMongoDB from "../../DBMongo.js";

class ModelMongoDB {
  constructor() {}

  obtenerProductos = async () => {
    if (!ConnectMongoDB.connectionOK)
      throw new Error("ERROR CNX BASE DE DATOS");

    const productos = await ConnectMongoDB.db
      .collection("productos")
      .find({})
      .toArray();
    return productos;
  };

  obtenerProducto = async (id) => {
    if (!ConnectMongoDB.connectionOK)
      throw new Error("ERROR CNX BASE DE DATOS");

    const producto = await ConnectMongoDB.db
      .collection("productos")
      .findOne({ _id: ObjectId.createFromHexString(id) });
    return producto;
  };

  guardarProducto = async (producto) => {
    if (!ConnectMongoDB.connectionOK)
      throw new Error("ERROR CNX BASE DE DATOS");

    await ConnectMongoDB.db.collection("productos").insertOne(producto);
    return producto;
  };

  actualizarProducto = async (id, producto) => {
    if (!ConnectMongoDB.connectionOK)
      throw new Error("ERROR CNX BASE DE DATOS");

    await ConnectMongoDB.db
      .collection("productos")
      .updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: producto });
    const productoActualizado = await this.obtenerProducto(id);
    return productoActualizado;
  };

  borrarProducto = async (id) => {
    if (!ConnectMongoDB.connectionOK)
      throw new Error("ERROR CNX BASE DE DATOS");

    const productoEliminado = await this.obtenerProducto(id);
    await ConnectMongoDB.db
      .collection("productos")
      .deleteOne({ _id: ObjectId.createFromHexString(id) });
    return productoEliminado;
  };
}

export default ModelMongoDB;
