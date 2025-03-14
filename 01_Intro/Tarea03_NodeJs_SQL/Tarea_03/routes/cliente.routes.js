const express = require("express");
const router = express.Router();
const {
  obtenerClientes,
  crearCliente,
  obtenerCliente,
  actualizarCliente,
  eliminarCliente,
} = require("../controllers/cliente.controller");

//Rutas para Clientes
router.get("/clientes/:id", obtenerCliente);
router.get("/clientes", obtenerClientes);
router.post("/clientes", crearCliente);
router.put("/clientes/:id", actualizarCliente);
router.delete("/clientes/:id", eliminarCliente);
module.exports = router;
