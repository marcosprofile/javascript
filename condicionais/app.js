const totalElement = document.querySelector('#total');
const mensagemElement = document.querySelector('#message');
const removerElement = document.querySelector('#remover');
const adicionarElement = document.querySelector('#adicionar');

const min = 0;
const max = 8;

let contador = 1;

function atualizarContador(valor) {
  contador += valor;
  totalElement.textContent = contador;
}

function exibirMensagem() {
  if (contador > min && contador < max) {
    adicionarElement.classList.remove('disabled');
    removerElement.classList.remove('disabled');
    mensagemElement.textContent = `Mínimo ${min} - Máximo ${max}`;
  } else if (contador === max) {
    adicionarElement.classList.add('disabled');
    mensagemElement.textContent = "Valor máximo atingido";
  } else if (contador === min) {
    removerElement.classList.add('disabled');
    mensagemElement.textContent = "Valor mínimo atingido";
  }
}

function incrementarContador() {
  if (contador >= min && contador < max) {
    atualizarContador(1);
    exibirMensagem();
  }
}

function decrementarContador() {
  if (contador > min && contador <= max) {
    atualizarContador(-1);
    exibirMensagem();
  }
}

function inicializar() {
  adicionarElement.addEventListener("click", function(e) {
    e.preventDefault();
    incrementarContador();
  });

  removerElement.addEventListener("click", function(e) {
    e.preventDefault();
    decrementarContador();
  });

  totalElement.textContent = contador;
  mensagemElement.textContent = `Mínimo ${min} - Máximo ${max}`;
}

inicializar();
