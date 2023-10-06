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

function displayRandomProjects() {
  shuffleArray(tabShuffle);

  wrapper.innerHTML = "";

  for (let i = 0; i < 12 && i < tabShuffle.length; i++) {
    const project = tabShuffle[i];
    const imageContainer = document.createElement("a");

    imageContainer.href = "project.php";
    imageContainer.classList.add("grid__el");
    imageContainer.style.backgroundImage = `url('${project.image}')`;

    wrapper.append(imageContainer);
  }
}

fetch("./assets/json/projects.json")
  .then((response) => response.json())
  .then((data) => {
    const listProjects = data["Liste"];
    shuffleArray(listProjects);

    tabShuffle = [...listProjects]; //Permet de faire une copie du tableau listProjects

    listProjects.forEach((project) => {
      const imageContainer = document.createElement("a");

      imageContainer.href = "project.php";
      imageContainer.classList.add("grid__el");
      imageContainer.style.backgroundImage = `url('${project.image}')`;

      wrapper.append(imageContainer);

      tabProjects.push(project);
    });

    btnFilter.forEach((button) => {
      const texteBouton = button.textContent.trim();

      button.addEventListener("click", () => {
        btnFilter.forEach((btn) => {
          btn.classList.remove("hover");
        });

        if (currentFilter === texteBouton) {
          currentFilter = null;

          displayRandomProjects();
          btn.classList.remove("hover");
        } else {
          currentFilter = texteBouton;
          const filteredProjects = tabProjects.filter((project) => {
            return project.option === texteBouton;
          });

          wrapper.innerHTML = "";

          filteredProjects.forEach((project) => {
            const imageContainer = document.createElement("a");

            imageContainer.href = "project.php";
            imageContainer.classList.add("grid__el");
            imageContainer.style.backgroundImage = `url('${project.image}')`;

            wrapper.append(imageContainer);
          });
        }

        button.classList.toggle("hover");
      });
    });
  });
