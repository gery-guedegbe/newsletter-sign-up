// Fonction pour valider le formulaire
const button = document.getElementById("email");

function validerFormulaire() {
  let emailUtilisateur = document.getElementById("email").value;

  if (validerEmail(emailUtilisateur)) {
    // Redirection vers la nouvelle page si l'e-mail est valide
    window.location.href = "index-succes-page.html";
  } else {
    document.querySelector(".error-text").style.display = "block";
    button.style.border = "1px solid hsl(4, 100%, 67%)";
    button.style.background = "rgb(255,232,231)";
  }
}

function validerEmail(email) {
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}
