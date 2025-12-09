//CREAR NODOS

//1
const Container=document.createElement('p'); //Crea un nodo de tipo elemento

//4
const texto=document.createTextNode('Hola soy un nodo creado con JavaScript'); //Crea un nodo de tipo texto

//Seleccionar el padre

//2
const elemntocontainer = document.querySelector(".container"); //Selecciona el contenedor padre


//Añadir nodos

//3
elemntocontainer.appendChild(Container); //Añade el nodo hijo al padre

//5
Container.appendChild(texto); //Añade el nodo texto al nodo elemento