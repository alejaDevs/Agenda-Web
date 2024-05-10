document.addEventListener("DOMContentLoaded", function () {
  // Recupera los datos almacenados en localStorage
  var numero = localStorage.getItem("numero");
  var nombre = localStorage.getItem("nombre");
  var apellido = localStorage.getItem("apellido");
  var alias = localStorage.getItem("alias");

  // Actualiza los elementos en la plantilla con los datos almacenados
  document.getElementById("numeroInput").textContent =
    numero || "No disponible";
  document.getElementById("nombreInput").textContent =
    nombre || "No disponible";
  document.getElementById("apellidoInput").textContent =
    apellido || "No disponible";
  document.getElementById("aliasInput").textContent = alias || "No disponible";
});


function back(){
  window.history.back();
}