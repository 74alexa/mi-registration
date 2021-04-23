<?php
require_once 'config.php';

$name = trim($_POST['name']);
$pass = trim($_POST['pass']);
$email = trim($_POST['email']);
$birthday = trim($_POST['birthday']);
$sex = trim($_POST['sex']);

if ($name == '' OR $pass == '' OR $email == '' OR $birthday == '' OR $sex == '') {
  echo 2;
  die;
}

$conect = new mysqli($servername, $username, $password, $dbname);
if ($conect->connect_error) {
  die("Ошибка подключения:" . $conect->connect_error);
}
$sql = "INSERT INtO reg_user(name, email, password, birthday, sex)VALUES ('".$name."', '".$email."', '".$pass."', '".$birthday."', '".$sex."')";

if ($conect->query($sql) === TRUE) {
  echo 1;
}else{
  echo "Error: ". $sql . "<br" . $conect->error;
}

$conect->close();
?>