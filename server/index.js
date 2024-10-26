const express = require("express");
const cors = require("cors");
const app = express();
// Middleware para procesar JSON
app.use(express.json());
// const sequelize = require("providers/storageProviders")
// sequelize.get_connection().query("select * from users")

app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

  app.get("/", (req, res) => {
    res.send("Servidor con Express");
  });

const PUERTO = process.env.PORT||3001;

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://www.localhost:${PUERTO}...`);
});


  module.exports=app;