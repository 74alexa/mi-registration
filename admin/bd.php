<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "userss";

function connect()
{
    $conn = new mysqli("localhost", "root", "root", "userss");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    mysqli_set_charset($conn, "utf8");
    return $conn;
}
// $conn = new mysqli($servername, $username, $password, $dbname);

// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// $sql = "SELECT * FROM `biograf`";
// $result = $conn->query($sql);

// if ($result->num_rows > 0) {

//     while ($row = $result->fetch_assoc()) {
//         echo "id: " . $row["id"] . " - Name: " . $row["nameRu"] . " " . $row["nameEn"] . $row["img_log"] . "<br>";
//     }
// } else {
//     echo "0 results";
// }
// $conn->close();


// $conn = mysqli_connect('$servername', '$username', '$password', '$dbname');
//     if (!$conn) {
//         die("Connection failed: " . 'mtsqli_connect_error()');
function init()
{
    $conn = connect();
    $sql = "SELECT * FROM `biografi`";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}
function selectOneGoods()
{
    $conn = connect();
    $id = $_POST['gid'];
    $sql = "SELECT * FROM biografi WHERE id= '$id' ";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo json_encode($row);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}
function updateGoods()
{
    $conn = connect();
    $id = $_POST['id'];
    $nameRu = $_POST['nameRu'];
    $nameEn = $_POST['nameEn'];
    $img_log = $_POST['img_log'];
    $career = $_POST['career'];
    $rost = $_POST['rost'];
    $date_of_birth = $_POST['date_of_birth'];
    $price_of_birth = $_POST['price_of_birth'];
    $genres = $_POST['genres'];
    $total_movies = $_POST['total_movies'];
    $imge1 = $_POST['imge1'];
    $imge2 = $_POST['imge2'];
    $imge3 = $_POST['imge3'];
    $imge4 = $_POST['imge4'];
    $imge5 = $_POST['imge5'];
    $imge6 = $_POST['imge6'];
    $fact = $_POST['fact'];

    $sql = "UPDATE biografi SET nameRu='$nameRu', nameEn='$nameEn',img_log='$img_log', career='$career', rost='$rost',date_of_birth='$date_of_birth',  price_of_birth='$price_of_birth', genres='$genres', total_movies='$total_movies',imge1='$imge1', imge2='$imge2', imge3='$imge3', imge4='$imge4', imge5='$imge5', imge6='$imge6', fact='$fact' WHERE id='$id' ";
    if (mysqli_query($conn, $sql)) {
        echo "ok";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }
    mysqli_close($conn);
    // writeJSON();
}

function newGoods()
{
    $conn = connect();
    $nameRu = $_POST['nameRu'];
    $nameEn = $_POST['nameEn'];
    $img_log = $_POST['img_log'];
    $career = $_POST['career'];
    $rost = $_POST['rost'];
    $date_of_birth = $_POST['date_of_birth'];
    $price_of_birth = $_POST['price_of_birth'];
    $genres = $_POST['genres'];
    $total_movies = $_POST['total_movies'];
    $imge1 = $_POST['imge1'];
    $imge2 = $_POST['imge2'];
    $imge3 = $_POST['imge3'];
    $imge4 = $_POST['imge4'];
    $imge5 = $_POST['imge5'];
    $imge6 = $_POST['imge6'];
    $fact = $_POST['fact'];

    // $sql = "UPDATE biograf SET nameRu='$nameRu', nameEn='$nameEn',img_log='$img_log', career='$career', date_of_birth='$date_of_birth', price_of_birth='$price_of_birth', genres='$genres', total_movies='$total_movies',imge1='$imge1', imge2='$imge2', imge3='$imge3', imge4='$imge4', imge5='$imge5', imge6='$imge6', fact='$fact' WHERE id='$id' ";
    // if (mysqli_query($conn, $sql)) {
    //     echo "ok";
    // } else {
    //     echo "Error updating record: " . mysqli_error($conn);
    // }
    $sql = "INSERT INTO biografi (nameRu, nameEn,img_log, career, rost, date_of_birth, price_of_birth, genres, total_movies,imge1, imge2, imge3, imge4, imge5, imge6, fact)
    VALUES ('$nameRu', '$nameEn','$img_log', '$career', '$rost', '$date_of_birth','$price_of_birth', '$genres', '$total_movies','$imge1','$imge2', '$imge3', '$imge4', '$imge5', '$imge6', '$fact')";

    if ($conn->query($sql) === TRUE) {
        echo "ok";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    mysqli_close($conn);
    // writeJSON();
}
// function writeJSON()
// {
//     $conn = connect();
//     $sql = "SELECT * FROM `biograf`";
//     $result = mysqli_query($conn, $sql);

//     if (mysqli_num_rows($result) > 0) {
//         $out = array();
//         while ($row = mysqli_fetch_assoc($result)) {
//             $out[$row["id"]] = $row;
//         }
//         file_put_contents('../pure.json', json_encode($out));
//     } else {
//         echo "0";
//     }
//     mysqli_close($conn);
// }
function loadGoods()
{
    $conn = connect();
    $sql = "SELECT * FROM `biografi`";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}
