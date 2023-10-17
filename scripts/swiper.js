const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

swiper.on("slideChangeTransitionEnd", function () {
  const textAnim =
    swiper.slides[swiper.activeIndex].querySelectorAll(".textAnimation");
  const step = swiper.slides[swiper.activeIndex].querySelector(".swiper__step");
  const number =
    swiper.slides[swiper.activeIndex].querySelector(".swiper__number");
  const description = swiper.slides[swiper.activeIndex].querySelector(
    ".swiper__description"
  );

  gsap.from(step, {
    x: 600, // Faites apparaître depuis la droite
    opacity: 0,
    duration: 1,
    ease: Power2.ease,
  });

  gsap.from(number, {
    x: 600, // Faites apparaître depuis la droite
    opacity: 0,
    duration: 1,
    ease: Power2.ease,
    delay: 0.2, // Ajoutez un délai de 0.2 seconde
  });

  gsap.from(description, {
    x: 600, // Faites apparaître depuis la droite
    opacity: 0,
    duration: 1,
    ease: Power2.ease,
    delay: 0.4, // Ajoutez un délai de 0.4 seconde
  });

  textAnim.forEach((el, index) => {
    gsap.to(el, {
      opacity: 1,
      x: -600,
      duration: 1,
      ease: Power2.ease,
      delay: 0.2 * index,
    });
  });
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
  let swiperContainer = document.createElement("div");
  swiperContainer.classList.add("swiper-slide");
  swiperContainer.style.backgroundImage = `url('${selectedProject.step[i].fullscreen}')`;

  let test = swiperContainer;

  let infoContainer = document.createElement("div");
  infoContainer.classList.add("swiper__container", "textAnimation");

  let infoName = document.createElement("p");
  infoName.textContent = selectedProject.step[i].stepName;
  infoName.classList.add("swiper__step");

  let infoDescript = document.createElement("p");
  infoDescript.textContent = selectedProject.step[i].stepDescript;
  infoDescript.classList.add("swiper__description");

  let infoStep = document.createElement("p");
  infoStep.textContent = i + 1 + ".";
  infoStep.classList.add("swiper__number");

  swiperContainer.appendChild(infoContainer);

  infoContainer.appendChild(infoStep);
  infoContainer.appendChild(infoName);
  infoContainer.appendChild(infoDescript);

  // Ajoutez infoStudentName et infoProject uniquement à la première diapositive
  if (i === 0) {
    let infoStudentName = document.createElement("p");
    infoStudentName.textContent = selectedProject.etudiant;
    infoStudentName.classList.add("swiper__student");
    swiperContainer.appendChild(infoStudentName);

    let infoProject = document.createElement("p");
    infoProject.textContent = selectedProject.nom;
    infoProject.classList.add("swiper__name");
    swiperContainer.appendChild(infoProject);
  }

  wrapperSwiper.append(swiperContainer);
}

let infoContainers = document.querySelectorAll(".swiper-slide");
console.log(infoContainers);

for (let i = 0; i < infoContainers.length; i++) {
  const element = infoContainers[i];
}
//////

const fullscreen = document.querySelector(".fullscreen");
const fullscreenBtn = document.querySelector(".fullscreen__btn");

const studentName = document.querySelector(".swiper__student");
const projectName = document.querySelector(".swiper__name");

fullscreen.style.backgroundImage = `url('${selectedProject.image}')`;

fullscreenBtn.addEventListener("click", () => {
  // Lancer l'animation de la première diapositive avec un délai
  setTimeout(() => {
    const firstSlideTextAnim =
      swiper.slides[0].querySelectorAll(".textAnimation");

    const step = swiper.slides[0].querySelector(".swiper__step");
    const number = swiper.slides[0].querySelector(".swiper__number");
    const description = swiper.slides[0].querySelector(".swiper__description");

    gsap.from(step, {
      x: 600, // Faites apparaître depuis la droite
      opacity: 0,
      duration: 1,
      ease: Power2.ease,
    });

    gsap.from(number, {
      x: 600, // Faites apparaître depuis la droite
      opacity: 0,
      duration: 1,
      ease: Power2.ease,
      delay: 0.2, // Ajoutez un délai de 0.2 seconde
    });

    gsap.from(description, {
      x: 600, // Faites apparaître depuis la droite
      opacity: 0,
      duration: 1,
      ease: Power2.ease,
      delay: 0.4, // Ajoutez un délai de 0.4 seconde
    });

    //////
    firstSlideTextAnim.forEach((el, index) => {
      gsap.to(el, {
        opacity: 1,
        x: -600,
        duration: 1,
        ease: Power2.ease,
        delay: 0.2 * index,
      });
    });

    gsap.to(".swiper__student, .swiper__name", {
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      x: 100,
      ease: Power2.ease,
      delay: 0.2,
    });
  }, 500);

  fullscreen.classList.add("fullscreenOff");
  console.log("click");
});
