window.addEventListener('load', start());

function start() {
  const buttons = document.querySelectorAll('.btn');
  const visor = document.querySelector(".calc-visor");
  const reset = document.querySelector("#calc-reset");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (visor.innerHTML == '0,00') {
        visor.innerHTML = '';
      }
      visor.innerHTML = visor.innerHTML + button.innerHTML; 
    });
  });

  reset.addEventListener('click', () => {
    visor.innerHTML = '0,00';
  });
  
}
