document.querySelector('#form-submit').onclick = function(event) {
    event.preventDefault()
    console.log('test')
    let name = document.querySelector('#form-name').value;
    let pass = document.querySelector('#form-pass').value;
    let email = document.querySelector('#form-email').value;
    let birthday = document.querySelector('#form-birthday').value;
    let sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break
        }
    }
    let forma = {
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birthday,
        "sex": sex,
    }
    ajax('file/obr.php', 'POST', form, forma);

    function form(resul) {
        console.log(resul);
        if (resul == 2) {
            M.toast({ html: 'Заполните поля' });
        } else if (resul == 1) {
            M.toast({ html: 'Всё ОК' });
            closeModal();
        } else {
            M.toast({ html: 'Ошибка. Попробуйте ещё раз' });
        }
    }
}

// Регистрация

document.querySelector('#login-submit').onclick = function(event) {
    event.preventDefault()
    let email = document.querySelector('#login-email').value;
    let pass = document.querySelector('#login-pass').value;
    let forma = {
        "email": email,
        "pass": pass,
    }
    ajax('file/login.php', 'POST', login, forma);

    function login(resul) {
        console.log(resul);
        if (resul == 2) {
            M.toast({ html: 'Заполните поля' });
        } else if (resul == 0) {
            M.toast({ html: 'Пользователь не найден' });
        } else {
            console.log(resul);
            rezultat = JSON.parse(resul);
            let da = new Date();
            da.setTime(da.getTime() + (100 * 60 * 1000));
            let expires = da.toUTCString();

            localStorage.setItem(`${rezultat.email}`, 22);
            document.cookie = `email=${rezultat.email}; expires=" + ${expires}; path=/`;
            location.href = "cabinet.php";
        }
    }
}