document.addEventListener('DOMContentLoaded', function() {
    // Lógica para la alerta de bienvenida y el botón de universidad
    // Esto se ejecutará en la página de Laura o Andrés, dependiendo de cuál se cargue.

    // Identifica qué página de CV se está cargando para personalizar la alerta
    let welcomeMessage = '';
    let universityButtonExists = false;

    if (window.location.pathname.includes('hoja_de_vida_laura.html')) {
        welcomeMessage = '¡Bienvenido/a a la Hoja de Vida de Laura Vanessa Medina Perdomo!';
        universityButtonExists = true; // El botón de universidad está en la CV de Laura
    } else if (window.location.pathname.includes('hoja_de_vida_andres.html')) {
        welcomeMessage = '¡Bienvenido/a a la Hoja de Vida de Andrés Sebastián Cabrera Mongui!';
        universityButtonExists = true; // <--- ¡CAMBIO CLAVE AQUÍ! Activar el botón de universidad para Andrés también
    }

    // Mostrar la alerta de bienvenida si estamos en una página de CV
    if (welcomeMessage) {
        alert(welcomeMessage);
    }

    // Funcionalidad del botón de redirección a la universidad (solo si existe)
    // Esta condición ahora será verdadera para la página de Andrés también
    if (universityButtonExists) {
        const universityButton = document.getElementById('universityButton');
        if (universityButton) {
            universityButton.addEventListener('click', function() {
                const universityURL = 'https://www.ucompensar.edu.co/';
                window.open(universityURL, '_blank');
            });
        } else {
            // El mensaje de error ahora es más genérico, ya que podría aplicarse a ambas páginas
            console.error('El botón con ID "universityButton" no fue encontrado en la página actual.');
        }
    }

    // Funcionalidad del botón de redirección a la página de inicio (para ambas CVs)
    // Usamos el ID "homeButton" que creamos para la sección de contacto en ambas CVs
    const homeButton = document.getElementById('homeButton');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            window.location.href = 'index.html'; // Redirige a index.html
        });
    } else {
        console.error('El botón con ID "homeButton" no fue encontrado en la página actual.');
    }

    // Si también quieres un botón de "Inicio" en la navegación (header) de las CVs,
    // puedes usar el ID "homeButtonNav" que agregué como comentario en el HTML de las CVs
    const homeButtonNav = document.getElementById('homeButtonNav');
    if (homeButtonNav) {
        homeButtonNav.addEventListener('click', function() {
            window.location.href = 'index.html'; // Redirige a index.html
        });
    }
});