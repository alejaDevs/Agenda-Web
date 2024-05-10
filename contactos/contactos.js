function login() {
  url = "../login/index.html";
  window.open(url, "_blank");
  window.close();
}

function addContact() {
  url = "../addContacto/aggContacto.html";
  window.open(url, "_blank");
  window.close();
}

function perfil() {
  url = "../perfil/perfil.html";
  window.open(url, "_blank");
  window.close();
}

function favoritos() {
  url = "../favoritos/favoritos.html";
  window.open(url, "_blank");
  window.close();
}

function pendientes() {
  url = "../ToDo/todo.html";
  window.open(url, "_blank");
  window.close();
}

document.addEventListener("DOMContentLoaded", function () {
  var tabla = document.getElementById("tableContact");

  tabla.addEventListener("click", function (e) {
    var fila = e.target.closest("tr");

    if (fila) {
      var numero = fila.getAttribute("data-numero");
      var nombre = fila.getAttribute("data-nombre");
      var apellido = fila.getAttribute("data-apellido");
      var alias = fila.getAttribute("data-alias");

      // Almacena los datos en localStorage para que estén disponibles en otra página
      localStorage.setItem("numero", numero);
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("apellido", apellido);
      localStorage.setItem("alias", alias);

      // Redirige a la otra página
      window.location.href = "../infoContacto/paginaInfoContact.html";
    }
  });
});
