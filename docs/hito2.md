# Hito 2: Tests
En este hito se realizará el conjunto de tests desarrollados para StockManager, gestionados con un gestor de tareas necesario para su automatización. Se escogerá una biblioteca de aserciones, un marco de pruebas y se detallarán otros avances del proyecto.

#### Índice de contenidos del hito 2
- [Gestor de tareas Gulp](#item1)

- [Entorno de tests y biblioteca de aserciones](#item2)

## Gestor de tareas Gulp <a name="item1"></a>
#### ¿Qué es Gulp?
Gulp es una herramienta flexible usada en el desarrollo de software con javascript, dedicada a la composición de cauces de ejecución lógicos y automatizados a partir de tareas repetitivas.

#### Instalación de Gulp 
La instalación de Gulp es sencilla pero requiere de unos pasos iniciales:
- Instalación global de Gulp en el sistema con `npm install -g gulp`.
- Instalación de las dependencias de Gulp en nuestro proyecto, en la raíz del proyecto (Y teniendo previamente creado el archivo package.json generado automáticamente con la creación de una aplicación de react), ejecutamos el comando `npm install --save-dev gulp` (Incluimos `-dev` para indicar que Gulp solo será una dependencia de desarrollo, que no será incluida en producción.
-Creación del archivo de configuración de Gulp [gulpfile.js](/src/gulpfile.js)

#### Configuración y uso de Gulp
Una vez instalado y preparado el entorno para el uso del gestor de tareas Gulp, vamos a implementar su funcionamiento en el gulpfile.

Las funciones principales de Gulp son las siguientes:
- gulp.task(): Para definir tareas.
- gulp.src(): De dónde gulp toma los archivos con los que trabajará.
- gulp.dest(): Dónde gulp dejará los archivos una vez procesados con su tarea indicada.
- gulp.watch(): Supervisa un directorio y cuando encuentra un cambio ejecuta la tarea asignada.

Mediante el uso de estas funciones, se han creado la tarea **default**, que ejecutará todas las tareas del gulpfile recursivamente, **mochaTests** que ejecutará todos los tests de mocha detallados en la sección [entorno de tests](#item3), y otros tests de ejemplo.

-La tarea **default** utiliza la función `gulp.series()` para ejecutar otras tareas en cadena.

```
gulp.task('default', async () => {
    console.log("Running all tests: ");
    return gulp.series('exampleTask', 'mochaTests')();
});
```

-La tarea **mochaTests**

En el archivo [package.json](/src/package.json) se ha sustituido el valor por defecto de la variable test por `gulp default`, para que se ejecute la tarea por defecto.

Nota: En mi caso, que utilizo el sistema operativo de Windows, tuve que ejecutar en una terminal como administrador el comando `Set-ExecutionPolicy Unrestricted`, puesto que gulp utiliza un script para la ejecución de tests y no están permitidos por defecto.

## Entorno de tests y biblioteca de aserciones <a name="item2"></a>
#### Entorno de tests <a name="item3"></a>
