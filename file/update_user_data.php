<?php
require_once 'config.php';
$email = trim($_POST['email']);
$name = trim($_POST['name']);
$pass = trim($_POST['pass']);
$birthday = trim($_POST['birthday']);
if ($email == ''){
  echo 2;
  die;
}
$conect = new mysqli($servername, $username, $password, $dbname);
if ($conect->connect_error) {
  die("Ошибка подключения:" . $conect->connect_error);
}
$sql = "UPDATE reg_user SET name='".$name."', password='".$pass."', birthday='".$birthday."' WHERE email='".$email."'";
$result = $conect->query($sql);

if ($conect->query($sql) === TRUE) {
  
  echo 1;
}else{
  echo "Eeeor:" . $conect->error;
}

$conect->close();
?>