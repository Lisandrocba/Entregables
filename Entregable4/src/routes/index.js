const { Router } = require("express");
const fs = require("fs");
const dataValidation = require("../middelwares/index.js");

const router = Router();
let productos = [];

const reloadFile = async () => {
  try {
    const productFile = await fs.promises.readFile("productos.txt", "utf8");
    productos = JSON.parse(productFile);
    console.log("productos", productos);
  } catch (error) {
    console.log(error);
  }
};

router.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/src/files/index.html");
});

router.get("/suma/:num1/:num2", (req, res) => {
  try {
    const { num1, num2 } = req.params;
    const respuesta = parseInt(num1) + parseInt(num2);
    res.status(200).json(respuesta)
  } catch (error) {
    console.log(error);
  }
});

router.post("/", dataValidation, async (req, res) => {
  const { body } = req;
  try {
    await reloadFile();
    let id =
      productos.length !== 0 ? productos[productos.length - 1].id + 1 : 1;
    productos.push({ ...body, id });
    fs.promises.writeFile("productos.txt", JSON.stringify(productos));
    res.status(200).json({ mensaje: "producto agregado con exito", productos });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
