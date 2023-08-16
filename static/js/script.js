// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Código que se ejecuta cuando la página se ha cargado completamente
    console.log('Página cargada completamente.');
    
    // Ejemplo de manipulación del DOM
    const heading = document.querySelector('h1');
    heading.style.color = 'blue';
    
    // Ejemplo de manejo de eventos
    const button = document.querySelector('#my-button');
    button.addEventListener('click', function () {
        alert('¡Botón clickeado!');
    });
});
