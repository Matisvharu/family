document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const userInput = document.getElementById("nombre"); // Campo de nombre
    const passInput = document.getElementById("password"); // Campo de contraseña
    const penSound = new Audio("sounds/pencil-write-73431.mp3.opdownload");

    // Sonido de pluma al escribir
    userInput.addEventListener("input", () => { penSound.play(); });
    passInput.addEventListener("input", () => { penSound.play(); });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario
        const username = userInput.value.trim(); // Obtiene el nombre de usuario
        const password = passInput.value.trim(); // Obtiene la contraseña

        // Aquí puedes definir el usuario y la contraseña correctos
        const validUsername = "familia";
        const validPassword = "recuerdos";

        // Validación de usuario y contraseña
        if (username === validUsername && password === validPassword) {
            alert("¡Bienvenido a los recuerdos de la familia!");
            window.location.href = "home.html"; // Subir dos niveles para llegar a pages
        } else {
            alert("Usuario o contraseña incorrectos. Intenta de nuevo.");
        }
    });
});