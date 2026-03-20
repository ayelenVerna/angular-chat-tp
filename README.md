App desarrollada con Angular que simula funcionamiento basico de whatsapp, registro de usuarios, inicio de sesion y envio de mensajes, guardando historial.
Para ejecutar el proyecto:
1-clonar repositorio
2-instalar dependencias: npm install
3-ejecutar:ng serve
4-abrir el navegador de localhost

Fuinciones basicas de la app:
Registro de Usuario
Inicio de Sesión
Persistencia de sesión (localStorage)
Envio de mensajes
Visualizacion de conversaciones
Cierre de Sesion

Su Estructura: codigo estructurado en diferentes carpetas segun funcion.logica separada
Src/App/Components/ (componentes reutilizables de la interfaz usuario)
            chat-input/
            chat-list/
            chat-message/
            chat-window/
            footer/
            header/
        guards/ (controlan acceso a chats sin sesion iniciada)
            auth/
        models/ (definen la interfaces de la app)
            chat/
            message/
        services/ (logica de negocio y manejo de datos)
            auth/
            chat/
        views/ (vistas principales de la app. rutas)
            chats/
            home/
            login/
Flujo de la App:
El usuario accede a la Home o se dirige a login
Al iniciar sesion se guarda la info en localstorage y el usuario accede a la vista Chats
Aca puede seleccionar el chat y enviar mensajes. Recibe mensaje automatico del contacto.
Las rutas protegidas son controladas por el AuthGuard

Se estructuro en base a la separacion de responsabilidades, reutilizacion de componentes, navegacion entre rutas,manejo sentralizado de estado (services) y proteccion de rutas (guards).