// querySelector
const heading = document.querySelector('.header__texto h2'); // 0 ó 1 elemento
heading.textContent = 'Nuevo Heading'; // textContent

console.log(heading);
// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); // N elementos
console.log(enlaces[0]);
let numero = 0;
// enlaces[0].textContent = 'Nuevo Texto para Enlace';
// enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');
// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
//Agregarlo al final
navegacion.appendChild(nuevoEnlace);
//Mosrar
console.log(nuevoEnlace);


//Seleccionar elementos y asociarles un evento

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', validarFormulario);
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

function validarFormulario(e) {
    e.preventDefault();
    const { nombre, email, mensaje } = datos;
    if (nombre === '' && email === '' && mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; //Corta la ejecución del código
    }
    if (nombre === '') {
        mostrarAlerta('El nombre es obligatorio', true);
        return; //Corta la ejecución del código
    }
    if (email === '') {
        mostrarAlerta('El email es obligatorio', true);
        return; //Corta la ejecución del código
    }
    if (mensaje === '') {
        mostrarAlerta('El mensaje es obligatorio', true);
        return; //Corta la ejecución del código
    }
    mostrarAlerta('Mensaje enviado correctamente');
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    //Desaparezca después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}