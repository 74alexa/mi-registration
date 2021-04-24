let locstor = localStorage.getItem("id");
let formam = {
    "name": locstor,
}

ajax('file/biografi.php', 'post', getBiografiData, formam);

function getBiografiData(result) {
    console.log(result);
    result = JSON.parse(result)
    console.log(result);

    let out = '';
    // for (let key in result) {
    console.log(`${result.nameRu}`);

    out += `${result.nameRu}<br/>`;
    out += `${result.nameEn}<br/>`;
    out += `<img src="${result.img_log}" alt=""><br/>`;
    out += `${result.career}<br/>`;
    out += `${result.date_of_birth}<br/>`;
    out += `${result.price_of_birth}<br/>`;
    out += `${result.genres}<br/>`;
    out += `${result.total_movies}<br/>`;
    out += `<img src="${result.img1}" alt=""><br/>`;
    out += `<img src="${result.img2}" alt=""><br/>`;
    out += `<img src="${result.img3}" alt=""><br/>`;
    out += `<img src="${result.img4}" alt=""><br/>`;
    out += `<img src="${result.img5}" alt=""><br/>`;
    out += `<img src="${result.img6}" alt=""><br/>`;
    out += `${result.facts}<br/>`;
    document.querySelector('.outBio').innerHTML = out;
}
// ajax('file/out.php', 'post', bur, formam);