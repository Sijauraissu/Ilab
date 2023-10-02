let step = 0;
fetch("./assets/json/projects.json")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    const allowedProjects = data["Project"];

    const keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
      const projet = keys[i];
      if (data.hasOwnProperty(projet) && allowedProjects.includes(projet)) {
        // let image = data[projet][0].image;
        // let color = data[projet][0].color;

        // imgBG[step].style.backgroundImage = `url('${image}')`;
        // colorCollum[step].style.backgroundColor = color;

        step++;
      }
    }
  })
  .catch((error) => {
    console.error(`Erreur lors de la récupération des données : ${error}`);
  });

/////////////

const imageNumber = 12;
const wrapper = document.querySelector(".choose__grid");

for (let i = 0; i < imageNumber; i++) {
  const imageContainer = document.createElement("span");
  imageContainer.classList.add("test");

  wrapper.append(imageContainer);
}
