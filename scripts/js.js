function executeAfterCardsLoaded() {
  const cartes = document.querySelectorAll(".grid__el");
  console.log(cartes);
  const nombreDeCartes = cartes.length;
  console.log(nombreDeCartes);

  const nombreDeTirages = Math.floor(Math.random() * 3) + 2; // Génère un nombre entre 2 et 4 inclus
  console.log("Le nombre de tirages aléatoires est : " + nombreDeTirages);

  const tl = gsap.timeline(); // Crée une timeline GSAP pour gérer les animations

  const duration = 1; // Durée de l'animation en secondes

  const projetsAAfficher = []; // Crée un tableau vide pour stocker les nouveaux projets à afficher

  // Animation GSAP pour toutes les cartes sélectionnées avec rotation
  tl.to(cartes, {
    duration: duration,
    scale: 0.2,
    opacity: 0,
    transformOrigin: "center center",
    rotation: 360, // Ajout de l'effet de rotation (360 degrés)
    stagger: 0.1, // Délai entre le début de chaque animation
    onComplete: () => {
      // Remplace les données du projet sélectionné par les nouvelles données depuis listProjects
      cartes.forEach((carte) => {
        const nouveauProjet = listProjects.shift(); // Prend le premier projet de listProjects
        if (nouveauProjet) {
          carte.style.backgroundImage = `url('${nouveauProjet.image}')`; // Modifie l'image de fond
          projetsAAfficher.push(nouveauProjet);
        }
      });
    },
  });

  // Ajouter une animation GSAP pour faire réapparaître les cartes avec rotation inverse
  tl.to(cartes, {
    duration: duration,
    scale: 1,
    opacity: 1,
    transformOrigin: "center center",
    rotation: 0, // Rotation inverse pour réinitialiser la rotation
    onComplete: () => {
      // Applique une taille aléatoire pour les projets qui subissent la deuxième animation
      cartes.forEach((carte) => {
        const randomPercentage = 80 + Math.random() * 20;
        carte.style.transform = `scale(${randomPercentage / 100})`;
      });
    },
  });

  console.log(
    "%cLe fichier contenant les animations se charge bien ! ✅",
    "color: green; font-size: 16px;"
  );
}

// function executeAfterCardsLoaded() {
//   const cartes = document.querySelectorAll(".grid__el");
//   console.log(cartes);
//   const nombreDeCartes = cartes.length;
//   console.log(nombreDeCartes);

//   const nombreDeTirages = Math.floor(Math.random() * 3) + 2; // Génère un nombre entre 2 et 4 inclus
//   console.log("Le nombre de tirages aléatoires est : " + nombreDeTirages);

//   const tl = gsap.timeline(); // Crée une timeline GSAP pour gérer les animations

//   const duration = 1; // Durée de l'animation en secondes
//   const staggerDelay = 0.1; // Délai entre le début de chaque animation

//   const projetsAAfficher = []; // Crée un tableau vide pour stocker les nouveaux projets à afficher
//   var nouveauProjet = null;

//   for (let i = 0; i < nombreDeTirages; i++) {
//     const nombreAleatoire = Math.floor(Math.random() * nombreDeCartes);
//     console.log(nombreAleatoire);

//     // Animation GSAP pour la carte tirée au sort avec rotation
//     tl.to(cartes[nombreAleatoire], {
//       duration: duration,
//       scale: 0.2,
//       opacity: 0,
//       transformOrigin: "center center",
//       rotation: 180, // Ajout de l'effet de rotation (360 degrés)
//       onComplete: () => {
//         // Remplace les données du projet sélectionné par les nouvelles données depuis listProjects
//         nouveauProjet = listProjects.shift(); // Prend le premier projet de listProjects

//         if (nouveauProjet) {
//           // projetsAAfficher.push(nouveauProjet);
//           tabShuffle.push(nouveauProjet);
//           // console.log(tabShuffle);
//           console.log(projetsAAfficher[i].image);
//           console.log(nouveauProjet.image);

//           console.log(nombreAleatoire);
//           // cartes[
//           //   nombreAleatoire
//           // ].style.backgroundImage = `url('${projetsAAfficher[i].image}')`; // Modifie l'image de fond
//           cartes[
//             nombreAleatoire
//           ].style.backgroundImage = `url('${nouveauProjet.image}')`; // Modifie l'image de fond
//         }
//       },
//     });

//     // Ajoute un délai entre le début de chaque animation
//     tl.set(cartes[nombreAleatoire], { delay: staggerDelay });

//     // Ajoute le projet correspondant à la carte tirée au sort au tableau des projets à afficher
//     projetsAAfficher.push(listProjects[nombreAleatoire]);
//   }

//   // Ajouter une animation GSAP pour faire réapparaître les cartes avec rotation inverse
//   tl.to(cartes, {
//     duration: duration,
//     scale: 1,
//     opacity: 1,
//     transformOrigin: "center center",
//     rotation: 0, // Rotation inverse pour réinitialiser la rotation
//     onComplete: () => {
//       // Applique une taille aléatoire pour les projets qui subissent la deuxième animation
//       cartes.forEach((carte) => {
//         const randomPercentage = 80 + Math.random() * 20;
//         carte.style.transform = `scale(${randomPercentage / 100})`;
//       });

//       // Ajoute une animation de rotation aux cartes sélectionnées lors de la première animation
//       cartes.forEach((carte) => {
//         gsap.to(carte, {
//           duration: 1,
//           yoyo: true, // Animation d'aller-retour
//         });
//       });
//     },
//   });

//   console.log(
//     "%cLe fichier contenant les animations se charge bien ! ✅",
//     "color: green; font-size: 16px;"
//   );
// }
