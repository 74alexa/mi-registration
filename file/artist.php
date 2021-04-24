<?php
require_once 'config.php';


$conect = new mysqli($servername, $username, $password, $dbname);
if ($conect->connect_error) {
  die("Ошибка подключения:" . $conect->connect_error);
}

// $sql = "SELECT * FROM artist";

// $result = $conect->query($sql);

// if ($result->num_rows > 0) {
//   $row = $result->fetch_assoc();
//   echo json_encode($row);
// }else{
//   echo 0;
// }

// $conect->close();

    $sql = "SELECT * FROM `artist`";
    $result = mysqli_query($conect, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    // mysqli_close($conect);
     $conect->close();

?>