# Hito 2: Tests :page_facing_up:
En este hito se realizará el conjunto de tests desarrollados para StockManager, gestionados con un gestor de tareas necesario para su automatización. Se escogerá una biblioteca de aserciones, un marco de pruebas y se detallarán otros avances del proyecto.

#### Índice de contenidos del hito 2
- [Gestor de tareas Gulp](#item1)

- [Entorno de tests y biblioteca de aserciones](#item2)

## Gestor de tareas Gulp :cup_with_straw: <a name="item1"></a>
#### ¿Qué es Gulp? :question:
Gulp es una herramienta flexible usada en el desarrollo de software con javascript, dedicada a la composición de cauces de ejecución lógicos y automatizados a partir de tareas repetitivas.

#### Instalación de Gulp :arrow_down:
La instalación de Gulp es sencilla pero requiere de unos pasos iniciales:
- Instalación global de Gulp en el sistema con `npm install -g gulp`.
- Instalación de las dependencias de Gulp en nuestro proyecto, en la raíz del proyecto (Y teniendo previamente creado el archivo package.json generado automáticamente con la creación de una aplicación de react), ejecutamos el comando `npm install --save-dev gulp` (Incluimos `-dev` para indicar que Gulp solo será una dependencia de desarrollo, que no será incluida en producción.
-Creación del archivo de configuración de Gulp [gulpfile.js](/src/gulpfile.js)

#### Configuración y uso de Gulp :gear:
Una vez instalado y preparado el entorno para el uso del gestor de tareas Gulp, vamos a implementar su funcionamiento en el gulpfile.

Para ejecutar las tareas de Gulp se puede utilizar el comando `gulp nombreTarea` o `npm test` para ejecutar la tarea por defecto.

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

-La tarea **mochaTests** mediante el uso de src especifica la ruta del archivo de tests de mocha y utiliza la función `pipe()`, esencial en el manejo de tareas con Gulp, lo cuál crea un cauce de ejecución que pone en una cola la tarea para que se ejecute independientemente de otras. Cabe recalcar que se usa la función `cb()` para devolver un callback vacío y avisar a Gulp del fin de ejecución de una tarea, esta llamada se hará al final de cada tarea.

```
gulp.task('mochaTests', (cb) => {
    gulp.src(['test/test-*.js'], { read: false }).pipe(mocha({
        reporter: 'spec',
    }));
    cb();
});
```

En el archivo [package.json](/src/package.json) se ha sustituido el valor por defecto de la variable test por `gulp default`, para que se ejecute la tarea por defecto.

Nota: En mi caso, que utilizo el sistema operativo de Windows, tuve que ejecutar en una terminal como administrador el comando `Set-ExecutionPolicy Unrestricted`, puesto que gulp utiliza un script para la ejecución de tests y no están permitidos por defecto.

## Entorno de tests y biblioteca de aserciones :test_tube: <a name="item2"></a>
#### Entorno de tests Mocha :coffee: <a name="item3"></a>
Mocha es un framework asociado al lenguaje JavaScript generalmente ejecutado en Node.js dedicado a hacer pruebas o tests síncronos y asíncronos de manera sencilla, por eso he optado por este entorno.

Requerimos de una [biblioteca de aserciones](#item4) para realizar las pruebas que será detallada en la siguiente sección.

La estructura por defecto de una tarea en mocha consiste en utilizar la función `describe()`, la cuál indica la descripción de un test completo y lanza su ejecución, envolviendo a funciones `it()` que serían cada una de las pruebas ejecutadas en un test, con la descripción de esa prueba.

Se han creado tests para comprobar los valores de una inserción por defecto en la base de datos. Un test de ejemplo podría ser:

```
describe("Example Function: ", () => {
        it("Check the returned value using: assert.equal(value,'value'): ", () => {
            const comparison = "ComparisonString";
            assert.equal(comparison, "ComparisonString");
        });
});
```

#### Biblioteca de aserciones Chai :tea: <a name="item4"></a>
Chai es una librería de aserciones directamente relacionada con Mocha, por eso, como están pensadas para usarse juntas, he optado por utilizarlas.

Chai utiliza assert, expect y should para realizar las aserciones, en mi caso, y como se puede ver en el test de ejemplo, he optado por usar assert, son muy similares y prácticamente solo varía la sintaxis entre ellas, el uso de assert era más intuitivo a mi parecer.
