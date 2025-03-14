const express = require("express");
const router = express.Router();
const {
  obtenerPedidos,
  crearPedido,
  obtenerPedido,
  actualizarPedido,
  eliminarPedido,
} = require("../controllers/pedido.controller");
const { route } = require("./cliente.routes");

router.get("/pedidos", obtenerPedidos);
router.post("/pedidos", crearPedido);
router.get("/pedidos/:id", obtenerPedido);
router.put("/pedidos/:id", actualizarPedido);
router.delete("/pedidos/:id", eliminarPedido);

module.exports = router;
