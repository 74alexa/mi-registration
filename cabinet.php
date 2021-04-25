<?php
if (!isset($_COOKIE['email']) or trim($_COOKIE['email']) == '') {
    header('Location: index.html');
    exit();
} ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="img/icon/user.png" type="image/x-icon">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link type="text/css" rel="stylesheet" href="css/materialize.css"  media="screen,projection"/>
      <link rel="stylesheet" href="css/style.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>User</title>
  </head>
  <body>
  <div class="container">
    <div class="row">
        <div class="col l12 center-align">
        <h1 class="user-cabinet-header">Кабинет</h1></div>
        <div class="goodout"></div><br/>
    </div>
    <div class="col l12 right-align">
    <button id="logout" class="waves-effect waves-light btn"><i class="material-icons right">logout</i>выйти</button>
    </div>

<br/>
<hr/>
    <div class="row">
      <div class="col l6">
      <h3>Перезаписать данные</h3>
        <form >
        <div class="row">
        <div class="input-field col s12">
        <input id="form-name" type="text" name="name" class="validate">
        <label class="active" for="form-name">Имя</label>
        </div>
        <div class="input-field col s12">
        <input id="form-pass" type="text" name="pass" class="validate">
        <label class="active" for="form-pass">Пвроль</label>
        </div>
        <div class="input-field col s12">
        <input id="form-email" type="text" name="email" class="validate">
        <label class="active" for="form-pass">Email</label>
        </div>
        <div class="input-field col s12">
        <input id="form-birthday" name="birthday"  type="text" class="datepicker">
        <label class="active" for="form-birthday">День рождения</label>
        </div>
        </div>
        <div class="col l12 right-align">
        <button id="form-submit" class="waves-effect waves-light btn"><i class="material-icons right">assignment_returned</i>Обновить</button>
        </div>
        </form>
      </div>
    </div>
    </div>
    <hr>
    <div class="row">
    <div class="col l6">
    <div class="goods-out"></div>
    <h2>Артист</h2>
    <p>Имя ру:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="ruName"></textarea></p>
    <p>Имя angl:&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="firstName"></textarea></p>
    <p>Изображение:&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="logo_img"></textarea></p>
    <p>Карера:&emsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="karer"></textarea></p>
    <!-- <p>Дата рождения:&nbsp;&emsp;<textarea rows="1" cols="90" type="text" id="date_of_birth"></textarea></p> -->
    <p>Дата рождения:&nbsp;&emsp;<input type="date" id="date_of_birth"></p>
    <p>Задиак:&nbsp;&emsp;&emsp;&emsp;&emsp;<textarea rows="1" cols="90" type="text" id="img_zadiac"></textarea></p>
    <p>Место рождения:&emsp;<textarea rows="1" cols="90" type="text" id="mest_roz"></textarea></p>
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

<script src="script/materialize.js"></script>
<script src="js/ajax.js"></script>
<script src="js/get_user_data.js"></script>
<script src="js/logOut.js"></script>
<script src="js/main.js"></script>
</body>
</html>