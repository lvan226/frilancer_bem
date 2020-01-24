<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
$name = trim($_POST["userName"]);
$email = trim($_POST["userEmail"]);
$text_message = trim($_POST["userText"]);

var_dump($_POST);

echo '1';
// send an email
$to = 'lvan226@yandex.ru';
 
$subject = 'Заявка с Ainaru';
 
// message
$message = '
<html>
<head>
<title>Заявка с сайта Ainaru</title>
</head>
<body>
<p>Заявка с сайта</p>
<p>Имя: ' . $name . '</p>
<p>Е-маил: ' . $email . '</p>
<p>Текст сообщения: ' . $text_message . '</p>
';
 
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-Type: text/html; charset=utf-8' . "\r\n";
 
$headers .= 'From: Ainaru.ru <1ivan.dyadyura226@gmail.com>' . "\r\n";
$headers .= 'Reply-To: Ainaru.ru <lvan226@yandex.ru>' . "\r\n";
 
// Mail it
mail($to, $subject, $message, $headers);
 
?>