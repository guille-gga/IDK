# IDK REPO


*Nobody knows this exists*


## document.createElement()


**¿Para qué sirve?**


El método document.createElement() se usa para crear un nuevo nodo de elemento HTML con el nombre de etiqueta especificado. Este nuevo elemento se crea "en memoria" y no se añade automáticamente al documento visible.

*Sintaxis:* document.createElement(tagName)

*Ejemplo*: document.createElement('div') crea un nuevo elemento <div>.

Ejemplo Práctico
JavaScript

// 1. Crear un nuevo elemento de párrafo (<p>)
const nuevoParrafo = document.createElement('p');
// nuevoParrafo ahora es un objeto que representa <p></p>

## element.appendChild()


**¿Para qué sirve?**


El método element.appendChild() se usa para agregar un nodo (típicamente un elemento que acabas de crear o uno existente) como el último hijo de un elemento padre especificado. Este es el paso que toma el elemento creado en memoria y lo inserta en el DOM visible.

*Sintaxis:* parentNode.appendChild(childNode)

*Ejemplo:* document.body.appendChild(nuevoParrafo) añade el párrafo al final del <body>.

Ejemplo Práctico
Utilizando el nuevoParrafo del ejemplo anterior:

JavaScript

// 2. Localizar el elemento padre donde queremos insertarlo (por ejemplo, el <body>)
const cuerpoDocumento = document.body;

// 3. Agregar el nuevo elemento de párrafo al cuerpo del documento
cuerpoDocumento.appendChild(nuevoParrafo);
// Ahora, el <p></p> se ha añadido al final del <body> en la página.


## document.getElementById()


**¿Para qué sirve?**

El método document.getElementById() es una forma muy común de seleccionar y obtener una referencia a un elemento en el DOM usando su atributo id. Devuelve el elemento cuyo id coincide con el especificado.

Sintaxis: document.getElementById(id)

Ejemplo: document.getElementById('contenedor') devuelve el elemento con id="contenedor".

Ejemplo Práctico
HTML:

HTML

<div id="miContenedor"></div>
JavaScript:

JavaScript

// 1. Obtener la referencia al elemento <div> con el id "miContenedor"
const contenedor = document.getElementById('miContenedor');
// La variable 'contenedor' ahora contiene el objeto div.

// 2. Podemos usarlo para añadirle cosas (como el párrafo que creamos antes)
// contenedor.appendChild(nuevoParrafo);

## element.innerText


*¿Para qué sirve?*

La propiedad element.innerText se usa para obtener o establecer el contenido de texto de un elemento y de todos sus descendientes. Cuando se establece, elimina cualquier hijo existente y reemplaza el contenido con una nueva cadena de texto.

Para leer: elemento.innerText (Devuelve el texto visible).

Para escribir: elemento.innerText = 'Nuevo texto' (Establece el nuevo texto).

Ejemplo Práctico
Utilizando el nuevoParrafo y contenedor de los ejemplos anteriores:

JavaScript

// 1. Establecer el contenido de texto del nuevo párrafo
nuevoParrafo.innerText = '¡Hola! Este es mi texto de ejemplo.';
// El elemento ahora es: <p>¡Hola! Este es mi texto de ejemplo.</p>

// 2. Obtener el texto del contenedor para mostrarlo en consola
console.log(contenedor.innerText); // Esto mostraría el texto que contenga el div

## Ejemplo Completo Unificado



HTML

<body>
    <div id="mensajeAqui"></div>
    <script src="script.js"></script>
</body>
JavaScript (script.js)

JavaScript

// 1. Localizar el elemento padre por su ID
const padre = document.getElementById('mensajeAqui');

// 2. Crear un nuevo elemento <h2>
const nuevoTitulo = document.createElement('h2');

// 3. Asignarle contenido de texto
nuevoTitulo.innerText = '¡Título Creado con JavaScript!';

// 4. Añadir el nuevo título como hijo del elemento padre
padre.appendChild(nuevoTitulo);

/*
Resultado en el DOM:
<div id="mensajeAqui">
    <h2>¡Título Creado con JavaScript!</h2>
</div>
*/