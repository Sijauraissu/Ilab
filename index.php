<?php
  $json_file = file_get_contents('assets/json/projects.json');
  $data = json_decode($json_file, true);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://use.typekit.net/xrr4odr.css">


    <link rel="stylesheet" href="styles/style.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>

    <script src="scripts/main.js" defer></script>

    
</head>
<body>
    <main class="main">
        <section class="choose">
            <h1 class="titre titre--big">Réalisations coup de cœur</h1>


            <?php
                if (isset($data['Project']) && is_array($data['Project'])) {?>
                  
                    <ul class="btn__list">
                        <?php foreach ($data['Project'] as $tab_name) {
                            if (isset($data[$tab_name])) {
                                $tab_el = $data[$tab_name];?>

                                <li class="btn">
                                    <?php echo $tab_name ?>
                                </li><?php
                            }
                        }?>
                    </ul><?php
                    
                }?>

        </section>

        <section class="choose__grid">


        </section>
    </main>
    
</body>
</html>