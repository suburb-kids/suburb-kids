<?php
  $to      = 'kontakt@suburb-kids.de';
  $subject = '[suburb-kids.de] Nachricht von ' . $_POST['name'];
  $message = $_POST['text'];
  $headers = 'From: ' . $_POST['email'] . "\r\n" .
             'Reply-To: ' . $_POST['email'] . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);

  header("Location: http://suburb-kids.de/#mail-sent");

  die();
?>
