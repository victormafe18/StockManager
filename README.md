# StockManager :package:
#### Proyecto de la asignatura de Cloud Computing del Máster en Ingeniería Informática de la Universidad de Granada, por el alumno Víctor Machado Fernández
Software de gestión de stock compartido entre negocios, indenpendientemente del tipo de negocio.
## Descripción del Proyecto :page_facing_up:
StockManager es la solución software que necesitas para administrar un stock compartido para una cadena de negocios.

La idea es mediante el uso de programación basada en componentes, crear un sistema independiente y libre de contexto que mediante el uso de componentes software reutilizables, implemente un **software capaz de montar el despliegue y el almacenamiento de datos independientemente del modelo de negocio sobre el que trabajemos.**  
Solo requeriría una entrada de datos estandarizada y crearía la estructura de almacenamiento, además de mostrar los datos en un despliegue sencillo.

#### Implementación de Ejemplo
Un ejemplo claro sería la idea inicial que me hizo decidirme por el desarrollo de esta solución software:  
Supongamos el caso de una cadena de tiendas de venta de componentes para ordenadores de primera o segunda mano, deben especificar el contenido actual de su stock global a todas las tiendas de la cadena en un archivo estandarizado.  
La idea inicialmente es diseñar un conjunto de componentes capaz de traducir documentos de tipo XLS o XLSX, los cuales contendrán variables que serían las columnas como:
- Precio del componente
- Peso
- Fecha de salida
- Primera o segunda mano
- ...

Y entradas de la tabla que serían las filas:
- Gráfica GeForce MX150 (Nombre)
- NVidia (Marca)
- 2GB (Memoria)
- GDDR5 a 6GHz (Tipo de Memoria)
- ...

Estos archivos pueden tener diferente número de columnas o filas según la necesidad del usuario, y de este archivo se obtendrán todos los datos necesarios para su almacenamiento en la nube y el despliegue de esos mismos datos en una cómoda interfaz para el cliente, consiguiendo así que se pueda visualizar y administrar el stock compartido de los negocios solamente accediendo al software.
## Desarrollo del Proyecto en Hitos :checkered_flag:
### Hito 0: Descripción del problema a resolver usando correctamente git y GitHub :zero:
Hito 0: [Descripción del problema a resolver usando correctamente git y GitHub](docs/hito0.md)
