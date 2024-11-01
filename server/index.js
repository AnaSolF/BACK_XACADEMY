const express = require("express");
const app = express();
const connection = require("./config/dbconnection");
// Middleware
const { logging, middleJson, passport } = require("./middleware");
app.use(logging);
app.use(middleJson);
app.use(passport.initialize());

const {
  femalePlayersRouter,
  malePlayersRouter,
  newsPlayersRouter,
  usersRouter,
} = require("./routes");

//Routers
app.use("/api/femalePlayers", femalePlayersRouter);

app.use("/api/malePlayers", malePlayersRouter);

app.use("/api/newsPlayers", newsPlayersRouter);

app.use('/api/users', usersRouter);

//Ruta protegida
app.use("/api/users", passport.authenticate("jwt", { session: false }), newsPlayersRouter);

app.get("/", (req, res) => {
  res.send("Servidor con Express");
});

//Server
const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://www.localhost:${PUERTO}...`);
});

module.exports = app;
