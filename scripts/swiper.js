// Création du Slider
const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: false,
  observeParents: true,
  observer: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // https://swiperjs.com/swiper-api
  },

  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});

// Création du bouton de retour en arrière
const rollBack = document.querySelector(".backBtn");

// Ajoutez un gestionnaire d'événements "click" au bouton
rollBack.addEventListener("click", function () {
  localStorage.clear();
});

//
document.body.appendChild(rollBack);

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

// Créez une animation GSAP pour l'élément "projetinfos"
const projectInfo = document.querySelector(".projetinfos");
projectInfo.classList.add("project-info-animation");

const projectInfoTween = gsap.to(".project-info-animation", {
  y: "0%", // Déplace l'élément vers le haut de la page
  ease: "power3.inOut",
  paused: true, // En pause au départ
});

/////////////////////////////////

let fullscreen = document.querySelector(".fullscreen");

if (selectedProject.finalproject[0].format == "video") {
  console.log("C'est une video");
  let videowrapper = document.createElement("video");
  videowrapper.src = selectedProject.finalproject[0].element;
  videowrapper.classList.add("video");
  fullscreen.append(videowrapper);
} else if (selectedProject.finalproject[0].format == "image") {
  console.log("C'est une image");
  fullscreen.style.backgroundImage = `url('${selectedProject.finalproject[0].element}')`;
}

//
//
//

const wrapperSwiper = document.querySelector(".swiper-wrapper");

for (let i = 0; i < selectedProject.step.length; i++) {
  // Création d'une slide qui va contenir toutes les infos
  let swiperContainer = document.createElement("div");
  // Ajout de la classe sur la slide
  swiperContainer.classList.add("swiper-slide");

  // Création d'une div qui va contenir l'image de la slide
  let imageContainer = document.createElement("div");
  // Ajout de la classe sur la div de l'image
  imageContainer.classList.add("swiper-image", "slide-animation");

  // Ajout de l'image récupérée dans le local storage
  imageContainer.style.backgroundImage = `url('${selectedProject.step[i].fullscreen}')`;

  // Ajout de la div contenant l'image à la slide
  swiperContainer.appendChild(imageContainer);
  //

  wrapperSwiper.append(swiperContainer);
}

let infoContainers = document.querySelectorAll(".swiper-slide");
console.log(infoContainers);

// Fct pour changer les infos du code en fonction de la position de la slide
const infoStep = document.querySelector(".projetinfos__stepnumber");
const infoName = document.querySelector(".projetinfos__stepname");
const infoDescript = document.querySelector(".projetinfos__stepdescript");

const nameartist = document.querySelector(".projetinfos__nameartist");
const nameproject = document.querySelector(".projetinfos__nameproject");

const indexContainer = document.querySelector(".projetinfos");
const swiperImage = document.querySelectorAll(".swiper-image");
// const noScroll = document.querySelector(".noScroll");
const swiperImageCount = swiperImage.length - 1;
let test = 0;

function updateInfo(activeSlideIndex, activeSlideData) {
  gsap.to([infoStep, infoName, infoDescript], {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      infoStep.textContent =
        activeSlideIndex === swiperImage.length ? "" : activeSlideIndex + "."; // Terciaire
      infoName.textContent = activeSlideData.stepName;
      infoDescript.textContent = activeSlideData.stepDescript;

      gsap.to([infoStep, infoName, infoDescript], {
        opacity: 1,
        duration: 0.3,
      });
    },
  });
}

window.onload = function () {
  var QrCodeApparition = document.querySelector(".qrcode");
  console.log(QrCodeApparition);

  // Création d'une fonction lors du changement de slide du slider
  swiper.on("slideChange", function () {
    // On récupère l'index de la slide active
    const activeSlideIndex = swiper.activeIndex;
    const infoStepNumber = activeSlideIndex - 1;
    // On fait une condition pour vérifier qu'on ne se trouve pas sur la première slide (index 0)
    if (activeSlideIndex > 0) {
      // On stock les données du tableau dans une constante en fonction du la longueur du tableau step dans le JSON.
      const activeSlideData = selectedProject.step[infoStepNumber];
      // const activeSlidePersonnalData = selectedProject;

      // // On met la donnée de la step dans l'html. Elle est égale à la position de l'index
      // if (activeSlideIndex == swiperImage.length) {
      //   infoStep.style.opacity = "0";
      // } else {
      //   infoStep.style.opacity = "1";
      // }
      // infoStep.textContent = activeSlideIndex + ".";

      // // On met la valeur du nom de l'étape dans l'html
      // infoName.textContent = activeSlideData.stepName;
      // //On met la valeur du nom de la description dans l'html
      // infoDescript.textContent = activeSlideData.stepDescript;

      updateInfo(activeSlideIndex, activeSlideData);

      //
      nameartist.textContent = selectedProject.etudiant;
      //
      nameproject.textContent = selectedProject.nom;

      projectInfo.style.position = "absolute";
      projectInfoTween.play();
    } else {
      projectInfo.style.position = "fixed";
      projectInfoTween.reverse();
    }
    const tl = gsap.timeline();

    if (swiper.isEnd) {
      console.log(test);

      indexContainer.style.zIndex = "-1";
      swiperImage[swiperImageCount].style.outline = "50px none black";
      tl.to(".projetinfos__artist, .projetinfos__stepcontainer", {
        // height: 800,
        duration: 1,
        ease: "power2.inOut",
        css: { "align-items": "flex-start", height: 800 },
        onComplete: () => {
          console.log("Animation terminée et je suis joie !");
        },
      });
      tl.to(
        ".projetinfos",
        {
          duration: 1,
          ease: "power2.inOut",
          bottom: 600,
          onComplete: () => {
            console.log("Animation terminée !");
          },
        },
        0
      );
      tl.to(
        ".qrcode",
        {
          duration: 0.5,
          ease: "power2.inOut",
          display: "flex",
          opacity: 1,
          onComplete: () => {
            console.log("Animation terminée !");
          },
        },
        0
      );
      // noScroll.style.overflow = "auto";
      console.log(QrCodeApparition);
      // QrCodeApparition.style.display = "flex";
      test = 1;
      console.log(test);
      // //
      // //
    } else if (test === 1) {
      test = 0;
      //
      //
      console.log(test);
      indexContainer.style.zIndex = "10000000000";
      swiperImage[swiperImageCount - 1].style.outline = "50px solid black";

      console.log("pas dernière slide");
      QrCodeApparition.style.display = "none";

      const reverseTl = gsap.timeline(); // Créez une nouvelle timeline pour l'inversion

      reverseTl.to(".qrcode", {
        duration: 0.4,
        ease: "power2.inOut",
        opacity: 0,
        display: "none",
        onComplete: () => {
          console.log("Animation terminée !");
        },
      });

      reverseTl.to(
        ".projetinfos__artist, .projetinfos__stepcontainer",
        {
          // height: 200, // Inverse la hauteur
          duration: 0.4,
          ease: "power2.inOut",
          css: { "align-items": "center", height: 200 },
          onComplete: () => {
            console.log("Animation inversée terminée !");
          },
        },
        0
      );

      reverseTl.to(
        ".projetinfos",
        {
          duration: 0.4,
          ease: "power2.inOut",
          bottom: 0, // Inverse la position
          onComplete: () => {
            console.log("Animation inversée terminée !");
          },
        },
        0
      );

      tl.add(reverseTl);

      console.log(test);
    }
  });
};
