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
  
  <script src="js/main.js"></script>

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

    <h5>Contactez-nous</h5>
    
    <form action="sendmail" method="post">
      <input type="text" id="Nom" name="Nom" size="24" required>
      <label for="Nom">Nom:</label><br>
      <input type="text" id="Prenom" name="Prenom" size="24" required>
      <label for="Prenom">Prenom:</label><br>
      <input type="text" id="Email" name="Email" size="24" required>
      <label for="Email">Email:</label><br>
      <input type="text" id="Telephone" name="Telephone" size="24" required>
      <label for="Telephone">Téléphone:</label><br>
      <textarea id="Message" name="Message" placeholder="Écrivez votre message ici.." rows="8" cols="24" required></textarea>
      <label for="Message">Message:</label><br>
      <input type="submit" id="btn-Submit" value="Envoyer">
    </form>
    

    <p>Vous pouvez aussi nous contacter par téléphone ou par mail</p><br>
    <a href="tel:+41796181111" class="contactInfo">+41 79 618 11 11</a><br>
    <a href="mailto:contact@ameliasbnb.ch" class="contactInfo">contact@ameliasbnb.ch</a>
  </main>
</body>
</html>