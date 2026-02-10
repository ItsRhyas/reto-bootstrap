document.addEventListener("DOMContentLoaded", () => {
  const listaSection = document.getElementById("lista");
  const calendarioSection = document.getElementById("calendario-vista");
  const btnLista = document.getElementById("btnLista");
  const btnCalendario = document.getElementById("btnCalendario");

  if (!listaSection || !calendarioSection || !btnLista || !btnCalendario) {
    return;
  }

  const showLista = () => {
    listaSection.classList.remove("d-none");
    listaSection.removeAttribute("aria-hidden");
    calendarioSection.classList.add("d-none");
    calendarioSection.setAttribute("aria-hidden", "true");
    btnLista.classList.add("active");
    btnLista.setAttribute("aria-pressed", "true");
    btnCalendario.classList.remove("active");
    btnCalendario.setAttribute("aria-pressed", "false");
  };

  const showCalendario = () => {
    calendarioSection.classList.remove("d-none");
    calendarioSection.removeAttribute("aria-hidden");
    listaSection.classList.add("d-none");
    listaSection.setAttribute("aria-hidden", "true");
    btnCalendario.classList.add("active");
    btnCalendario.setAttribute("aria-pressed", "true");
    btnLista.classList.remove("active");
    btnLista.setAttribute("aria-pressed", "false");
  };

  // Default view: Lista
  showLista();

  btnLista.addEventListener("click", (e) => {
    e.preventDefault();
    showLista();
  });

  btnCalendario.addEventListener("click", (e) => {
    e.preventDefault();
    showCalendario();
  });
});
