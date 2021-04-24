<?php
$der = ($_POST['name']);
// json_encode($der);
// print_r($der);

require_once 'config.php';
$conect = new mysqli($servername, $username, $password, $dbname);

if ($conect->connect_error) {
  die("Ошибка подключения:" . $conect->connect_error);
}
// $ged = var_dump($_POST);

    $sql = "SELECT * FROM `biografi` WHERE id = $der";
    $resu = $conect->query($sql);

    if ($resu->num_rows > 0) {
      $row = $resu->fetch_assoc();
      echo json_encode($row);
    
    }else{
      echo 0;
    }
    
    $conect->close();

?>