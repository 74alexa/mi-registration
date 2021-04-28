document.querySelector('#logout').onclick = function() {
    let kuc = document.cookie;
    console.log(kuc);
    let d = new Date();
    d.setTime(d.getTime() - (100 * 60 * 1000));
    let expires = d.toUTCString();
    document.cookie = `${kuc}; expires=${expires}; path=/`;
    location.reload();
}
document.querySelector('#lognew').onclick = function() {
    window.location.href = './admin/admin.php';
}