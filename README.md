# TC3041 Proyecto Final Primavera 2020

# VendeTuProducto.com
---

##### Integrantes:
1. *Gabriel Schlam Huber* - *A01024122* - *Santa Fe*
2. *Eduardo Harari* - *A01025876* - *Santa Fe*
3. *Diego Alejandro Moreno Acevedo* - *A01022113* - *Santa Fe*
4. *Naji M. A. Saadat* - *A01025599* - *Santa Fe*

---
## 1. Aspectos generales

Las orientaciones del proyecto se encuentran disponibles en la plataforma **Canvas**.

Este documento es una guía sobre qué información debe entregar como parte del proyecto, qué requerimientos técnicos debe cumplir y la estructura que debe seguir para organizar su entrega.

### 1.1 Requerimientos técnicos

A continuación se mencionan los requerimientos técnicos mínimos del proyecto, favor de tenerlos presente para que cumpla con todos.

* El equipo tiene la libertad de elegir las tecnologías de desarrollo a utilizar en el proyecto, sin embargo, debe tener presente que la solución final se deberá ejecutar en una plataforma en la nube. Puede ser  [Google Cloud Platform](https://cloud.google.com/?hl=es), [Azure](https://azure.microsoft.com/en-us/) o [AWS](https://aws.amazon.com/es/free/).
* El proyecto debe utilizar al menos dos modelos de bases de datos diferentes, de los estudiados en el curso.
* La solución debe utilizar una arquitectura de microservicios. Si no tiene conocimiento sobre este tema, le recomiendo la lectura [*Microservices*](https://martinfowler.com/articles/microservices.html) de [Martin Fowler](https://martinfowler.com).
* La arquitectura debe ser modular, escalable, con redundancia y alta disponibilidad.
* La arquitectura deberá estar separada claramente por capas (*frontend*, *backend*, *API RESTful*, datos y almacenamiento).
* Los diferentes componentes del proyecto (*frontend*, *backend*, *API RESTful*, bases de datos, entre otros) deberán ejecutarse sobre contenedores [Docker](https://www.docker.com/) y utilizar [Kubernetes](https://kubernetes.io/) como orquestador.
* Todo el código, *datasets* y la documentación del proyecto debe alojarse en este repositorio de GitHub siguiendo la estructura que aparece a continuación.

### 1.2 Estructura del repositorio
El proyecto debe seguir la siguiente estructura de carpetas:
```
- / 			        # Raíz de todo el proyecto
    - README.md			# Archivo con los datos del proyecto (este archivo)
    - frontend			# Carpeta con la solución del frontend (Web app)
    - backend			# Carpeta con la solución del backend (CMS)
    - api			# Carpeta con la solución de la API
    - datasets		        # Carpeta con los datasets y recursos utilizados (csv, json, audio, videos, entre otros)
    - dbs			# Carpeta con los modelos, catálogos y scripts necesarios para generar las bases de datos
    - docs			# Carpeta con la documentación del proyecto
        - stage_f               # Documentos de la entrega final
        - manuals               # Manuales y guías
```

### 1.3 Documentación  del proyecto

Como parte de la entrega final del proyecto, se debe incluir la siguiente información:

* Justificación de los modelo de *bases de datos* que seleccionaron.
* Descripción del o los *datasets* y las fuentes de información utilizadas.
* Guía de configuración, instalación y despliegue de la solución en la plataforma en la nube  seleccionada.
* Documentación de la API. Puede ver un ejemplo en [Swagger](https://swagger.io/). 
* El código debe estar documentado siguiendo los estándares definidos para el lenguaje de programación seleccionado.

## 2. Descripción del proyecto

Para este proyecto, tuvimos la idea de crear un e-commerce estilo mercado libre en el cual un usuario puede publicar sus productos a la venta, eliminarlos o editarlos. Si un usuario elige un producto especifico, puede agregarlo al carrito y después pagar sus productos con su tarjeta de credito.
El usuario puede hacer las siguientes funciones en la página:
1) Puede revisar su perfil en donde aparece una foto, sus productos a la venta y puede hacer operaciones como eliminar o agregar los mismos.
2) Existe una pestaña en donde el usuario puede publicar lo que este pensando en ese momento, es decir un NewsFeed donde puede publicar cualquier cosa y estas aparecen para todos los usuarios conectados a la página y en el futuro.
3) En la pestaña de home, el usuario puede observar los productos a la venta en la página y de acceso rápido para poder comprarlos.
4) Contiene un carrito en donde todos los productos deseados que pueden ser comprados al mismo tiempo, en la cual puede eliminar alguno que ya no le interese.
5) Al comprar y pagar su pedido, el usuario es redirigido a una página para validar su compra, poniendo si llegó bien o no su pedido, además de algún comentario adicional.
6) En la pestaña de contacto podemos ver información de contacto por si el cliente requiere ayuda o contactar a soporte para cualquier situación.
7) Los usuarios deben crear su cuenta para poder acceder a la página y consumir los servicios.

## 3. Solución

A continuación aparecen desarrollados  los diferentes elementos que forman parte de la solución del proyecto.

### 3.1 Modelos de *bases de datos* utilizados

Para el manejo de los productos, productos por usuario, información del usuario, usuarios, contactos y el newsfeed se usó la Base de Datos de MongoDB. Utilizamos esta base de datos ya que es una que da la oportunidad de escalar el proyecto a futuro, en caso de que se inserte una gran cantidad de productos o de información. Otro motivo por el que se usó esta base de datos es gracias a su rapidez que tiene para mostrar las consultas, lo que puede ayudar al usuario al manejo eficaz de la página.

Para el manejo de sesiónes se utilizó Redis. Esto es para tener las sesiones activas y actualizadas. La ventaja de esto es que Redis ocupa una llave (ID) y un valor para esa llave (E-Mail) con lo cual puede mantener la sesiónes activas, actualizadas y con el tiempo de expiración deseado lo que ayuda a manejar las sesiones con mayor seguridad y eficacia.


### 3.2 Arquitectura de la solución

![Diagrama](datasets/ModeloRelacional.png)

### 3.3 Frontend

Nuestro Fronend tiene la siguiente estructura.

    -frontend                       # Carpeta con la solucion del frontend
        -src                        # Carpeta con los modelos y las rutas
            -app
                -interfaces         # Se encuentran las interfaces para la dirección, producto y el usuario
                -main-components    # Se encuentran los principales componentes usados en la pagina.
                -modules            # Modulos principales del frontend
                    -comprador      # Carpeta con los componentes del carrito, comprar, home y validar-compra
                    -info           # Carpeta con los componentes de Contacto y el NewsFeed   
                    -shared         # Carpeta con los componentes crear-cuenta, log-in y perfil
                    -vendedor       # Carpeta con los componentes agregar y editar
                -services           # Carpeta con los servicios del NewsFeed y del usuario
            -assets                 # Carpeta con las imagenes de Perfiles
            -environments           # Carpeta con environment.ts para pasar a productivo
            -style                  # Carpeta con los archivos .css usados, main.ts y test.ts
        -angular.json               # JSON con las dependencias enlistadas de Angular
        -package-lock.json          # JSON con las dependencias enlistadas de Node
        -package.json               # JSON con las dependencias enlistadas de Node
        -proxy-conf.json            # JSON del proxy
        -tsconfig.app.json          # Carpetas con opciones de compilacion
        -tsconfig.spec.json
        -tslint.json

Como se puede ver nuestro proyecto fue creado con las librerias de Angular y principalmente se usó el lenguaje de Javascript y el TypeScript para la solucion del proyecto.
Como se explica previamente, nuestros modulos principales de la página se pueden ver dentro de la carpeta Modules, donde están situados todos los módulos creados en la página de manera ordenada. Los estilos de la pagina fueron hechos con bootstrap y los CSS se encuentran dentro de la carpeta de Styles.
Por último, en Package.json se enlistan todas las librerias usadas las cuales se explicarán más a detalle en la parte 3.3.3


#### 3.3.1 Lenguaje de programación

Se uso Node.js, Angular, HTML, TypeScript

#### 3.3.2 Framework

Angular

#### 3.3.3 Librerías de funciones o dependencias

    "@angular/animations": "~9.1.3",
    "@angular/cdk": "^9.2.4",
    "@angular/common": "~9.1.3",
    "@angular/compiler": "~9.1.3",
    "@angular/core": "~9.1.3",
    "@angular/forms": "~9.1.3",
    "@angular/platform-browser": "~9.1.3",
    "@angular/platform-browser-dynamic": "~9.1.3",
    "@angular/router": "~9.1.3",
    "@fortawesome/fontawesome-free": "^5.13.0",
    "@types/chart.js": "^2.9.21",
    "angular-bootstrap-md": "^9.3.0",
    "angular-cookies": "^1.7.9",
    "animate.css": "^4.1.0",
    "bootstrap": "4.1.1",
    "chart.js": "^2.5.0",
    "chartjs-plugin-datalabels": "^0.7.0",
    "gulp": "^4.0.2",
    "hammerjs": "^2.0.8",
    "ng2-charts": "^2.3.0",
    "ngx-bootstrap": "^5.6.1",
    "password-hash": "^1.2.2",
    "rxjs": "~6.5.4",
    "tslib": "^1.10.0",
    "zone.js": "~0.10.2"
    "@angular-devkit/build-angular": "~0.901.3",
    "@angular/cli": "~9.1.3",
    "@angular/compiler-cli": "~9.1.3",
    "@angular/language-service": "~9.1.3",
    "@types/jasmine": "~3.5.0",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "^12.12.38",
    "codelyzer": "^5.1.2",
    "jasmine-core": "~3.5.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~5.0.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage-istanbul-reporter": "~2.1.0",
    "karma-jasmine": "~3.0.1",
    "karma-jasmine-html-reporter": "^1.4.2",
    "protractor": "~5.4.3",
    "ts-node": "~8.3.0",
    "tslint": "~6.1.0",
    "typescript": "~3.8.3"

### 3.4 Backend
Nuestro backend tiene la siguiente estructura:
```
    - backend               # Carpeta con la solución del backend
        - app                   # Carpeta con los modelos y rutas del API
            - models            # Carpeta con models de Mongoose para MongoDB
            - routes            # Carpeta con las rutas de la API
        - node_modules          # Carpeta con los módulos por parte de Node
        - package-lock.json     # JSON con las dependencias enlistadas de Node
        - package.json          # JSON con las dependencias enlistadas de Node
        - redis.js              # Archivo de configuración de conexión a Redis
        - server.js             # Archivo donde se corre todo server
        - setupServer.js        # Archivo de configuración del server.js
```

Como se puede mostrar en la estructura anterior, se utilizó principalmente Node, con sus respectivos módulos y dependencias, las cuales se encuentran enlistadas en [package.json](backend/package.json), junto a [package-lock.json](backend/package-lock.json)

Al emplear Node, se utiliza además Javascript, ya que es el lenguaje de programación que utiliza.

Para la Base de Datos principal se utilizó MongoDB, una base de datos No SQL. Y la conexión para insertar los datos base de nuestra aplicación ([users.json](datasets/users.json), [productsUsers.json](datasets/clases.json), [newsFeed.json](datasets/newsFeed.json)) y para comprobar cualquier cambio, se realizó en MongoDB Compass.

Para la conexión de nuestro API, que en este caso es el propio Backend, y MongoDB se utilizó la dependencia Mongoose, la cual facilita mucho la conexión y las operaciones CRUD, por medio de modelos, los cuales están en la carpeta de [models](backend/app/models) (como se aprecia en la estructura anterior).

En este caso. la conexión entre el Frontend y la Base de Datos, junto a sus operaciones, se realiza por medio de las rutas, de nuestro API, implementadas en el archivo [main.js](backend/app/routes/main.js)

Por último, se implementó la Base de Datos Redis, para el manejo de sesiones del lado del Backend.

Por último, se utilizaron las dependencias Body-parser, Cors, Express, Mongoose, entre otras más mencionadas a continuación.

#### 3.4.1 Lenguaje de programación

Javascript

#### 3.4.2 Framework

* Node

* MongoDB Compass

* Redis Lab

#### 3.4.3 Librerías de funciones o dependencias

* Body-parser, versión 1.19.0

* Connect-redis, versión 4.0.4

* Cors, versión 2.8.5

* Express, versión 4.17.1

* Express-session, versión 1.17.1

* Mongoose, versión 5.9.14

* Morgan, versión 1.10.0

* Password-hash, versión 1.2.2

* Redis, versión 3.0.2


### 3.5 API

Nuestra API implementada, como mencionamos anteriormente en la sección de Backend, es parte del mismo. No se utilizó una API por separado, sino se aprovechó la implementación del mismo Backend para inicializar las rutas.

Algo que sí decidimos aplicar fue el tener un endpoint para cada operación realizada, además de correr la API en otro puerto independiente al Frontend.

#### 3.5.1 Lenguaje de programación

Javascript

#### 3.5.2 Framework

* Node

* MongoDB Compass

* Redis Lab

#### 3.5.3 Librerías de funciones o dependencias

* Body-parser, versión 1.19.0

* Connect-redis, versión 4.0.4

* Cors, versión 2.8.5

* Express, versión 4.17.1

* Express-session, versión 1.17.1

* Mongoose, versión 5.9.14

* Morgan, versión 1.10.0

* Password-hash, versión 1.2.2

* Redis, versión 3.0.2

El endpoint raiz que utilizamos fue, antes del despliegue en la nube: http://localhost:8080/api/

A partir del endpoint inicial, implementamos las siguientes rutas:

1. Login
    * **Descripción**:
        * Es una petición para poder hace login. Se accede a MongoDB para verificar las credenciales, y después se crea una sesión en Redis.
    * **URL**:
        * http://localhost:8080/api/login
    * **Verbos HTTP**:
        * POST
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**: 
        ```json
        { 
            "email": "email",
            "password": "password"
        }
        ```
    * **Formato JSON de la respuesta**:
        ```json
        {
            "message": "Login success",
            "key": {
                "_id": "ID",
                "email": "email"
            }
        }
        ```
    * **Códigos de error**:
        * 500: error con MongoDB
        * 400: Error de aunteticación:
            ```json
            { 
                "message": "Usuario o password incorrectos"
            }
            ```
        * 400: Error de datos faltantes:
             ```json
            { 
                "error": "missing fields"
            }
            ```
        * 200: Login exitoso.
2. Logout
    * **Descripción**:
        * Es una petición para poder hace logout. Se destruye la sesión de Redis.
    * **URL**:
        * http://localhost:8080/api/logout
    * **Verbos HTTP**:
        * GET
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**: 
        * N/a
    * **Formato JSON de la respuesta**:
        ```json
        {
            "message": "Logout success",
        }
        ```
    * **Códigos de error**:
        * 200: Logout exitoso.
3. Productos del usuario
    * **Descripción**:
        * Es una petición para insertar un producto nuevo a la venta, por medio del usuario quien lo vende. Se accede a MongoDB para obtener el último ID e ingresar los productos en el usuario correspondiente.
    * **URL**:
        * http://localhost:8080/api/productsUsers
    * **Verbos HTTP**:
        * POST
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**: 
        ```json
        {
            "idUser": "ID user",
            "name": "Nombre producto",
            "condition": "Condición",
            "description": "Descripción del producto",
            "price": "Precio",
            "url": "URL de imagen"
        }
        ```
    * **Formato JSON de la respuesta**:
        ```json
        {
            "mensaje": "Producto agregado",
        }
        ```
    * **Códigos de error**:
        * 500: error con MongoDB o del servidor
        * 404: No encontrado
            ```json
            { 
                "message": "not found"
            }
            ```
        * 400: Error de validación:
             ```json
            { 
                "error": "mensaje del error"
            }
            ```
        * 200: Producto agregado.
4. Todos los productos
    * **Descripción**:
        * Es una petición para obtener todos los productos para desplegarlos en el home. Recibe como parámetro la página actual para implementar el filtrado, la cual se hace for usuario.
    * **URL**:
        * http://localhost:8080/api/allProducts/:page
    * **Verbos HTTP**:
        * GET
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**: 
        * N/A
    * **Formato JSON de la respuesta**:
        ```json
        {
            "products": [
                {
                    "products": [
                        {
                            "idProd": "ID producto",
                            "name": "Nombre producto",
                            "condition": "Condición",
                            "description": "Descripción del producto",
                            "quantity": "Cantidad",
                            "price": "Precio",
                            "url": "URL de imagen"
                        },
                        {
                            "idProd": "ID producto",
                            "name": "Nombre producto",
                            "condition": "Condición",
                            "description": "Descripción del producto",
                            "quantity": "Cantidad",
                            "price": "Precio",
                            "url": "URL de imagen"
                        }
                    ],
                    "_id": "Id Mongo",
                    "idUser": "ID user"
                },
                ...
                ...
            ],
            "currentPage": "página actual",
            "pages": "número de páginas totales"
        }
        ```
    * **Códigos de error**:
        * 500: error con MongoDB o del servidor
        * 200: Productos JSON.
5. Productos por ID propio
    * **Descripción**:
        * Es una petición para realizar diferentes operaciones con un producto en específico, por medio de su ID dado por nosotros, no el de MongoDB. Estas operaciones son:
            * Obtener la información del producto (GET).
            * Actualizar un producto (PUT).
            * Eliminar un producto (DELETE)
    * **URL**:
        * http://localhost:8080/api/products/:id_product
    * **Verbos HTTP**:
        * GET, PUT, DELETE
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**: 
        * El único que tiene formato JSON de solicitud es el PUT:
        ```json
        {
            "name": "Nombre producto",
            "condition": "Condición",
            "description": "Descripción del producto",
            "price": "Precio",
            "url": "URL de imagen"
        }
        ```
    * **Formato JSON de la respuesta**:
        * GET:
            ```json
            {
                "idProd": "ID producto",
                "name": "Nombre producto",
                "condition": "Condición",
                "description": "Descripción del producto",
                "quantity": "Cantidad",
                "price": "Precio",
                "url": "URL de imagen"
            }
            ```
        * PUT:
            ```json
            {
                "mensaje": "Producto actualizado",
            }
            ```
        * DELETE:
            ```json
            {
                "mensaje": "Producto eliminado",
            }
            ```
    * **Códigos de error**:
        * 404: No encontrado
            ```json
            { 
                "message": "not found"
            }
            ```
        * 400: Error de datos faltantes:
            ```json
            { 
                "error": "missing fields"
            }
            ```
        * 200: Acción realizada.
6. Productos por Usuario
    * **Descripción**:
        * Es una petición para obtener los productos en venta que tiene un usuario en específico. Hace una agregación para acceder a los productos, además de regresar los datos principales del usuario para el perfil, siendo la foto de perfil, nombre y apellidos.
    * **URL**:
        * http://localhost:8080/api/productsUsers/:id_user
    * **Verbos HTTP**:
        * GET
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**:
        * N/A
    * **Formato JSON de la respuesta**:
        ```json
        {
            "_id": "ID de MongoDB",
            "idUser": "ID user",
            "products": [
                {
                    "idProd": "ID producto",
                    "name": "Nombre producto",
                    "condition": "Condición",
                    "description": "Descripción del producto",
                    "quantity": "Cantidad",
                    "price": "Precio",
                    "url": "URL de imagen"
                },
                ...
                ...
            ],
            "user": {
                "profile_pic": "URL de imagen de perfil",
                "name": "nombre",
                "lname": "apellidos"
            }
        }
        ```
    * **Códigos de error**:
        * 404: No encontrado
            ```json
            { 
                "message": "not found"
            }
            ```
        * 200: JSON Resultado.
7. News Feed
    * **Descripción**:
        * Es una petición para realizar diferentes operaciones con los posts que están en la colección NewsFeed
            * Obtener todos los posts, junto a los datos principales del usuario para el perfil, siendo la foto de perfil, nombre y apellidos. (GET).
            * Postear algo nuevo (POST).
    * **URL**:
        * http://localhost:8080/api/newsFeed
    * **Verbos HTTP**:
        * GET, POST
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**:
        * El único que tiene formato JSON de solicitud es el POST:
        ```json
        {
            "idUser": "ID user",
            "message": "post",
        }
        ```
    * **Formato JSON de la respuesta**:
        * GET:
            ```json
            {
                "_id": "ID MongoDB",
                "message": "post",
                "user": {
                    "profile_pic": "URL de imagen de perfil",
                    "name": "nombre",
                    "lname": "apellidos"
                },
                "time": "fecha y hora del post"
            }
            ...
            ...
            ```
        * POST:
            ```json
            {
                "mensaje": "Post creado",
            }
            ```
    * **Códigos de error**:
        * 400: Error de datos faltantes:
            ```json
            { 
                "error": "missing fields"
            }
            ```
        * 200: Acción realizada.
8. Usuarios
    * **Descripción**:
        * Es una petición para realizar diferentes operaciones con los usuarios
            * Obtener la información de todos los usuarios, excluyendo el password hasheado, por seguridad (GET).
            * Crear un usuario nuevo, accediendo a la colección users para obtener el último ID e ingresar un usuario nuevo (POST).
    * **URL**:
        * http://localhost:8080/api/users
    * **Verbos HTTP**:
        * GET, POST
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**:
        * El único que tiene formato JSON de solicitud es el POST:
        ```json
        {
            "profile_pic": "URL de imagen de perfil",
            "name": "nombre",
            "lname": "apellidos",
            "dBirth": "fecha de nacimiento",
            "country": "país",
            "email": "email",
            "password": "password hasheada"
        }
        ```
    * **Formato JSON de la respuesta**:
        * GET:
            ```json
            {
                "idUser": "ID user",
                "profile_pic": "URL de imagen de perfil",
                "name": "nombre",
                "lname": "apellidos",
                "dBirth": "fecha de nacimiento",
                "country": "país",
                "email": "email"
            }
            ...
            ...
            ```
        * POST:
            ```json
            {
                "mensaje": "Usuario creado",
            }
            ```
    * **Códigos de error**:
        * 500: error con MongoDB o del servidor
        * 400: Error de datos faltantes:
            ```json
            { 
                "error": "missing fields"
            }
            ```
        * 200: Acción realizada.
9. Información del usuario por su ID
    * **Descripción**:
        * Es una petición para realizar diferentes operaciones con un usuario en específico, por medio de su ID dado por nosotros, no el de MongoDB. Estas operaciones son:
            * Obtener la información del usuario (GET).
            * Actualizar un usuario (PUT).
            * Eliminar un usuario, en el cual primero se elimina ese usuario con susu productos en venta, y después la información del usuario (DELETE).
    * **URL**:
        * http://localhost:8080/api/users/:id_user
    * **Verbos HTTP**:
        * GET, PUT, DELETE
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**:
        * El único que tiene formato JSON de solicitud es el PUT:
        ```json
        {
            "profile_pic": "URL de imagen de perfil",
            "name": "nombre",
            "lname": "apellidos",
            "dBirth": "fecha de nacimiento",
            "country": "país",
            "email": "email"
        }
        ```
    * **Formato JSON de la respuesta**:
        * GET:
            ```json
            {
                "idUser": "ID user",
                "profile_pic": "URL de imagen de perfil",
                "name": "nombre",
                "lname": "apellidos",
                "dBirth": "fecha de nacimiento",
                "country": "país",
                "email": "email"
            }
            ```
        * PUT:
            ```json
            {
                "mensaje": "Usuario actualizado",
            }
            ```
        * DELETE:
            ```json
            {
                "mensaje": "Usuario eliminado",
            }
            ```
    * **Códigos de error**:
        * 404: No encontrado
            ```json
            { 
                "message": "not found"
            }
            ```
        * 400: Error de datos faltantes:
            ```json
            { 
                "error": "missing fields"
            }
            ```
        * 200: Acción realizada.
10. Todos los carritos
    * **Descripción**:
        * Es una petición para obtener todos los carritos actuales
    * **URL**:
        * http://localhost:8080/api/carrito
    * **Verbos HTTP**:
        * GET
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**:
        * N/A
    * **Formato JSON de la respuesta**:
        ```json
        [
            {
                "products": [
                    {
                        "idProd": "ID producto",
                        "name": "Nombre producto",
                        "condition": "Condición",
                        "description": "Descripción del producto",
                        "quantity": "Cantidad",
                        "price": "Precio",
                        "url": "URL de imagen"
                    },
                    ...
                    ...
                ],
                "_id": "ID MongoDB",
                "idUser": "ID User"
            }
            ...
            ...
        ]
        ```
    * **Códigos de error**:
        * 500: error con MongoDB o del servidor
        * 200: Carrito JSON.
11. Operaciones con carrito por ID User
    * **Descripción**:
        * Es una petición para realizar diferentes operaciones con un carrito de un usuario en específico, por medio de su ID dado por nosotros, no el de MongoDB. Estas operaciones son:
            * Obtener el carrito del usuario (GET).
            * Agregar un producto al carrito del usuario, en la cual se valida si ya está el producto en el carrito para no duplicarlo (POST).
            * Eliminar un producto del carrito del usuario (DELETE).
    * **URL**:
        * http://localhost:8080/api/carrito/:id_user
    * **Verbos HTTP**:
        * GET, POST, DELETE
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**:
        * El único que tiene formato JSON de solicitud es el POST:
        ```json
        {
            "idProd": "ID del producto"
        }
        ```
    * **Formato JSON de la respuesta**:
        * GET:
            ```json
            [
                {
                    "products": [
                        {
                            "idProd": "ID producto",
                            "name": "Nombre producto",
                            "condition": "Condición",
                            "description": "Descripción del producto",
                            "quantity": "Cantidad",
                            "price": "Precio",
                            "url": "URL de imagen"
                        },
                        ...
                        ...
                    ],
                    "_id": "ID MongoDB",
                    "idUser": "ID User"
                }
            ]
            ```
        * POST:
            ```json
            {
                "mensaje": "Producto agregado al carrito",
            }
            ```
        * DELETE:
            ```json
            {
                "mensaje": "Producto eliminado del carrito"",
            }
            ```
    * **Códigos de error**:
        * 404: No encontrado
            ```json
            { 
                "message": "not found"
            }
            ```
        * 400: Error de datos faltantes:
            ```json
            { 
                "error": "missing fields"
            }
            ```
        * 400: Error de producto ya en el carrito:
            ```json
            { 
                "message": "Producto ya en el carrito"
            }
            ```
        * 200: Acción realizada.
12. Todos las compras
    * **Descripción**:
        * Es una petición para obtener todos las compras
    * **URL**:
        * http://localhost:8080/api/compra
    * **Verbos HTTP**:
        * GET
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**:
        * N/A
    * **Formato JSON de la respuesta**:
        ```json
        [
            {
                "products": [
                    {
                        "idProd": "ID producto",
                        "name": "Nombre producto",
                        "condition": "Condición",
                        "description": "Descripción del producto",
                        "quantity": "Cantidad",
                        "price": "Precio",
                        "url": "URL de imagen"
                    },
                    ...
                ],
                "address": [
                    {
                        "street": "calle",
                        "country": "país",
                        "state": "estado",
                        "zip": "CP",
                        "apartment": "apartamento (opcional)"
                    }
                ],
                 "_id": "ID MongoDB",
                "idUser": "ID User",
                "validation": "boleano",
                "comment": "comentario de la entrega (opcional)"

            },
            ...
            ...
        ```
    * **Códigos de error**:
        * 500: error con MongoDB o del servidor
        * 200: Compra JSON.
13. Operaciones con compra por ID User
    * **Descripción**:
        * Es una petición para realizar diferentes operaciones con una compra de un usuario en específico, por medio de su ID dado por nosotros, no el de MongoDB. Estas operaciones son:
            * Obtener la última compra del usuario (GET).
            * Comprar los productos del carrito del usuario, en el cual se eliminan los productos del carrito y del inventario (POST).
    * **URL**:
        * http://localhost:8080/api/compra/:id_user
    * **Verbos HTTP**:
        * GET, POST
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**:
        * El único que tiene formato JSON de solicitud es el POST:
        ```json
        {
            "address": "Objeto dirección"
        }
        ```
    * **Formato JSON de la respuesta**:
        * GET:
            ```json
            [
                {
                    "products": [
                        {
                            "idProd": "ID producto",
                            "name": "Nombre producto",
                            "condition": "Condición",
                            "description": "Descripción del producto",
                            "quantity": "Cantidad",
                            "price": "Precio",
                            "url": "URL de imagen"
                        },
                        ...
                    ],
                    "address": [
                        {
                            "street": "calle",
                            "country": "país",
                            "state": "estado",
                            "zip": "CP",
                            "apartment": "apartamento (opcional)"
                        }
                    ],
                    "_id": "ID MongoDB",
                    "idUser": "ID User",
                    "validation": "boleano",
                    "comment": "comentario de la entrega (opcional)"

                }
            ]
            ```
        * POST:
            ```json
            {
                "mensaje": "Compra creada con exito",
            }
            ```
    * **Códigos de error**:
        * 404: No encontrado
            ```json
            { 
                "message": "not found"
            }
            ```
        * 200: Acción realizada.
14. Validación de compra
    * **Descripción**:
        * Es una petición para validar despues de la última compra, cómo estuvo la misma.
    * **URL**:
        * http://localhost:8080/api/validarCompra/:id_user
    * **Verbos HTTP**:
        * PUT
    * **Headers**:
        * N/A
    * **Formato JSON del cuerpo de la solicitud**:
        * El único que tiene formato JSON de solicitud es el POST:
        ```json
        {
            "validation": "booleano",
            "comment": "comentario de la entrega (opcional)"
        }
        ```
    * **Formato JSON de la respuesta**:
        ```json
        {
            "mensaje": "Validacion de compra agregada",
        }
        ```
    * **Códigos de error**:
        * 500: error con MongoDB o del servidor
        * 200: Validación realizada.

## 3.6 Pasos a seguir para utilizar el proyecto

1. Clonar el repositorio en la carpeta deseada.
git clone https://github.com/tec-csf/tc3041-pf-primavera-2020-equipo05.git
2. Abrir la carpeta en la terminal y seguir los siguientes comandos.
cd \tc3041-pf-primavera-2020-equipo05
cd frontend
cd src
3. instalamos todas las dependencias de node en el frontend copiando el siguiente comando
\tc3041-pf-primavera-2020-equipo05\frontend\src>npm install
4. Al terminar la instalacion, volvemos a ir a la carpeta de \tc3041-pf-primavera-2020-equipo05\
5. Ahora instalaremos las dependencias para el backend con el siguiente comando
cd backend
\tc3041-pf-primavera-2020-equipo05\backend>npm install
6. Por último, regresamos a la ruta \tc3041-pf-primavera-2020-equipo05\frontend\src> y pondremos el siguiente comando
\tc3041-pf-primavera-2020-equipo05\frontend\src>ng serve --open

## 4. Referencias

*[Incluya aquí las referencias a sitios de interés, datasets y cualquier otra información que haya utilizado para realizar el proyecto y que le puedan ser de utilidad a otras personas que quieran usarlo como referencia]*
