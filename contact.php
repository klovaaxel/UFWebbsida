<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $emal_from = 'ZITRUS UF'
  $emal_subject = 'New Message From Zitrus Contact Form'
  $emal_body =  "Name: $name.\n".
                "Email: $email.\n".
                "Message: $message.\n";

  $to = "contact@zitrus.se";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("location: index.html");
?>
