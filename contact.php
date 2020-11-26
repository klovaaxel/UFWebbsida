<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $emal_from = 'ZITRUS UF'
  $emal_subject = 'New Message From Zitrus Contact Form'
  $emal_body =  "Name: $name.\n".
                "Email: $email.\n".
                "Message: $message.\n";

  $to = "info@zitrus.se";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $email \r\n";

  mail(string $to,string $email_subject,string $email_body,string $headers);

  header("location: index.html");
?>
