document.addEventListener("DOMContentLoaded", function () {
  const startDateInput = document.getElementById("start-date");
  const operationsCount = document.querySelector(".card .text-primary.font-weight-bold");

  // Verifica si los elementos se obtienen correctamente
  console.log("Campo de fecha:", startDateInput);
  console.log("Contador de operaciones:", operationsCount);

  // Fecha base: 1 de octubre de 2024
  const baseDate = new Date("2024-10-01");

  function calculateOperationsCount(targetDate) {
    // Calcular la diferencia en milisegundos y convertirla a días
    const differenceInTime = targetDate.getTime() - baseDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

    console.log("Diferencia en días:", differenceInDays);

    // Asegurarse de que el resultado sea positivo
    if (differenceInDays >= 1) {
      return differenceInDays * 210; // Incremento de 210 unidades por cada día completo pasado
    } else {
      return 0; // Si la fecha es igual o anterior a la baseDate
    }
  }

  function updateOperationsCount() {
    // Validar y convertir la fecha seleccionada en startDateInput
    const selectedDate = new Date(startDateInput.value);
    console.log("Fecha seleccionada:", selectedDate);

    if (!isNaN(selectedDate.getTime())) {
      // Calcular y mostrar el conteo de operaciones
      const operations = calculateOperationsCount(selectedDate);
      console.log("Operaciones calculadas:", operations);
      operationsCount.textContent = operations;
    } else {
      operationsCount.textContent = "Seleccione una fecha válida";
    }
  }

  // Escuchar cambios en el campo de fecha para actualizar el conteo de operaciones
  startDateInput.addEventListener("change", updateOperationsCount);
});
