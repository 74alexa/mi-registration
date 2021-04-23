document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format": "dd-mm-yyyy",
        "i18n": {
            "months": [
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Май',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Октябрь',
                'Нояьрь',
                'Декабрь',
            ],
            "monthsShort": [
                'Янв',
                'Фев',
                'Мар',
                'Апр',
                'Май',
                'Июн',
                'Июл',
                'Авг',
                'Сен',
                'Окт',
                'Ноя',
                'Дек',
            ],
            "weekdays": [
                'Воскресенье',
                'Понедельник',
                'Вторник',
                'Среда',
                'Четверг',
                'Пятница',
                'Суббота',
            ],
            "weekdaysShort": [
                'Вос',
                'Пон',
                'Вто',
                'Сре',
                'Чет',
                'Пят',
                'Суб',
            ],
            "weekdaysAbbrev": ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
            "cancel": ['Отмена'],
        }
    });
});

document.querySelectorAll('.modal-show').forEach(function(element) {
    element.onclick = showModal;
});

document.querySelectorAll('.modal-pro-close').forEach(function(element) {
    //закрываем окно на кнопке закрыть
    element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function(element) {
    //закрываем окно на клике в области серой
    element.onclick = closeModal;
});

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function(event) {
        //закрываем окно на кнопку Esc
        if (event.keyCode == 27) closeModal();
    }
}

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function(element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
}
document.querySelector('#log-in .modal-pro').onclick = function(event) {
    event.stopPropagation();
}
document.querySelector('#sign-up .modal-pro').onclick = function(event) {
    event.stopPropagation();
}

document.querySelector('.read-rules').onclick = function() {
    document.querySelector('.form-slider').style.marginLeft = '-350px';
}
document.querySelector('.read-rules-back').onclick = function() {
    document.querySelector('.form-slider').style.marginLeft = '0';
}

document.querySelector('#agre-rules').onchange = function() {
    if (this.checked) {
        document.querySelector('#form-submit').classList.remove('disabled');
    } else {
        document.querySelector('#form-submit').classList.add('disabled');
    }
}