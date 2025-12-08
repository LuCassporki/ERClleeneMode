function view() {
  const content = document.getElementById("logo");
  const contenttxt = document.getElementById("text");

  // 2. Vérifier si le contenu est actuellement visible (a la classe 'active')
  if (content.classList.contains("sun")) {
    // Il est ouvert : on le ferme en retirant la classe
    content.classList.remove("sun");
    content.classList.add("moon");

    contenttxt.classList.remove("textOff");
    contenttxt.classList.add("textOn");
  } else {
    // Il est fermé : on l'ouvre en ajoutant la classe
    content.classList.remove("moon");
    content.classList.add("sun");

    contenttxt.classList.remove("textOn");
    contenttxt.classList.add("textOff");
  }
}
