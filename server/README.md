# npm init para crear packages.
# Instalar npm i express morgan dotenv cors
# Instalar npm i axios express jsonwebtoken passport passport-jwt
# Instalar nodemon: npm install -g nodemon. Permite actualización continua del servidor express.
# Servidor nodemon: Pararse en archivo index.js del directorio raiz(server) y con botón izquierdo abrir terminal integrado. Comando: nodemon index.js
# Archivos enrutadores para api: server/routes/female_playersRouter.js (rutas jugadoras) y archivo male_playersRouter.js (rutas jugadores), 
<!-- archivo news_players para  el CRUD en tabla separada. -->
# SEPARAMOS LA LÓGICA de las Rutas, entre controllers y service.  
# Usamos directorio controllers/index.js para exportar las rutas y controllers/playersController.js para el CRUD usado en ambas rutas (female, male) filtrar por id, eliminar etc. Creamos un servicio (carpeta services) para realizar las queries a la base de datos (playerServices.js con las funciones, e index.js para exportarlo a la app).
# Archivo gitignore;
# Instalación mysql (npm i mysql);
# levantamos los puertos con XAMPP comando: sudo /opt/lampp/lampp start 
# Conexión base de datos mysql: server/config/dbConnection.js.  
