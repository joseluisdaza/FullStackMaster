const express = require("express");
const router = express.Router();
const {
  obtenerClientes,
  crearCliente,
} = require("../controllers/cliente.controller");

//Rutas para Clientes
router.get("/clientes", obtenerClientes);
router.post("clientes", crearCliente);

module.exports = router;
