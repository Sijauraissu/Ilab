<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projets</title>

    <link rel="stylesheet" href="https://use.typekit.net/xrr4odr.css">

    <link rel="stylesheet" href="styles/projects.css">
    <link rel="stylesheet" href="styles/qrcode.css">
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
    />

    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>


    <script src="scripts/swiper.js" defer></script>
    <script src="scripts/animation.js" defer></script>
    <script src="scripts/qrcode.js" defer></script>
    <!-- Bibliothèque pour le code QR -->
    <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>



</head>

    
<body class="noScroll">
    <main class="projetmain">
        <div class="projetinfos">
            <div class="projetinfos__artist">
                <p class="projetinfos__nameproject"></p>
                <p class="projetinfos__nameartist"></p>
            </div>

            <div class="projetinfos__stepcontainer">
                <p class="projetinfos__stepnumber"></p>
                <div class="projetinfos__stepinfos">
                    <p class="projetinfos__stepname"></p>
                    <p class="projetinfos__stepdescript"></p>
                </div>

            </div>
        </div>
        <a class="backBtn" href="index.php"></a>
        <!-- Slider main container -->
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="fullscreen"></div>
                </div>
        
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <div id="qrcode"></div>
    </main>
</body>
</html>