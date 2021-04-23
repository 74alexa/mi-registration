let userEmail = getCookie('email');

ajax('file/get_user_data.php', 'post', getUserData, { "email": userEmail });

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUserData(result) {
    result = JSON.parse(result)
    console.log(result);
    document.querySelector('.goodout').innerHTML = `Ваше имя: ${result.name} <br/> Email: ${result.email}`;
    document.querySelector('#form-name').value = result.name;
    document.querySelector('#form-pass').value = result.password;
    document.querySelector('#form-email').value = result.email;
    document.querySelector('#form-birthday').value = result.birthday;
    M.updateTextFields();
}
document.querySelector('#form-submit').onclick = function(event) {
    event.preventDefault();
    let updateData = {
        "name": document.querySelector('#form-name').value,
        "pass": document.querySelector('#form-pass').value,
        "email": document.querySelector('#form-email').value,
        "birthday": document.querySelector('#form-birthday').value,
    };
    ajax('file/update_user_data.php', 'post', updateUserData, updateData);

}

function updateUserData(result) {
    console.log(result);
    if (result == 1) {
        M.toast({ html: 'Данные обновлены' });
    } else {
        M.toast({ html: 'Ошибка обнавления' });
    }
}