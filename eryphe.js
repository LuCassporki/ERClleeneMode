function view() {
  const content = document.getElementById("logo");

  // 2. Vérifier si le contenu est actuellement visible (a la classe 'active')
  if (content.classList.contains("sun")) {
    // Il est ouvert : on le ferme en retirant la classe
    content.classList.remove("sun");
    content.classList.add("moon");
  } else {
    // Il est fermé : on l'ouvre en ajoutant la classe
    content.classList.remove("moon");
    content.classList.add("sun");
  }
}
