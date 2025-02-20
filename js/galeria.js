function openModal(imgSrc, description) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    const modalDescription = document.getElementById('modalDescription');
    
    // Asignar la imagen y la descripción al modal
    modalImg.src = imgSrc;
    modalDescription.textContent = description;

    // Mostrar el modal
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera de la imagen
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
}

const photos = [
    { src:"nieve.jpeg", description: '' },
    { src: 'nieve2.0.jpeg', description: '' },
    { src:"capturado.jpeg", description: '' },
    { src:"el hijo del demian.jpeg", description: '' },
    { src:"el hijo del mayor.jpeg", description: '' },
    { src:"El secuestro del menor.jpeg", description: '' },
    { src:"La navidades de los hermanos.jpeg", description: '' },
    { src:"Los 2 gigantes.jpeg", description: '' },
    { src:"Los 2 piromanos.jpeg", description: '' },
    { src:"salida al cerro.jpeg", description: '' },
    { src:"Su primera mascota.jpeg", description: '' },
    { src:"Un padre y sus 2 hijos.jpeg", description: '' },
    { src:"Los 3 y el gato.jpeg", description: '' },
];

function openModal(index) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    
    modal.style.display = "block";
    modalImage.src = photos[index].src;
    modalDescription.innerHTML = photos[index].description;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
}
