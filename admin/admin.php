<?php
if (!isset($_COOKIE['email']) or trim($_COOKIE['email']) == '') {
  header('Location: index.html');
  exit();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div class="row">
    <div class="col l6">
      <div class="goods-out"></div>
      <h2>Артист</h2>
      <p>Имя ру:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="nameRu"></textarea></p>
      <p>Имя angl:&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="nameEn"></textarea></p>
      <p>Изображение:&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="img_log"></textarea></p>
      <p>Карера:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="career"></textarea></p>
      <p>Рост:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="rost"></textarea></p>
      <p>Дата рождения:&nbsp;&emsp;<input type="date" id="date_of_birth"></p>
      <p>Место рождения:&emsp;<textarea rows="1" cols="90" type="text" id="price_of_birth"></textarea></p>
      <p>Жанры:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="genres"></textarea></p>
      <p>Всего фильмов:&nbsp;&emsp;<textarea rows="1" cols="90" type="text" id="total_movies"></textarea></p>
      <p>Фото1:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="imge1"></textarea></p>
      <p>Фото2:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="imge2"></textarea></p>
      <p>Фото3:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="imge3"></textarea></p>
      <p>Фото4:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="imge4"></textarea></p>
      <p>Фото5:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="imge5"></textarea></p>
      <p>Фото6:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="imge6"></textarea></p>
      <p>Интересные факты:<textarea rows="10" cols="150" type="text" id="fact"></textarea></p>
      <input type="hidden" id="gid">
      <button class="add-to-db">Добавить</button>
    </div>
  </div>

  <script src="jQari.js"></script>
  <script src="admin.js"></script>
</body>

</html>