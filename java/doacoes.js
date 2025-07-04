document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll("input.valor");
  const inputValor = document.getElementById("inputValor");
    const btnDoar = document.getElementById("btnDoar");
      const selectProjeto = document.querySelector("select");


  



  // Quando clicar num valor fixo
  radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (radio.checked) {
        inputValor.value = "R$ " + radio.value + ",00";
      }
    });
  });

  // Formata o valor digitado
  function formatarValorDigitado() {
    let valor = inputValor.value.trim();
    valor = valor.replace(/^R\$\s*/, ""); // Remove "R$ " se já tiver

    if (valor !== "" && !isNaN(valor)) {
      inputValor.value = "R$ " + valor + ",00";
    }
  }

  // Quando clicar fora do campo
  inputValor.addEventListener("blur", formatarValorDigitado);

  // Quando pressionar Enter dentro do input
  inputValor.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // evita envio
      formatarValorDigitado();
      inputValor.blur(); // tira o foco (opcional: força o blur)
    }
  });

  
  btnDoar.addEventListener("click", function (e) {
    e.preventDefault();

    const valor = inputValor.value.trim();
    const projeto = selectProjeto.value;

    if (!valor || Number(valor) <= 0) {
      alert("Por favor, insira um valor válido para doação.");
      inputValor.focus();
      return;
    }

    if (!projeto) {
      alert("Por favor, selecione um projeto.");
      selectProjeto.focus();
      return;
    }

    // Redireciona passando valor e projeto na URL
    const url = `pagamento.html?valor=${encodeURIComponent(valor)}&projeto=${encodeURIComponent(projeto)}`;
    window.location.href = url;
  });
});



