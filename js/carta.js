// Función para guardar la nota
function guardarNota() {
    const cartaTextarea = document.getElementById('carta');
    const cartaTexto = cartaTextarea.value.trim();

    if (cartaTexto === "") {
        alert("Por favor, escribe algo en la nota.");
        return;
    }

    // Obtener notas guardadas
    let notasGuardadas = JSON.parse(localStorage.getItem('notas')) || [];

    // Agregar la nueva nota
    notasGuardadas.push(cartaTexto);
    localStorage.setItem('notas', JSON.stringify(notasGuardadas));

    console.log("Notas guardadas:", notasGuardadas); // Verifica las notas guardadas

    // Limpiar el textarea y actualizar la vista
    cartaTextarea.value = "";
    mostrarNotas();
}

// Función para mostrar notas guardadas
function mostrarNotas() {
    const cartasContainer = document.getElementById('cartas-container');
    cartasContainer.innerHTML = ""; // Limpiar el contenedor

    // Obtener notas desde el localStorage
    const notasGuardadas = JSON.parse(localStorage.getItem('notas')) || [];
    console.log(notasGuardadas); // Verifica en la consola las notas almacenadas

    if (notasGuardadas.length === 0) {
        console.log("No hay notas guardadas.");
        return;
    }

    // Generar puntos de nota
    notasGuardadas.forEach((nota) => {
        const puntoDiv = document.createElement('div');
        puntoDiv.className = 'punto';
        puntoDiv.style.backgroundColor = getRandomColor(); // Color aleatorio
        puntoDiv.onclick = () => {
            mostrarNota(nota); // Mostrar la nota cuando se hace clic
        };
        cartasContainer.appendChild(puntoDiv);
    });
}

// Función para mostrar el contenido de una nota
function mostrarNota(nota) {
    const notaTexto = document.getElementById('nota-texto');
    const notaDisplay = document.getElementById('nota-display');

    // Mostrar contenido
    notaTexto.innerText = nota;

    // Mostrar la nota
    notaDisplay.classList.remove('hidden');
    notaDisplay.classList.add('show');
}

// Función para cerrar la nota
function cerrarNota() {
    const notaDisplay = document.getElementById('nota-display');
    notaDisplay.classList.remove('show');
    notaDisplay.classList.add('hidden');
}

// Función para borrar todas las notas
function borrarNotas() {
    if (confirm("¿Estás seguro de que deseas borrar todas las notas?")) {
        localStorage.removeItem('notas'); // Eliminar las notas del localStorage
        mostrarNotas(); // Actualizar la vista
    }
}

// Función para generar colores aleatorios
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Mostrar notas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarNotas();
});
