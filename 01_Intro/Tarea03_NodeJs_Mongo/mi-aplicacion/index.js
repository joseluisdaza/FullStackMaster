const express = require("express");
const app = express();
const connectDB = require("./config/db");
const clientes = require("./routes/clientes");
const pedidos = require("./routes/pedidos");

// Conectar a la base de datos ejemplo2
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Definir las rutas
app.use("/api/clientes", clientes);
app.use("/api/pedidos", pedidos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
