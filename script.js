window.addEventListener('load', start());

function start() {
  const buttons = document.querySelectorAll('.btn');
  const visor = document.querySelector(".calc-visor");
  const reset = document.querySelector("#calc-reset");
  const calculate = document.querySelector("#calculate");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (visor.innerHTML == '0.00') {
        visor.innerHTML = '';
      }
      if (button.innerHTML != '=') {
        visor.innerHTML = visor.innerHTML + button.innerHTML; 
      }
    });
  });

  calculate.addEventListener('click', () => {
    visor.innerHTML = eval(visor.innerHTML);
  });

  reset.addEventListener('click', () => {
    visor.innerHTML = '0.00';
  });

}
