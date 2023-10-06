function shuffleArray(inputArray) {
  return inputArray.sort(() => Math.random() - 0.5);
}

let step = 0;

const imageNumber = 12;
const wrapper = document.querySelector(".choose__grid");

const btnFilter = document.querySelectorAll(".btn");
let tabProjects = [];
let tabShuffle = [];
let currentFilter = null;

function displayProjects(projects) {
  wrapper.innerHTML = "";

  for (let i = 0; i < 12 && i < projects.length; i++) {
    const project = projects[i];
    const imageContainer = document.createElement("a");

    imageContainer.href = "project.php";
    imageContainer.classList.add("grid__el");
    imageContainer.style.backgroundImage = `url('${project.image}')`;
    wrapper.append(imageContainer);
  }
}

function applyFilter(filter) {
  if (filter === currentFilter) {
    currentFilter = null;
    displayProjects(tabShuffle);
  } else {
    currentFilter = filter;
    const filteredProjects = tabProjects.filter((project) => {
      return project.option === filter;
    });
    displayProjects(filteredProjects);
  }

  btnFilter.forEach((button) => {
    const buttonText = button.textContent.trim();
    button.classList.toggle("hover", buttonText === currentFilter);
  });
}

fetch("./assets/json/projects.json")
  .then((response) => response.json())
  .then((data) => {
    const listProjects = data["Liste"];
    shuffleArray(listProjects);

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
    displayProjects(tabShuffle);
  });
