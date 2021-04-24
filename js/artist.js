ajax('file/artist.php', 'post', getArtistData);

function getArtistData(result) {
    console.log(result);
    result = JSON.parse(result)
    console.log(result);
    // for (let i = 0; i < result.length; i++) {
    //     const element = result[i];
    //     console.log(element)
    // }
    let out = '';
    for (let key in result) {



        // console.log(result);
        // for (let key in result) {
        //     // result = JSON.parse(result)

        //     // let c = result[i];
        //     console.log(result.id[1]);
        out += `<div id="${key}">`;
        out += `<div class="card-block1">`;
        out += `<img src="${result[key].img}" alt="">`;
        out += `<p>${result[key].name}</p>`;
        out += `</div>`;
        out += `</div>`;
    }

    // document.querySelector('.goodout').innerHTML = `Ваше имя: ${result.name} <br/> Email: ${result.email}`;
    document.querySelector('.cardy').innerHTML = out;
    // document.querySelector('#artist-img').innerHTML = `<img src="${result[2].img}">`;
}
document.querySelector('.cardy').onclick = tur;
let idArt = "";

function tur(event) {
    event.preventDefault();
    idArt = event.path[2].id;
    let idOn = idArt;
    localStorage.setItem("id", idOn);
    console.log(localStorage.getItem("id"));
    window.location.href = 'biografi.html';
}

// function bur(event) {
//     console.log(event);
// }

// let mas = {
//     "name": "Василь",
//     "age": idArt,
// }
// ajax('file/biografi.php', 'post', bur, formam);