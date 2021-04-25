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
    let out = '';
    // for (let key in result) {
    console.log(`${result.nameRu}`);
    out += `<div class="contain">`;
    out += `<h1 class="view-caption">${result.nameRu}</h1><br/>`;
    out += `<h1 class="view-caption2">${result.nameEn}</h1><br/>`;
    out += `</div>`;
    out += `<div class="FullstoryFormLeftAct"><img src="${result.img_log}" alt=""></div><br/>`;
    out += `<div class="FullstoryFormRightAct">`;
    out += `<div class= "FullstoryInfo"><h4 class = "FullstoryInfoTitleAct">Карьера:</h4><p class="FullstoryInfoinAct">${result.career}</p><br/>`;
    out += `<h4 class="FullstoryInfoTitleAct">Дата рождения:</h4><p class="FullstoryInfoinAct">${result.date_of_birth}</p><br/>`;
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