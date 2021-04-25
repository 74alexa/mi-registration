function init() {
    $.post(
        "core.php", {
            "action": "init"
        },
        showGoods
    );
}

function showGoods(data) {
    data = JSON.parse(data);
    console.log(data);
    let out = '<select>';
    out += '<option data-id="0">Новый Артист</option>';
    for (let id in data) {
        out += `<option data-id=${id}>${data[id].nameRu}</option>`;
    }
    out += '</select>';
    $('.goods-out').html(out);
    $('.goods-out select').on('change', selectGoods);
}

function selectGoods() {
    let id = $('.goods-out select option:selected').attr('data-id');
    console.log(id);
    $.post(
        "core.php", {
            "action": "selectOneGoods",
            "gid": id,
        },
        function(data) {
            data = JSON.parse(data);
            $('#nameRu').val(data.nameRu);
            $('#nameEn').val(data.nameEn);
            $('#img_log').val(data.img_log);
            $('#career').val(data.career);
            $('#date_of_birth').val(data.date_of_birth);
            $('#price_of_birth').val(data.price_of_birth);
            $('#genres').val(data.genres);
            $('#total_movies').val(data.total_movies);
            $('#imge1').val(data.imge1);
            $('#imge2').val(data.imge2);
            $('#imge3').val(data.imge3);
            $('#imge4').val(data.imge4);
            $('#imge5').val(data.imge5);
            $('#imge6').val(data.imge6);
            $('#fact').val(data.fact);
            $('#gid').val(data.id);
        }
    );
}

function saveToDb() {
    let id = $('#gid').val();
    if (id != "") {
        $.post(
            "core.php", {
                "action": "updateGoods",
                "id": id,
                "nameRu": $('#nameRu').val(),
                "nameEn": $('#nameEn').val(),
                "img_log": $('#img_log').val(),
                "career": $('#career').val(),
                "date_of_birth": $('#date_of_birth').val(),
                "price_of_birth": $('#price_of_birth').val(),
                "genres": $('#genres').val(),
                "total_movies": $('#total_movies').val(),
                "imge1": $('#imge1').val(),
                "imge2": $('#imge2').val(),
                "imge3": $('#imge3').val(),
                "imge4": $('#imge4').val(),
                "imge5": $('#imge5').val(),
                "imge6": $('#imge6').val(),
                "fact": $('#fact').val()
            },
            function(data) {
                if (data == 'ok') {
                    alert('Запись добавлена')
                    init();
                } else {
                    console.log(data);
                }
            }
        );
    } else {
        $.post(
            "core.php", {
                "action": "newGoods",
                "id": 0,
                "nameRu": $('#nameRu').val(),
                "nameEn": $('#nameEn').val(),
                "img_log": $('#img_log').val(),
                "career": $('#career').val(),
                "date_of_birth": $('#date_of_birth').val(),
                "price_of_birth": $('#price_of_birth').val(),
                "genres": $('#genres').val(),
                "total_movies": $('#total_movies').val(),
                "imge1": $('#imge1').val(),
                "imge2": $('#imge2').val(),
                "imge3": $('#imge3').val(),
                "imge4": $('#imge4').val(),
                "imge5": $('#imge5').val(),
                "imge6": $('#imge6').val(),
                "fact": $('#fact').val()
            },
            function(data) {
                if (data == 'ok') {
                    alert('Запись добавлена')
                    init();
                } else {
                    console.log(data);
                }
            }
        );
    }
}

$(document).ready(function() {
    init();
    $('.add-to-db').on('click', saveToDb);
});