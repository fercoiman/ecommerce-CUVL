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
    //console.log(productos)
    return productos;
  };

  obtenerProducto = async (id) => {
    if (!ConnectMongoDB.connectionOK)
      throw new Error("ERROR CNX BASE DE DATOS");

    //const producto = await ConnectMongoDB.db.collection('productos').findOne({_id: new ObjectId(id)})
    const producto = await ConnectMongoDB.db
      .collection("productos")
      .findOne({ _id: ObjectId.createFromHexString(id) });
    //console.log(producto)
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
    //console.log(productoActualizado)
    return productoActualizado;
  };

  borrarProducto = async (id) => {
    if (!ConnectMongoDB.connectionOK)
      throw new Error("ERROR CNX BASE DE DATOS");

    const productoEliminado = await this.obtenerProducto(id);
    await ConnectMongoDB.db
      .collection("productos")
      .deleteOne({ _id: ObjectId.createFromHexString(id) });
    //console.log(productoEliminado)
    return productoEliminado;
  };
}

export default ModelMongoDB;
