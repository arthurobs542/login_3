let b7valilador = {
  handleSubmit: (event) => {
    event.preventDefalt();
    let send = true;

    let inputs = form.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      console.log(input);
    }
    send = false;
  },
  if(send) {
    form.submit();
  },
};

let form = document.querySelector(".b7validador");
form.addEventListener("submit", b7valilador.handleSubmit);
