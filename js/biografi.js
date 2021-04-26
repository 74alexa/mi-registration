let locstor = localStorage.getItem("id");
let formam = {
    "name": locstor,
}

ajax('file/biografi.php', 'post', getBiografiData, formam);

function getBiografiData(result) {
    console.log(result);
    result = JSON.parse(result)
    console.log(result);
    localStorage.setItem("birth", result.date_of_birth);
    let dete = new Date;
    dete = dete.getFullYear()
    let eyw = result.date_of_birth.split("-");
    let aqw = dete - eyw[0];
    let lete = "";
    if (aqw >= 5 && aqw <= 20 || aqw >= 25 && aqw <= 30 || aqw >= 35 && aqw <= 40 || aqw >= 45 && aqw <= 50 || aqw >= 55 && aqw <= 60 || aqw >= 65 && aqw <= 70 || aqw >= 75 && aqw <= 80 || aqw >= 85 && aqw <= 90 || aqw >= 95 && aqw <= 100 || aqw >= 105 && aqw <= 120) {
        lete = "лет";
    } else if (aqw == 1 || aqw == 21 || aqw == 31 || aqw == 41 || aqw == 51 || aqw == 61 || aqw == 71 || aqw == 81 || aqw == 91 || aqw == 101 || aqw == 121) {
        lete = "год";
    } else {
        lete = "года";
    }
    console.log(lete);
    let out = '';
    // for (let key in result) {

    out += `<div class="contain">`;
    out += `<title>${result.nameRu}</title>`
    out += `<h1 class="view-caption">${result.nameRu}</h1><br/>`;
    out += `<h1 class="view-caption2">${result.nameEn}</h1><br/>`;
    out += `</div>`;
    out += `<div class="FullstoryFormLeftAct"><img src="${result.img_log}" width = "180px" alt=""></div><br/>`;
    out += `<div class="FullstoryFormRightAct">`;
    out += `<div class= "FullstoryInfo"><h4 class = "FullstoryInfoTitleAct">Карьера:</h4><p class="FullstoryInfoinAct">${result.career}</p><br/>`;
    out += `<h4 class="FullstoryInfoTitleAct">Рост:</h4><p class="FullstoryInfoinAct">${result.rost} м</p><br/>`;
    out += `<h4 class="FullstoryInfoTitleAct">Дата рождения:</h4><p class="FullstoryInfoinAct">${result.date_of_birth} 	&bull; ${aqw} ${lete}</p><br/>`;
    out += `<h4 class="FullstoryInfoTitleAct">Место рождения:</h4><p class="FullstoryInfoinAct">${result.price_of_birth}</p><br/>`;
    out += `<h4 class="FullstoryInfoTitleAct">Жанры:</h4><p class="FullstoryInfoinAct">${result.genres}</p><br/>`;
    out += `<h4 class="FullstoryInfoTitleAct">Всего фильмов:</h4><p class="FullstoryInfoinAct">${result.total_movies}</p>`;
    out += `</div>`;
    out += `<div class="FullstoryKadrFormAct"><img src="${result.imge1}" alt="" width="130" tabindex="0">`;
    out += `<img src="${result.imge2}" alt="" width="130" tabindex="0">`;
    out += `<img src="${result.imge3}" alt="" width="130" tabindex="0">`;
    out += `<img src="${result.imge4}" alt="" width="130" tabindex="0">`;
    out += `<img src="${result.imge5}" alt="" width="130" tabindex="0">`;
    out += `<img src="${result.imge6}" alt="" width="130" tabindex="0"></div>`;
    out += `<div class="FullstorySubFormTitle">Интересные факты: </div><div class="FullstorySubFormText">${result.fact}</div><br/>`;
    out += `</div></div>`;

    document.querySelector('.outBio').innerHTML = out;
}
// ajax('file/out.php', 'post', bur, formam);