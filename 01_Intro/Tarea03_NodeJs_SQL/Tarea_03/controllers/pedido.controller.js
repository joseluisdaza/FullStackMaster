const { Pedido } = require("../models");

exports.obtenerPedidos = async (req, res) => {
  const pedidos = await Pedido.findAll();
  res.json(pedidos);
};

exports.crearPedido = async (req, res) => {
  const pedido = await Pedido.create(req.body);
  res.status(201).json(pedido);
};

exports.obtenerPedido = async (req, res) => {
  const { id } = req.params;
  const pedido = await Pedido.findByPk(id);
  if (!pedido) {
    res.status(404).json({ message: "Pedido no encontrado" });
  } else {
    res.json(pedido);
  }
};

exports.actualizarPedido = async (req, res) => {
  const { id } = req.params;
  await Pedido.update(req.body, {
    where: {
      id,
    },
  });

  const pedido = await Pedido.findByPk(id);
  res.json(pedido);
};

exports.eliminarPedido = async (req, res) => {
  const { id } = req.params;

  const pedido = await Pedido.findByPk(id);
  if (!pedido) {
    res.status(404).json({ message: "Pedido no encontrado" });
  } else {
    await Pedido.destroy({
      where: {
        id,
      },
    });
    res.json("Pedido eliminado");
  }
};
