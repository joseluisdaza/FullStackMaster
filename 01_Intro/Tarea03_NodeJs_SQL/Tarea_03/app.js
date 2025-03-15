require("dotenv").config();
const express = require("express");
const app = express();
const clienteRoutes = require("./routes/cliente.routes");
const pedidoRoutes = require("./routes/pedido.routes");

// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

app.use(express.json());
app.use("/api", clienteRoutes);
app.use("/api", pedidoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
//Legacy Code
// app.use(logger("dev"));
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

module.exports = app;
