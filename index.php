<!DOCTYPE html>

<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Amelia's Bed and Breakfast</title>
  <meta name="description" content="Amelia's Bed and Breakfast">
  <meta name="author" content="Marc Meynet">

  <meta property="og:title" content="Amelia's Bed and Breakfast">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.ameliasbnb.ch/">
  <meta property="og:description" content="Amelia's Bed and Breakfst">
  <meta property="og:image" content="img/logoamelia.png">

  <link rel="icon" href="img/favicon.ico">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"> 

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <?php
  include_once("header.php");
  ?>
  <main>
    <div class="container">
      <div class="imagesAccueil">

        <div class="mySlides fade">
          <img src="img/frontimage.jpg" onload="currentSlide(1)" style="width:100%">
        </div>
        
        <div class="mySlides fade">
          <img src="img/frontimage2.jpg" style="width:100%">
        </div>
        
        <div class="mySlides fade">
          <img src="img/welcome.jpg" style="width:100%">
        </div>

        </div>
        <br>
        
        <div style="text-align:center">
          <span class="dot" onclick="currentSlide(1)"></span> 
          <span class="dot" onclick="currentSlide(2)"></span> 
          <span class="dot" onclick="currentSlide(3)"></span> 
        </div>
      <h2>Durant votre séjour, si les conditions météo le permettent, vous avez accès à la piscine privée et au jacuzzi*.</h2>
      <figure>
        <img class="imagesAccueil" src="img/welcome2.jpg">
        <figcaption>*supplément de CHF 10.- / personne / heure pour le jacuzzi</figcaption>
      </figure>
      <h2>Vous avez également une cuisine et une buanderie commune à votre disposition.</h2>
      <div class="imagesAccueil">Photo Cuisine</div>
      <h2>Choisissez votre chambre et réservez dès maintenant</h2>
      <a href="chambres.php"><button id="btn-VoirChambres">VOIR LES CHAMBRES</button></a>
    </div>
  </main>
  <script src="js/main.js"></script>
</body>
</html>