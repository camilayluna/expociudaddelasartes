document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("invitationVideo");
    var overlay = document.getElementById("unmuteOverlay");
    var transitionOverlay = document.getElementById("transitionOverlay");
    var videoContainer = document.getElementById("videoContainer");

    // Al hacer clic en el overlay, mostrar el botón de reproducir y ocultar el overlay
    overlay.addEventListener("click", function() {
        overlay.style.display = 'none';
        video.controls = true; // Mostrar los controles del video
    });

    // Al hacer clic en el botón de reproducir, activar el sonido y reproducir el video
    video.addEventListener("play", function() {
        video.muted = false; // Activar el sonido
    });

    // Reproducir el video después de la animación de transición
    transitionOverlay.addEventListener('animationend', function() {
        transitionOverlay.style.display = 'none'; // Ocultar el overlay de transición
        videoContainer.style.display = 'block'; // Mostrar el contenedor del video
    });
});
