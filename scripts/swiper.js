const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: false,

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

const wrapperSwiper = document.querySelector(".swiper-wrapper");

for (let i = 0; i < selectedProject.step.length; i++) {
  let infoContainer = document.createElement("div");
  infoContainer.classList.add("swiper-slide");

  let infoName = document.createElement("h2");
  infoName.textContent = selectedProject.step[i].stepName;

  let infoStep = document.createElement("h3");
  infoStep.textContent = selectedProject.step[i].stepDescript;

  infoContainer.appendChild(infoName);
  infoContainer.appendChild(infoStep);

  wrapperSwiper.append(infoContainer);
}

let infoContainers = document.querySelectorAll(".swiper-slide");
console.log(infoContainers);

for (let i = 0; i < infoContainers.length; i++) {
  const element = infoContainers[i];
}
//////

const fullscreen = document.querySelector(".fullscreen");
const fullscreenBtn = document.querySelector(".fullscreen__btn");

fullscreenBtn.addEventListener("click", (event) => {
  fullscreen.classList.add("fullscreenOff");
  console.log("click");
});
