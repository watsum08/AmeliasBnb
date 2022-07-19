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
    <h5 id="chambreNo">Chambre 1</h5>
    <div id="IMGchambre" class="IMGchambre">

      <div class="mySlides fade">
        <img src="img/imgchambres/chambre2.jpg" onload="currentSlide(1)" style="width:100%">
      </div>
      
      <div class="mySlides fade">
        <img src="img/imgchambres/chambre6.jpg" style="width:100%">
      </div>
      
      <div class="mySlides fade">
        <img src="img/imgchambres/chambre7.jpg" style="width:100%">
      </div>
      
      <a id="leftArr" class="prev arrows" onclick="plusSlides(-1); changeRoom();">&#10094;</a>
      <a id="rightArr" class="next arrows" onclick="plusSlides(1); changeRoom()">&#10095;</a>
      
      </div>
      <br>

    <div class="rooms" style="display: block"> <!-- première chambre -->
      <ul id="caracteristiques">
        <h4>Caractéristiques</h4>
        <li>Lit double</li>
        <li>Réfrigérateur</li>
        <li>Salle de bains</li>
        <li>Télévision HD</li>
        <li>Wi-Fi à haut débit</li>
        <li>Place de parking privée</li>
      </ul>
      <ul id="prix">
        <h4>Prix</h4>
        <li>Haute saison : <b>CHF 120.- / Nuit</b></li>
        <li>Hors saison : <b>CHF 90.- / Nuit</b></li>
      </ul>
      <h3>Veuillez nous contacter pour connaître la disponibilité des chambres</h3>
    </div>

    <div class="rooms">
      <ul id="caracteristiques">
        <h4>Caractéristiques</h4>
        <li>Lit double</li>
        <li>Réfrigérateur</li>
        <li>Salle de bains</li>
        <li>Télévision HD</li>
        <li>Wi-Fi à haut débit</li>
        <li>Place de parking privée</li>
      </ul>
      <ul id="prix">
        <h4>Prix</h4>
        <li>Haute saison : <b>CHF 160.- / Nuit</b></li>
        <li>Hors saison : <b>CHF 120.- / Nuit</b></li>
      </ul>
      <h3>Veuillez nous contacter pour connaître la disponibilité des chambres</h3>
    </div>

    <div class="rooms">
      <ul id="caracteristiques">
        <h4>Caractéristiques</h4>
        <li>Lit double</li>
        <li>Réfrigérateur</li>
        <li>Salle de bains</li>
        <li>Télévision HD</li>
        <li>Wi-Fi à haut débit</li>
        <li>Place de parking privée</li>
      </ul>
      <ul id="prix">
        <h4>Prix</h4>
        <li>Haute saison : <b>CHF 200.- / Nuit</b></li>
        <li>Hors saison : <b>CHF 150.- / Nuit</b></li>
      </ul>
      <h3>Veuillez nous contacter pour connaître la disponibilité des chambres</h3>
    </div>


  </main>
  <script src="js/main.js"></script>
</body>
</html>