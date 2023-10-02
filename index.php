<?php
  $json_file = file_get_contents('assets/json/projects.json');
  $data = json_decode($json_file, true);

  if (isset($data['Project']) && is_array($data['Project'])) {
    foreach ($data['Project'] as $tab_name) {
        if (isset($data[$tab_name])) {
            $tab_el = $data[$tab_name];
        }
    }
  }
?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ilab</title>

    <link rel="stylesheet" href="styles/style.css">


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>

    <script src="scripts/main.js" defer></script>
</head>

<body>

    <main>
        <section class="choose">
            <h1>Réalisation coup de coeur</h1>

            <ul>
                
            </ul>
        </section>

        <section class="image">

        </section>
    </main>
    
</body>
</html>