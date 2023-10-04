function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

const nombreAleatoire = getRandomNumber();
console.log(nombreAleatoire);

let step = 0;

const imageNumber = 12;
const wrapper = document.querySelector(".choose__grid");

fetch("./assets/json/projects.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const allowedProjects = data["Project"];
    const keys = Object.keys(data);

    const btnOptions = document.querySelectorAll(".btn");
    console.log(btnOptions);

    btnOptions.forEach((btn) => {
      btn.addEventListener("click", function () {
        let btnText = btn.innerText;

        console.log(btnText);
      });
    });

    let imagestab = [];
    for (let i = 0; i < keys.length; i++) {
      const projet = keys[i];
      if (data.hasOwnProperty(projet) && allowedProjects.includes(projet)) {
        const tabOptions = data[projet].length;
        for (let i = 0; i < tabOptions; i++) {
          let image = data[projet][i].image;
          if (image) imagestab.push(image);
          //Ajout en fct du btn à faire
        }
      }
    }
    console.log(imagestab);

    for (let i = 0; i < imageNumber; i++) {
      console.log(imagestab[i]);
      const imageContainer = document.createElement("a");
      imageContainer.href = "project.php";
      imageContainer.classList.add("grid__el");
      imageContainer.style.backgroundImage = `url('${imagestab[i]}')`;
      wrapper.append(imageContainer);
      // TODO: add image url
    }
  });
