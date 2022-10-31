# Hito 0: Descripción del problema a resolver usando correctamente git y GitHub
#### Creación y documentación del repositorio de StockManager
En este hito se detallarán todos los pasos necesarios para crear y configurar correctamente un repositorio git, desde el cuál se llevará el control de versiones del desarrollo del proyecto, así cómo se realizarán las entregas de la asignatura de Cloud Computing.  

Ya tenía cuenta creada en GitHub y personalizada prácticamente por completo para utilizar la plataforma a modo personal, a continuación podremos información sobre cómo crear un repositorio, con su correspondiente licencia, como configurar el par de claves publica/privada SSH necesarias, como configurar el perfil, etc. Basado en mi experiencia personal.
## Creación del repositorio
En este apartado se verá cómo crear un repositorio desde la interfaz gráfica de GitHub.
#### Home de creación de repositorios
Nada más iniciar sesión, podemos ver el home de GitHub, en el cuál podemos navegar entre diversas opciones, y a la izquierda podemos ver un botón verde para crear un repositorio.  

![Create Repository Home](/assets/hito0/CreateRepositoryHome.png)
#### Creación de nuestro repositorio
Escogemos el usuario (Porque podemos usar cuentas de manera simultanea), y un nombre para el repositorio, en mi caso he escogido StockManager, que será también el nombre del proyecto y porque es algo cercano al problema que se quiere solucionar. Introducimos opcionalmente una descripción de lo que tratará el repositorio y la privacidad del mismo (Privado para proyectos personales o Público para proyectos compartidos), en este caso será público permitiendo su consulta y corrección.  
Añadimos el README.md por defecto y no marcamos la creación de ninguna plantilla para el archivo gitignore ([Archivo gitignore](#item2)). 
Y finalmente escogemos una licencia de derechos para nuestro proyecto, en mi caso he escogido la licencia MIT ([Selección de Licencia](#item1)) y creamos el repositorio.

![Create Repository Creation](/assets/hito0/CreateRepositoryCreation.png)
#### Aspecto inicial del repositorio
Una vez creado el repositorio, podemos acceder a él y tendremos un repositorio vacío, con el README.md y la licencia, listo para empezar a trabajar.

![Create Repository Initial Aspect](/assets/hito0/CreateRepositoryInitialAspect.png)
#### Selección de licencia <a name="item1"></a>
La licencia de un repositorio de GitHub indica qué se puede hacer con ese repositorio, es decir, bajo qué condiciones se puede utilizar o distribuir entre otras cosas.  
Como podemos ver en la creación del repositorio, a la hora de elegir la licencia se nos ofrece ayuda como Aprende más o Learn more, lo cuál nos redirige a [Choose a License](https://choosealicense.com/), un sitio web que nos nos otorgará detalles de las diferentes licencias disponibles. Siguiendo estas directivas, como se pretende hacer un proyecto sencillo individual, finalmente escogí la licencia MIT, que es permisiva, con derechos sencillos de copyright y flexible para este software.
#### Creación del archivo gitignore <a name="item2"></a>
El archivo gitignore es aquel que suele estar presente como buena práctica en la mayoría de repositorios de GitHub, y sirve para decir qué tipo de archivos se ignorarán cuando se haga push de nuevas versiones o características.  
Para la creación de mi archivo .gitignore, y como GitHub no proporciona ninguna plantilla por defecto para trabajar con React, he buscado información por internet y plantillas de archivos de este tipo orientados al lenguaje que voy a usar y finalmente he llegado a la conclusión de que el [archivo .gitignore de Facebook](https://github.com/facebook/react/blob/main/.gitignore) es el más completo y se utilizan copias de él en muchos githubs de react, por tanto, inicialmente voy a utilizarlo como plantilla y será modificado con el avance del proyecto.

## Creación del par de claves SSH pública/privada
El par de claves SSH son como su propio nombre indica, dos claves o credenciales para mantener una comunicación segura entre el usuario y el servidor; mediante un cliente SSH se comparte la clave pública para cifrar los datos que serán solo descifrados con la clave privada que solo nosotros poseemos para que sean inaccesibles por terceros.  

En la siguiente figura se puede apreciar el uso del comando **ssh-keygen -t ed25519 -C "victormafe18@correo.ugr.es"**, este comando significa lo siguiente:
1. ssh-keygen es para la generación de claves ssh.
2. -t Indica el algoritmo utilizado para crear las claves de encriptación.
3. -C Se utiliza para identificar la opración de creación de claves con una etiqueta (En este caso mi correo electrónico).

![Ssh Keys Command](/assets/hito0/SshKeysCommand.png)
Una vez ejecutado este comando, introducimos el nombre y la ruta de archivo donde se almacenará la clave localmente, y si queremos, una contraseña como seguridad adicional, tras esto, tendremos las claves creadas localmente, ahora solo queda enlazarlas al repositorio.  

Enlazar la clave creada a nuestro repositorio es muy sencillo, debemos ir a la configuración en la interfaz gráfica de GitHub y al apartado de claves SSH y GPG y añadir una nueva clave:

![Ssh Keys SSH and GPG Settings Page](/assets/hito0/SshKeysAdd.png)
Después simplemente añadimos un nombre para la clave y pegamos la clave pública generada anteriormente (Podemos acceder a ella buscando el archivo generado, en mi caso stockmanagersshkeys.pub).

![Ssh Keys Creation Settings](/assets/hito0/SshKeysCreation.png)
Y tendríamos las claves SSH listas y funcionando.

## Ajustes de Perfil de Usuario
Si accedemos desde la interfaz de GitHub a los ajustes del perfil público de la cuenta, se pueden añadir todos los detalles necesarios, en este caso serán nombre y apellidos, imagen de perfil, correo electrónico, localidad y compañía (Universidad de Granada).

![User Settings](/assets/hito0/UserSettings.png)

## Activación del segundo factor de autenticación
El segundo factor de autenticación sirve para aumentar la seguridad de la cuenta añadiendo una segunda verificación para acceder a la cuenta.  

Si vamos a los ajustes de usuario en la interfaz gráfica de GitHub, al apartado de contraseñas y autenticación, podemos ver el apartado de activación del segundo factor de autenticación:

![Two Factor Authentication Enable Settings](/assets/hito0/TwoFactorAuthenticationEnable.png)
Una vez dentro veremos una serie de pasos que, tras completarlos (No se muestran por motivos de privacidad) y que en mi caso consistían en introducir mi móvil y recibir un código por SMS, se activará el segundo factor de autenticación.

![Two Factor Authentication Stepper](/assets/hito0/TwoFactorAuthenticationStepper.png)
