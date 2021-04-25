setTimeout(function() {
    cart = localStorage.getItem('birth');
    let jop = cart.split("-");
    console.log(jop);
    var date = jop[2];
    var this_month = jop[1];
    with(document.znak_zodiac.znak) {
        if (this_month == 1 && date >= 20 || this_month == 2 && date <= 18) value = "Водолей";
        else if (this_month == 2 && date >= 19 || this_month == 3 && date <= 20) value = "Рыбы";
        else if (this_month == 3 && date >= 21 || this_month == 4 && date <= 19) value = "Овен";
        else if (this_month == 4 && date >= 20 || this_month == 5 && date <= 20) value = "Телец";
        else if (this_month == 5 && date >= 21 || this_month == 6 && date <= 21) value = "Близнецы";
        else if (this_month == 6 && date >= 22 || this_month == 7 && date <= 22) value = "Рак";
        else if (this_month == 7 && date >= 23 || this_month == 8 && date <= 22) value = "Лев";
        else if (this_month == 8 && date >= 23 || this_month == 9 && date <= 22) value = "Дева";
        else if (this_month == 9 && date >= 23 || this_month == 10 && date <= 22) value = "Весы";
        else if (this_month == 10 && date >= 23 || this_month == 11 && date <= 21) value = "Скорпион";
        else if (this_month == 11 && date >= 22 || this_month == 12 && date <= 21) value = "Стрелец";
        else if (this_month == 12 && date >= 22 || this_month == 1 && date <= 19) value = "Козерог";
        else value = "Неверная дата!";

        if ((date < 1) || (this_month == 2 && date > 29)) value = "Неверная дата!";
        if (this_month == (1 || 3 || 5 || 7 || 8 || 10 || 12) && date > 31) value = "Неверная дата!";
        if (this_month == (4 || 6 || 9 || 11) && date > 30) value = "Неверная дата!";
        console.log(value);
        der = value;

        console.log(der);
    }

    function init_z() {
        $.getJSON('./astrologi.json', goodsOut_z);


        function goodsOut_z(data) {

            let out = '';

            out += `<a><img src="${data[der].logo_img}" alt="" zodiac="${data[der].name}"></a>`;

            $('.zadiac').html(out);
            console.log(data['Водолей']);

        }
    }
    init_z();

}, 1000)