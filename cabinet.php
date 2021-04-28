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
  <link type="text/css" rel="stylesheet" href="css/materialize.css" media="screen,projection" />
  <link rel="stylesheet" href="css/style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>User</title>
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col l12 center-align">
        <h1 class="user-cabinet-header">Кабинет</h1>
      </div>
      <div class="goodout"></div><br />
    </div>
    <div class="col l12 right-align">
      <button id="logout" class="waves-effect waves-light btn  left"><i class="material-icons right">logout</i>выйти</button>

      <div class="col l12 right-align">
        <button id="lognew" class="waves-effect waves-light btn"><i class="material-icons right">build</i>Править</button>
      </div>
    </div>
    <br />
    <hr />
    <div class="row">
      <div class="col l6">
        <h3>Перезаписать данные</h3>
        <form>
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
              <input id="form-birthday" name="birthday" type="text" class="datepicker">
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
  <script src="script/materialize.js"></script>
  <script src="js/ajax.js"></script>
  <script src="js/get_user_data.js"></script>
  <script src="js/logOut.js"></script>
  <script src="js/main.js"></script>
</body>

</html>