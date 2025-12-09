import Joi from "joi";

export const validar = (producto) => {
  const productoSchema = Joi.object({
    nombre: Joi.string().alphanum().min(1).max(80).required(),
    precio: Joi.number().min(0).max(10000000).required(),
    stock: Joi.number().integer().min(0).max(9999).required(),
    marca: Joi.string().required(),
    categoria: Joi.string().required(),
    detalles: Joi.string(),
    foto: Joi.string(),
    envio: Joi.boolean().required(),
  });

  const { error } = productoSchema.validate(producto);
  if (error) {
    return { result: false, error };
  }
  return { result: true };
};
