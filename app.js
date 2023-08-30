const $emailButton = document.querySelector(".email-button");
const $inputBox = document.getElementById("email-input");
const $errorMessage = document.getElementById("errorMessage");
const $iconError = document.querySelector(".icon-error");


function validarEmail() {
  let textoIntroducido = $inputBox.value;
  let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (textoIntroducido === "") {
    return;
  }

  if (!regex.test(textoIntroducido)) {
    $errorMessage.style.color = "var(--soft-red)";
    $iconError.style.display = "block";
    $inputBox.style.border = '2px solid var(--soft-red)';
  } else {
    $inputBox.value = "";
    $errorMessage.style.color = "white";
    $iconError.style.display = "none";
    $inputBox.style.border = '1px solid var(--desaturated-red)';
  }
}

function botonPulsado() {
  $emailButton.style.boxShadow = "5px 13px 20px -5px var(--desaturated-red)";
  $emailButton.style.backgroundColor = "var(--desaturated-red)";
}

function botonSoltado() {
  $emailButton.style.boxShadow = "none";
  $emailButton.style.backgroundColor = "var(--soft-red)";
}


$emailButton.addEventListener("click", validarEmail);
$emailButton.addEventListener("mousedown", botonPulsado);
$emailButton.addEventListener("mouseup", botonSoltado);
$emailButton.addEventListener("mouseleave", botonSoltado);


document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      validarEmail();
    }
  });