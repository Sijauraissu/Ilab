const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Récupérez les données du projet depuis le localStorage
const selectedProject = JSON.parse(localStorage.getItem("selectedProject"));

// Assurez-vous que les données du projet existent et sont valides
if (selectedProject) {
  // Utilisez les données du projet comme nécessaire
  console.table(selectedProject);
} else {
  // Gérez le cas où aucune donnée de projet n'a été trouvée
  console.error(
    "Aucune donnée de projet n'a été trouvée dans le localStorage."
  );
}

const rollBack = document.querySelector(".backBtn");

// Ajoutez un gestionnaire d'événements "click" au bouton
rollBack.addEventListener("click", function () {
  localStorage.clear();
});

// Ajoutez le bouton à la page (par exemple, au corps du document)
document.body.appendChild(rollBack);
/////////////////////////////////

let selectedProjectInfos = [
  selectedProject.option,
  selectedProject.nom,
  selectedProject.image,
  selectedProject.video,
  selectedProject.etudiant,
  selectedProject.step,
];

const wrapperSwiper = document.querySelector(".swiper-wrapper");

let infoContainer = null;

console.table(selectedProjectInfos);

for (let i = 0; i < selectedProject.step.length; i++) {
  console.log(selectedProject.step[i]);

  infoContainer = document.createElement("div");
  infoContainer.classList.add("swiper-slide");
  infoContainer.innerHTML = "test";

  wrapperSwiper.append(infoContainer);
}
