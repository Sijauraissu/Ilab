function shuffleArray(inputArray) {
  return inputArray.sort(() => Math.random() - 0.5);
}
const imageNumber = 12;

const wrapper = document.querySelector(".choose__grid");
const btnFilter = document.querySelectorAll(".btn");

let tabProjects = [];
let tabShuffle = [];

let currentFilter = null;
let project = null;
let imageContainer = null;

function displayProjects(projects) {
  wrapper.innerHTML = "";

  for (let i = 0; i < 12 && i < projects.length; i++) {
    project = projects[i];
    imageContainer = document.createElement("a");

    imageContainer.href = "project.php";
    imageContainer.classList.add("grid__el");
    imageContainer.style.backgroundImage = `url('${project.image}')`;

    //taille aléatoire des images
    const randomPercentage = 80 + Math.random() * 20;
    imageContainer.style.transform = `scale(${randomPercentage / 100})`;

    // Modifiez le gestionnaire d'événements pour les liens
    imageContainer.addEventListener("click", (event) => {
      event.preventDefault(); // Empêchez la navigation par défaut

      // Enregistrez les données du projet dans le localStorage
      localStorage.setItem("selectedProject", JSON.stringify(projects[i]));

      // Redirigez l'utilisateur vers la page du projet
      window.location.href = event.target.href;
    });

    wrapper.append(imageContainer);
  }
}

function applyFilter(filter) {
  if (filter === currentFilter) {
    currentFilter = null;
    shuffleArray(tabShuffle); // Réorganiser le tableau tabShuffle
    console.log(tabShuffle);
    displayProjects(tabShuffle.slice(0, imageNumber)); // Afficher les 12 premiers projets aléatoires
  } else {
    currentFilter = filter;
    const filteredProjects = tabProjects.filter((project) => {
      return project.option === filter;
    });
    displayProjects(filteredProjects);
    console.log(filteredProjects);
  }

  btnFilter.forEach((button) => {
    const buttonText = button.textContent.trim();
    button.classList.toggle("hover", buttonText === currentFilter);
  });
}

// À l'intérieur de la fonction fetch
fetch("./assets/json/projects.json")
  .then((response) => response.json())
  .then((data) => {
    const listProjects = data["Liste"];
    shuffleArray(listProjects);
    console.log(listProjects);

    tabShuffle = [...listProjects]; // Permet de faire une copie du tableau listProjects

    listProjects.forEach((project) => {
      tabProjects.push(project);
    });

    btnFilter.forEach((button) => {
      button.addEventListener("click", () => {
        btnFilter.forEach((btn) => {
          btn.classList.remove("hover");
        });

        const filterText = button.textContent.trim();
        applyFilter(filterText);
      });
    });

    // Afficher les projets non filtrés au chargement de la page
    displayProjects(tabShuffle.slice(0, imageNumber));
  });

const groupes = [
  { textColor: "#ABD7DE", bgColor: "yellow" },
  { textColor: "#EF3325", bgColor: "green" },
  { textColor: "#357E78", bgColor: "white" },
  { textColor: "#F8C9CA", bgColor: "orange" },
];

// La variable test contient la longueur de la chaîne de caractères pour laquelle nous voulons générer des paires de couleurs

// Variable pour stocker les paires de couleurs
let test2 = "";

// Boucle pour générer les paires de couleurs
for (let i = 0; i < btnFilter.length; i++) {
  // Sélection aléatoire d'un groupe
  const groupeAleatoire = groupes[Math.floor(Math.random() * groupes.length)];

  // Ajout des couleurs de texte et de fond à la variable test2
  test2 += `Texte: ${groupeAleatoire.textColor}, Fond: ${groupeAleatoire.bgColor}\n`;

  btnFilter[i].style.borderColor = groupeAleatoire.textColor;
}

// Affichage du résultat
console.log(test2);

// Récupérez les données du projet depuis le localStorage
const selectedProject = JSON.parse(localStorage.getItem("selectedProject"));

// Assurez-vous que les données du projet existent et sont valides
if (selectedProject) {
  // Utilisez les données du projet comme nécessaire
  console.table(selectedProject);
} else {
  // Gérez le cas où aucune donnée de projet n'a été trouvée
  console.log(
    "%cAucune donnée de projet n'a été trouvée dans le localStorage ✅",
    "color: green; font-size: 16px;"
  );
}
