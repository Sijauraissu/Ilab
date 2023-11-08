// Récupérez les données du projet depuis le localStorage
const selectedQRCode = JSON.parse(localStorage.getItem("selectedProject"));

if (selectedQRCode) {
  const countStep = selectedQRCode.step.length;
  const QRStep = countStep - 1;
  const QRCodeLink = selectedQRCode.step[QRStep].QRCode;

  // Assurez-vous que les données du projet existent et sont valides
  // Créer une instance de QRCode
  let qrCodeContainer = document.createElement("div");
  qrCodeContainer.classList.add("qrcode");

  const containerSelected = document.querySelector(".projetinfos__artist");
  // const containerSelected = container[countStep];

  // Ajoutez le conteneur du code QR à la diapositive
  containerSelected.appendChild(qrCodeContainer);

  const qrcode = new QRCode(qrCodeContainer, {
    text: QRCodeLink,
    width: 192,
    height: 192,
    colorLight: "white",
    colorDark: "#357E78",
  });
} else {
  // Gérez le cas où aucune donnée de projet n'a été trouvée
  console.error(
    "%cAucune donnée de projet n'a été trouvée dans le localStorage.",
    "color: red; font-size: 16px;"
  );
}
