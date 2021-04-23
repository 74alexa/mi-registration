<?php
require_once 'config.php';

$email = trim($_POST['email']);
$pass = trim($_POST['pass']);

if ($email == '' OR $pass == '') {
  echo 2;
  die;
}

$conect = new mysqli($servername, $username, $password, $dbname);
if ($conect->connect_error) {
  die("Ошибка подключения:" . $conect->connect_error);
}
$sql = "SELECT name, email FROM reg_user WHERE email='".$email."' and password='".$pass."'";
$result = $conect->query($sql);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  echo json_encode($row);
}else{
  echo 0;
}

$conect->close();
?>