function addOrUpdateTask() {
  var taskName = document.getElementById("taskName").value;
  var taskDescription = document.getElementById("taskDescription").value;
  var priority = document.getElementById("priority").value;
  var editIndex = document.getElementById("editIndex").value;

  var taskList = document.getElementById("taskList");

  if (editIndex === "-1") {
    // Agregar nueva tarea
    var row = taskList.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = taskName;
    cell2.innerHTML = taskDescription;
    cell3.innerHTML = priority;
    cell4.innerHTML =
      '<button type="button" class="btn btn-warning btn-sm" onclick="editTask(this)">Editar</button> ' +
      '<button type="button" class="btn btn-danger btn-sm" onclick="deleteTask(this)">Eliminar</button>';
  } else {
    // Actualizar tarea existente
    var rowToUpdate = taskList.rows[editIndex];
    rowToUpdate.cells[0].innerHTML = taskName;
    rowToUpdate.cells[1].innerHTML = taskDescription;
    rowToUpdate.cells[2].innerHTML = priority;

    // Restablecer el índice de edición
    document.getElementById("editIndex").value = "-1";
  }

  // Limpiar el formulario después de agregar o actualizar la tarea
  document.getElementById("todoForm").reset();
}

function editTask(button) {
  var row = button.parentNode.parentNode;
  var taskName = row.cells[0].innerHTML;
  var taskDescription = row.cells[1].innerHTML;
  var priority = row.cells[2].innerHTML;

  // Cargar los valores en el formulario
  document.getElementById("taskName").value = taskName;
  document.getElementById("taskDescription").value = taskDescription;
  document.getElementById("priority").value = priority;

  // Establecer el índice de edición
  document.getElementById("editIndex").value = row.rowIndex - 1;
}

function deleteTask(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function regresar() {
  url = "../contactos/contactos.html"
  window.open(url, "_blank")
  window.close()
}
