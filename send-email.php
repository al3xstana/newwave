<?php
$name=$_POST['name'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$mailheader = 'From'.$name.'<'.$email.'>\r\n';

$recipient = 'al3xstana@gmail.com';

mail($recipient,$subject,$message,$mailheader)
or die ('Please Try Again');

echo 'message send';
?>
