# Hito 1: Concretando y planificando el proyecto
En este hito se pretende definir la base para StockManager, diseñando la estructura principal de historias de usuario (HUs), así como definir las vistas, estructuras de datos y componentes necesarios para el funcionamiento del mismo. Se especificará también lo necesario para el uso y ejecución del código.

#### Índice de contenidos del hito 1
- [Historias de usuario](#item1)

- [Hitos de desarrollo](#item2)

- [Creación y ejecución del proyecto](#item3)

- [Implementación de la base del proyecto](#item4)

## Historias de usuario <a name="item1"></a>
#### Creación de una historia de usuario
Para crear una historia de usuario (HU) desde la interfaz de github debemos irnos a la pestaña de issues y allí crear uno nuevo, esas serán las llamadas historias de usuario, que se crean como se muestra en la siguiente figura que contiene la representación de una historia de usuario genérica.

![User History Creation](/assets/hito1/HUCreation.png)
#### Historias de Usuario
Las historias de usuario iniciales marcadas para el desarrollo de StockManager son las siguientes:
- Historia de Usuario 1.0: [[HU1.0] Como usuario de la plataforma, quiero tener mis datos online para poder gestionar el stock de todos mis negocios](https://github.com/victormafe18/StockManager/issues/1)
- Historia de Usuario 2.0: [[HU2.0] Como usuario de la plataforma, quiero poder gestionar el stock para mantenerlo actualizado](https://github.com/victormafe18/StockManager/issues/2)
- Historia de Usuario 3.0: [[HU3.0] Como usuario de la plataforma, quiero poder acceder solo a mis datos para comprobar mi stock](https://github.com/victormafe18/StockManager/issues/3)
- Historia de Usuario 4.0: [[HU4.0] Como usuario de la plataforma que no ha creado un stock, quiero poder pedir acceso y acceder a un stock para poder utilizar los stocks compartidos](https://github.com/victormafe18/StockManager/issues/4)

Las cuales tendrán otras subhistorias que podremos encontrar en el apartado de [Historias de Usuario](https://github.com/victormafe18/StockManager/issues).

## Hitos de desarrollo <a name="item2"></a>
Los hitos de desarrollo asociados al proyecto y a las diferentes historias de usuario se pueden encontrar en la sección de [milestones](https://github.com/victormafe18/StockManager/milestones).

## Creación y ejecución del proyecto <a name="item3"></a>
Lo principal es tener instalado React y Node.js en el sistema.

Con el comando `npx create-react-app stockmanager` (Siendo ''stockmanager'' el nombre de la aplicación que se desee crear), se crea la estructura básica de carpetas, que contendrá el App.js y el index.js que se utiliza para gestionar la ejecución de la aplicación completa sería el siguiente

Usando en la raíz del proyecto `npm run start` podemos lanzar la aplicación en el servidor local, por defecto localhost:3000.

Para analizar el estado de nuestra aplicación en ejecución, se recomienda la extensión de navegador [React Developer Tools](https://beta.reactjs.org/learn/react-developer-tools).

Se han instalado con el comando `npm install @mui/material @emotion/react @emotion/styled @mui/icons-material` las dependencias necesarias de [Material UI](https://mui.com/), que es una librería de código abierto que se utilizará para personalizar el diseño de la página.

Finalmente, con `npm install react-router-dom@6` se instala react router, que se utilizará para gestionar las rutas de nuestra aplicación web.

## Implementación de la base del proyecto <a name="item4"></a>

Una vez creado el proyecto por defecto implementado en la [sección 3](#item3), nos quedan dos achivos útiles:
- El índice [index.js](/src/src/index.js) donde se ha creado la renderización de la aplicación.
- Y la aplicación [App.js](/src/src/App.js) en el cuál se han utilizado componentes de react router para configurar el componente distribuidor de rutas de nuestra aplicación **Pathing** (Detallado más adelante).

Se han implementado los siguientes componentes:

El componente **Pathing** en el archivo [routes.js](/src/src/data/routes/routes.js) contiene un array routesList con objetos sencillos de 3 variables:
- **path**, que contiene la ruta que devolverá un componente concreto. 
- **type**, que indicará si la ruta es pública o privada (Para proteger rutas en futuras implementaciones).
- **view**, que indicará la vista que se debe cargar en dicha ruta.

Este componente devuelve un mapeo del vector routesList que hará efectivas todas las rutas con sus vistas correspondientes.

Como base de funcionamiento se han creado otros dos componentes:
- [StockManager](/src/src/components/StockManager.jsx) que tendrá la funcionalidad principal, coordinando a otros componentes para ofrecerla (Hasta el momento solo tiene botones sin funcionalidad y renderiza al componente CRUDCreator).
- [CRUDCreator](/src/src/components/CRUDCreator.jsx), que recibe como parámetro un fichero xls o xlsx para en un futuro traducirlo en un map de pares clave-valor con el contenido del mismo, para poder trabajar y clasificar los datos.

Por el momento solo tenemos la vista [StockManagerView](/src/src/views/StockManagerView.js), la cual contiene al componente StockManager.
