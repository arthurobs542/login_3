let b7valilador = {
  handleSubmit: (event) => {
    event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      console.log(input);
      let check = b7valilador.checkIpunt(input);
      if (check !== true) {
        send = false;
        //exibir erro
      }
    }
    send = false;

    if (send) {
      form.submit();
    }
  },
  checkIpunt: (input) => {
    let rules = input.getAttribute("data-rules");
    if (rules !== null) {
    }
    return true;
  },
};

console.log(b7valilador);

let form = document.querySelector(".b7valilador");

form.addEventListener("submit", b7valilador.handleSubmit);
