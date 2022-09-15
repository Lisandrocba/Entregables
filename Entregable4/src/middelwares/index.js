const joi = require("joi");

const validateObject = joi.object({
  nombre: joi.string().required(),
  precio: joi.number().required().min(1),
  stock: joi.number().required().min(0),
});

const dataValidation = async (req, res, next) => {
  try {
    const { body } = req;
    await validateObject.validateAsync(body)
    next()
  } catch (error) {
    res.status(404).json("Error en la carga de los datos");
  }
};

module.exports = dataValidation;
