// Récupérez les données du projet depuis le localStorage
const selectedQRCode = JSON.parse(localStorage.getItem("selectedProject"));

if (selectedQRCode) {
  const countStep = selectedQRCode.step.length;
  const QRCodeLink = selectedQRCode.step[countStep - 1].QRCode;

  // Assurez-vous que les données du projet existent et sont valides
  // Créer une instance de QRCode
  let qrCodeContainer = document.createElement("div");
  qrCodeContainer.classList.add("qrcode");

  const container = document.querySelectorAll(".swiper-slide");
  const containerSelected = container[countStep - 1];

  // Ajoutez le conteneur du code QR à la diapositive
  containerSelected.appendChild(qrCodeContainer);

  const qrcode = new QRCode(qrCodeContainer, {
    text: QRCodeLink,
    width: 192,
    height: 192,
    colorLight: "white",
    colorDark: "red",
  });
} else {
  // Gérez le cas où aucune donnée de projet n'a été trouvée
  console.error(
    "Aucune donnée de projet n'a été trouvée dans le localStorage."
  );
}
