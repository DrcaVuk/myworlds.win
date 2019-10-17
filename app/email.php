<?php 

require_once '../vendor/autoload.php'; 

// Create the Transport
$transport = (new Swift_SmtpTransport('', ))
  ->setUsername('')
  ->setPassword('') 
;
if(isset($_POST)) {

    $email = $_POST['email']; 
    $message = $_POST['message'];
// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message
$message = (new Swift_Message('Wonderful Subject'))
  ->setFrom([ $email])
  ->setTo([''])
  ->setBody($message)
  ;

// Send the message
$result = $mailer->send($message);
echo "true"; 
} else {
 echo "false";  
}
