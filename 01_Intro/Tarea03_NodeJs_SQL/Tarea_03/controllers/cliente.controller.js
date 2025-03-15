const { Cliente } = require("../models");

exports.obtenerClientes = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};

exports.crearCliente = async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.status(201).json(cliente);
};

exports.obtenerCliente = async (req, res) => {
  const { id } = req.params;
  const cliente = await Cliente.findByPk(id);
  if (!cliente) {
    res.status(404).json({ message: "Cliente no encontrado" });
  } else {
    res.json(cliente);
  }
};

exports.actualizarCliente = async (req, res) => {
  const { id } = req.params;
  await Cliente.update(req.body, {
    where: {
      id,
    },
  });

  const cliente = await Cliente.findByPk(id);
  res.json(cliente);
};

exports.eliminarCliente = async (req, res) => {
  const { id } = req.params;

  const cliente = await Cliente.findByPk(id);
  if (!cliente) {
    res.status(404).json({ message: "Cliente no encontrado" });
  } else {
    await Cliente.destroy({
      where: {
        id,
      },
    });
    res.json("cliente eliminado");
  }
};
