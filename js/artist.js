ajax('file/artist.php', 'post', getArtistData);

function getArtistData(result) {
    console.log(result);
    result = JSON.parse(result)
    console.log(result);
    // for (let i = 0; i < result.length; i++) {
    //     const element = result[i];
    //     console.log(element)
    // }




    // console.log(result);
    let out = '';
    // for (let key in result) {
    //     // result = JSON.parse(result)

    //     // let c = result[i];
    //     console.log(result.id[1]);



    // document.querySelector('.goodout').innerHTML = `Ваше имя: ${result.name} <br/> Email: ${result.email}`;
    document.querySelector('#artist-name').innerHTML = result.name;
    document.querySelector('#artist-img').innerHTML = `<img src="${result.img}">`;
    M.updateTextFields();

}