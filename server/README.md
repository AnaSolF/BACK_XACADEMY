# npm init para crear packages.
# Instalar npm i express morgan dotenv cors
# Instalar npm i axios express jsonwebtoken passport passport-jwt bcryptjs;
# passport: Para gestionar la autenticación.
# passport-jwt: Para verificar los tokens JWT.
# jsonwebtoken: Para crear y firmar los tokens.
# bcryptjs: Para encriptar las contraseñas de los usuarios.
# Instalar nodemon: npm install -g nodemon. Permite actualización continua del servidor express.
# Servidor nodemon: Pararse en archivo index.js del directorio raiz(server) y con botón izquierdo abrir terminal integrado. Comando: nodemon index.js
# Archivos enrutadores para api: server/routes/female_playersRouter.js (rutas jugadoras) y archivo male_playersRouter.js (rutas jugadores),  server/routes/new_playersRouter.js (nuevos jugadores), server/routes/userRouter.js (para logging).
# SEPARAMOS LA LÓGICA DE LAS RUTAS, entre controllers y service.  
# Usamos directorio controllers/index.js para exportar las rutas y controllers/playersController.js para el CRUD usado en todas las rutas (female_players, male_players, news_players, users) filtrar por id, eliminar etc, según querramos usar el CRUD completo o no. Creamos un servicio (carpeta services) para realizar las queries a la base de datos (playerServices.js con las funciones, e index.js para exportarlas a la app).
# Archivo gitignore;
# Instalación mysql (npm i mysql);
# levantamos los puertos con XAMPP comando: sudo /opt/lampp/lampp start. 
# Conexión base de datos mysql: server/config/dbConnection.js. 
# Creamos tabla users para logging: columnas nombre, email, password para logging y rutas. Autenticación por JWT.  
# Ver variables de entorno.

