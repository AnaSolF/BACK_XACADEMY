# npm init para crear packages.
# Instalar npm i express morgan dotenv cors
# Instalar npm i axios express jsonwebtoken passport passport-jwt bcryptjs;
# passport: Para gestionar la autenticación.
# passport-jwt: Para verificar los tokens JWT.
# jsonwebtoken: Para crear y firmar los tokens.
# bcryptjs: Para encriptar las contraseñas de los usuarios.
# Instalar nodemon: npm install -g nodemon. Permite actualización continua del servidor express.
# Levantar el proyecto: Pararse en archivo index.js del directorio raiz(server) y con botón izquierdo abrir terminal integrado. Comando: 
# nodemon index.js
# Archivos enrutadores para api: server/routes/female_playersRouter.js (rutas jugadoras) y archivo male_playersRouter.js (rutas jugadores), server/routes/new_playersRouter.js (nuevos jugadores), server/routes/userRouter.js (para logging).
# SEPARAMOS LA LÓGICA DE LAS RUTAS, entre controllers, service y middlewares.  
# Usamos directorio controllers/index.js para exportar las rutas y controllers/playersController.js para el CRUD usado en todas las rutas (female_players, male_players, news_players, users) filtrar por id, eliminar etc, según querramos usar el CRUD completo o no. Creamos un servicio (carpeta services) para realizar las queries a la base de datos (playerServices.js con las funciones, e index.js para exportarlas a la app).
# Creamos tabla users para logging: columnas nombre, email, password para logging y rutas. Autenticación por JWT.  
# Ver variables de entorno.
# Archivo gitignore;
# Instalación mysql (npm i mysql);
# levantamos los puertos con XAMPP comando: sudo /opt/lampp/lampp start. 
# Archivo de conexión base de datos mysql: server/config/dbConnection.js. 
# VOLUMEN BASE DE DATOS:podman volume create mysql-data;
# Exportamos volumen: podman volume export mysql-data -o mysql-data.tar
# ARCHIVO DE EXPORTACION mysql-data.tar que se envía en el formulario
# Importar volumen= podman volume import mysql-data < mysql-data.tar
# Correr la base de datos desde el archivo .tar
#            podman run -d \
#           --name my-mysql \
#           -e MYSQL_ROOT_PASSWORD= \
#           -e MYSQL_DATABASE=XACADEMY.db \
#           -v mysql-data:/var/lib/mysql \
#           docker.io/mysql:latest




