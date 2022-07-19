<?php

if($_POST) {
    $nom = "";
    $prenom = "";
    $email = "";
    $title = "";
    $telephone = "";
    $message = "";
    $email_body = "<div>";
    $recipient = "contact@ameliasbnb.ch";
      
    if(isset($_POST['Nom'])) {
        $nom = filter_var($_POST['Nom'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Nom:</b></label>&nbsp;<span>".$nom."</span>
                        </div>";
    }

    if(isset($_POST['Prenom'])) {
        $prenom = filter_var($_POST['Prenom'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Prenom:</b></label>&nbsp;<span>".$prenom."</span>
                        </div>";
        $title = "Contact form www.ameliasbnb.ch : $nom $prenom";
    }
 
    if(isset($_POST['Email'])) {
        $email = $_POST['Email'];
        $email_body .= "<div>
                           <label><b>Email:</b></label>&nbsp;<span>".$email."</span>
                        </div>";
    }
      
    if(isset($_POST['Telephone'])) {
        $telephone = filter_var($_POST['Telephone'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Téléphone:</b></label>&nbsp;<span>".$telephone."</span>
                        </div>";
    }
      
    if(isset($_POST['Message'])) {
        $message = htmlspecialchars($_POST['Message']);
        $email_body .= "<div>
                           <label><b>Message:</b></label>
                           <div>".$message."</div>
                        </div>";
    }
      
    $email_body .= '<a href="mailto:'.$email.'">Cliquez ici pour répondre au message</a></div>';
 
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";
    
?>

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
    <?php
    if(mail($recipient, $title, $email_body, $headers)) {
      echo "<p>Merci de nous avoir contacté. Vous aurez une réponse en moins de 24 heures.</p>";
      } else {
          echo "<p>Malheureusement l'envoi de votre message a échoué</p>";
      }
        
      } else {
        echo "<p>Veuillez réssayer d'envoyer un message</p>";
    }
    ?>
    <br><p>Vous allez être redirigé vers la page de contact.</p>
    <script>
      setTimeout(function () {
      window.location.href= "https://www.ameliasbnb.ch/contact.php"; // the redirect goes here

    },4000);
    </script>
    

    <br><p>Vous pouvez aussi nous contacter par téléphone ou par mail</p><br>
    <a href="tel:+41796181111" class="contactInfo">+41 79 618 11 11</a><br>
    <a href="mailto:contact@ameliasbnb.ch" class="contactInfo">contact@ameliasbnb.ch</a>
  </main>
</body>
</html>