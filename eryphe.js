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

// #region card
// Attendre que la page soit chargée
// document.addEventListener("DOMContentLoaded", () => {
//   // Sélectionner toutes les cartes auxquelles nous voulons appliquer l'effet
//   const cards = document.querySelectorAll(".card");

//   cards.forEach((card) => {
//     // Pour chaque carte, ajouter un écouteur d'événement au clic
//     card.addEventListener("click", () => {
//       // Basculer la classe 'flipped'.
//       // Si elle est présente, elle est retirée. Si elle est absente, elle est ajoutée.
//       card.classList.toggle("flipped");
//     });
//   });
// });
// #endregion card
