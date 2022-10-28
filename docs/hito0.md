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
Como podemos ver en la creación del repositorio, a la hora de elegir la licencia se nos ofrece ayuda como Aprende más o Learn more, lo cuál nos redirige a [Choose a License](https://choosealicense.com/), un sitio web que nos nos otorgará detalles de las diferentes licencias disponibles. Siguiendo estas directivas, como se pretende hacer un proyecto sencillo individual, finalmente escogí la licencia MIT, que es permisiva, con derechos sencillos de copyright y flexible para este software.
#### Creación del archivo gitignore <a name="item2"></a>
