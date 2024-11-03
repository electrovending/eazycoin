<script>
  document.addEventListener("DOMContentLoaded", function () {
    const startDateInput = document.getElementById("start-date");
    const operationsCount = document.querySelector(".card .text-primary.font-weight-bold");

    if (!startDateInput || !operationsCount) {
      console.error("Elementos necesarios no encontrados en el DOM.");
      return;
    }

    // Fecha base: 1 de octubre de 2024
    const baseDate = new Date("2024-10-01");

    function calculateOperationsCount(targetDate) {
      if (!(targetDate instanceof Date) || isNaN(targetDate.getTime())) {
        console.error("Fecha objetivo no válida.");
        return 0;
      }

      // Calcular la diferencia en milisegundos y convertirla a días
      const differenceInTime = targetDate.getTime() - baseDate.getTime();
      const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

      // Asegurarse de que el resultado sea positivo
      return differenceInDays >= 1 ? differenceInDays * 210 : 0;
    }

    function updateOperationsCount() {
      const selectedDate = new Date(startDateInput.value);

      if (isNaN(selectedDate.getTime())) {
        operationsCount.textContent = "Seleccione una fecha válida";
        console.warn("Fecha seleccionada no válida.");
      } else {
        const operations = calculateOperationsCount(selectedDate);
        operationsCount.textContent = operations;
      }
    }

    // Escuchar cambios en el campo de fecha para actualizar el conteo de operaciones
    startDateInput.addEventListener("change", updateOperationsCount);
  });
</script>
