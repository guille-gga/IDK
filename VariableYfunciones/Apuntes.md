## Variables en JavaScript
Las variables se usan para almacenar información o datos para su uso posterior en el programa. JavaScript es un lenguaje dinámicamente tipado, lo que significa que no tienes que especificar el tipo de dato (número, texto, etc.) al declarar la variable.

Hay tres palabras clave principales para declarar variables:

```let```: Es la forma preferida hoy en día. Permite que el valor de la variable sea re-asignado (cambiado) y tiene un ámbito de bloque (block scope).

```const```: Se usa para declarar variables cuyo valor no cambiará (constante). Si intentas re-asignar su valor, obtendrás un error. También tiene ámbito de bloque.

```var```: Es la forma antigua de declarar variables. Se desaconseja su uso debido a su ámbito funcional (function scope) y otros problemas de hoisting.

Ejemplos:
JavaScript

```
let edad = 30; // 'let' para un valor que puede cambiar
const nombre = "Juan"; // 'const' para un valor que no debería cambiar


edad = 31; // Esto es válido con 'let'
// nombre = "Pedro"; // Esto daría un error (TypeError) con 'const'
```
## Funciones en JavaScript
Una función es un bloque de código diseñado para realizar una tarea particular. Te permite encapsular código para poder reutilizarlo.

Tipos de Funciones Comunes:
Declaración de Función (Function Declaration): La forma clásica.

JavaScript
```
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}
console.log(saludar("Ana")); // Resultado: "Hola, Ana!"
```

Expresión de Función (Function Expression): Asigna una función (a veces anónima) a una variable.

JavaScript

```
const despedir = function(nombre) {
  console.log("Adiós, " + nombre);
};
despedir("Luis"); // Muestra: "Adiós, Luis"
```

Funciones de Flecha (Arrow Functions): Una sintaxis más concisa, introducida en ES6, muy popular hoy en día. Son ideales para funciones sencillas o callbacks.

JavaScript

```

const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // Resultado: 8

```
