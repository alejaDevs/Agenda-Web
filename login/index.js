function abrirOtraPagina() {
    // Ruta relativa de la página que quieres abrir
    var rutaPagina = '../contactos/contactos.html';
    
    // Concatenar la ruta con la ubicación actual de la página
    var rutaCompleta = window.location.href.replace('index.html', '') + rutaPagina;

    // Abrir la nueva página en una nueva pestaña
    window.open(rutaCompleta, '_blank');
    window.close();
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Asignar la función al evento de clic del botón
    document.getElementById('btnLogin').addEventListener('click', abrirOtraPagina);
});