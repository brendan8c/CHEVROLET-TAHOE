$('.carusel__slider').owlCarousel({
    autoplayTimeout: 5000,
    autoplay: 'true',
    loop: 'true',
    items: 1,
    startPosition: '#carusel',
    slideTransition: 'linear',
    autoplayHoverPause: 'true',
    smartSpeed: 450
});

// #1grn Анимация при прокрутке страницы на JavaScript и CSS
let isScrolling = false;

// События прокрутки
window.addEventListener('scroll', throttleScroll, false);
// Как только страница начинает прокручиваться, вызывается этот обработчик событий.
function throttleScroll(e) {
    if (isScrolling == false) {
        // Определяем задержку реакции браузера на обработку того или иного события привяжем данные параметры к частоте обновления кадров страницы. 
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener('DOMContentLoaded', scrolling, false);

let wrapbox1 = document.querySelector('.wrapbox1');
let benefitsAnim = document.querySelector('.benefits__anim');
let benefitsItem = document.getElementsByClassName('benefits__item');
let wrapbox2 = document.querySelector('.wrapbox2');
let caruselAnim = document.querySelector('.carusel__anim');
let title3 = document.getElementsByClassName('title3');
let caruselImages = document.querySelector('.carusel__images');


function scrolling() {
    // Если element полностью видим тогда xxxx, если нет тогда xxxx.
    if (isFullyVisible(wrapbox1)) {
        benefitsAnim.classList.add('benefits__anim-true');
        for (let i = 0; i < benefitsItem.length; i++) {
            benefitsItem[i].classList.add('benefits__item-true')
        }
    } else {
        benefitsAnim.classList.remove('benefits__anim-true');
        for (let i = 0; i < benefitsItem.length; i++) {
            benefitsItem[i].classList.remove('benefits__item-true')
        }
    };
    if (isFullyVisible(wrapbox2)) {
        caruselAnim.classList.add('carusel__anim-true');
        caruselImages.classList.add('carusel__images-true');
        for (let i = 0; i < title3.length; i++) {
            title3[i].classList.add('title3-true')
        }
    } else {
        caruselAnim.classList.remove('carusel__anim-true');
        caruselImages.classList.remove('carusel__images-true');
        for (let i = 0; i < title3.length; i++) {
            title3[i].classList.remove('title3-true')
        }
    };
}

// Определение полностью видимых элементов, возвращает true или false
function isFullyVisible(el) {
    // Определение видимых элементов
    let top = el.getBoundingClientRect().top;
    let bottom = el.getBoundingClientRect().bottom;

    // Возвращают высоту окна браузера
    return ((top >= 0) && (bottom <= window.innerHeight));
}

// #1grn Добавляем классу болшее значение margin-bottom если высота экрана больше чем 1080px 
let screenHeight = window.screen.height; // Высота экрана.
let carusel = document.querySelector('.carusel');

window.onload = function() {
    if (screenHeight > 1080) {
        carusel.classList.add('carusel-height');
    }
}

// #1grn Расчитываем ширину экрана для скролла

let userScreen = document.body.clientWidth; // Ширина окна браузера.
let item1 = document.querySelector('.cars__item1');
let item2 = document.querySelector('.cars__item2');
let item3 = document.querySelector('.cars__item3');
let item4 = document.querySelector('.cars__item4');
let item5 = document.querySelector('.cars__item5');
let item6 = document.querySelector('.cars__item6');
let item7 = document.querySelector('.cars__item7');
let item8 = document.querySelector('.cars__item8');

window.onload = function() {
    item1.classList.add('item-false');
    item2.classList.add('item-false');
    item3.classList.add('item-false');
    item4.classList.add('item-false');
    item5.classList.add('item-false');
    item6.classList.add('item-false');
    item7.classList.add('item-false');
    item8.classList.add('item-false');

    if (userScreen <= 2560, userScreen != 2240, userScreen > 2240) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item4.classList.add('item-true');
        item5.classList.add('item-true');
        item6.classList.add('item-true');
        item7.classList.add('item-true');
        item8.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
        item4.classList.remove('item-false');
        item5.classList.remove('item-false');
        item6.classList.remove('item-false');
        item7.classList.remove('item-false');
        item8.classList.remove('item-false');
    }
    if (userScreen <= 2240, userScreen != 1920, userScreen > 1920) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item4.classList.add('item-true');
        item5.classList.add('item-true');
        item6.classList.add('item-true');
        item7.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
        item4.classList.remove('item-false');
        item5.classList.remove('item-false');
        item6.classList.remove('item-false');
        item7.classList.remove('item-false');
    }
    if (userScreen <= 1920, userScreen != 1600, userScreen > 1600) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item4.classList.add('item-true');
        item5.classList.add('item-true');
        item6.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
        item4.classList.remove('item-false');
        item5.classList.remove('item-false');
        item6.classList.remove('item-false');
    }
    if (userScreen <= 1600, userScreen != 1280, userScreen > 1280) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item4.classList.add('item-true');
        item5.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
        item4.classList.remove('item-false');
        item5.classList.remove('item-false');
    }
    if (userScreen <= 1280, userScreen != 960, userScreen > 960) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item4.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
        item4.classList.remove('item-false');
    }
    if (userScreen <= 960, userScreen != 640, userScreen > 640) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
    }
    if (userScreen <= 640, userScreen != 320, userScreen > 320) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
    }
    if (userScreen <= 320) {
        item1.classList.add('item-true');
        item1.classList.remove('item-false');
    }
};


//#1grn --- Функция экранирования
function escape(string) {
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };

    return string.replace(/[&<>"']/g, function(match) {
        return htmlEscapes[match];
    });
};


//#1grn --- Отправляем форму без перезагрузки страницы
let sendBtn = document.querySelector('#send-btn-form');
sendBtn.addEventListener('click', sendform);

function sendform(e) {
    e.preventDefault(); // Отменяет стандартное действие браузера
    console.log("Event check №0.");

    let formName = document.querySelector('#main-form'); // Находим нашу форму
    let formData = new FormData(formName); // Создаём новый FormData-объект. Используем все поля с атрибутом name
    let request = new XMLHttpRequest(); // Создаём новый XMLHttpRequest-объект
    request.open('POST', "php/send.php"); // Настраиваем его: POST-запрос по URL php/send.php

    //#1grn --- Фильтрация символов таких как: &<>"'
    ['name', 'tel'].forEach(name => {
        let input = document.querySelector(`[name='${name}']`);
        input.value = escape(input.value);
        console.log("Event check №1.");
    });

    //#1grn --- Проверка («настоящее» событие или сгенерированное кодом)
    let sendBttn = document.querySelector("#send-btn-form");
    sendBttn.addEventListener('click', e => { // Принимаем объект события в нашу callback-функцию, называем его "e".

        // Ранее мы уже объявляли событие клика "e" function(e) тут достаточно вызвать её.
        if (e.isTrusted) { // ПРОВЕРЯЕМ, если e.isTrusted === true - значит, это не машинный клик.
            request.send(formData); // Отсылаем HTTP запрос на сервер и получаем ответ.
            console.log("Event check №2.");
        } else {
            console.log('blocked!');
        }
    });

    // Этот код сработает после того, как мы получим ответ сервера
    request.onload = function() {
        if (request.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            alert(`Ошибка ${request.status}: ${request.statusText}`); // Например, 404: Not Found
        } else { // если всё прошло гладко, очищаем форму и выводим результат
            formName.reset(formData); // Очищаем форму
            let on = document.querySelector(".message-good");
            on.classList.add('ms-on');
        }
    }

    request.onerror = function() {
        alert("Запрос не удался");
    }

}


//#1grn --- Удяляем добавленный ранее класс у всплывающего сообщения
let msBtn = document.querySelector(".message-good-btn");
msBtn.addEventListener('click', closeButton);

function closeButton() {
    let off = document.querySelector(".message-good");
    off.classList.remove('ms-on');
}


//#1grn Валидация формы
let formName = document.getElementById("form-name");
let formPhone = document.getElementById("form-phone");

let validName = document.getElementById("valid_name");
let validPhone = document.getElementById("valid_phone");

let signal1 = document.querySelector(".signal1");
let signal2 = document.querySelector(".signal2");
let signal3 = document.querySelector(".signal3");

let sendBtnForm = document.getElementById("send-btn-form");

//#1grn Валидация форм. Паттерн разрешает все упомянутые сиволы, другие удалит.
formName.addEventListener('input', function() {
    this.value = this.value
        .replace(/\d/gm, '')
        .replace(/ {2,}/, ' ')
        .replace(/^ {1,}/, '')
        .replace(/[^A-Za-zА-Яа-яЁё\s]/, '')
        .replace(/^([A-Za-zА-Яа-яЁё]+) ([A-Za-zА-Яа-яЁё]+)( {1}|)/gm, '$1 $2');
});

formPhone.addEventListener('input', function() {
    this.value = this.value
        .replace(/[^0-9]/, '')
});

// Можно использовать любое из этих выражений, резулютат один и тот-же. 
// sendBtnForm.setAttribute("disabled", true); // Изменяет значение существующего атрибута у выбранного элемента.
sendBtnForm.disabled = true; // Disabled отображает то, что кнопка является "Boolean" и отключена.

// Список паттернов 
let validation = {
    isPhoneNumber: function(str) {
        let regexp = new RegExp(/8[0-9]{10}/);
        return regexp.test(str);
    },
    isNameUser: function(str) {
        let regexp = new RegExp(/^[A-Za-zА-Яа-яЁё\s]+$/);
        return regexp.test(str);
    }
};

// Условия для кнопки. Если все input.value прошли валидацию.
// Событие input срабатывает каждый раз при изменении значения в поле.
// Создаём обработчики событий с событием "input" с ссылкой на функцию-обработчик "validate".
formName.addEventListener('input', validate);
formPhone.addEventListener('input', validate);

function validate() {
    // Передаём значение input.value каждой формы в паттерн для проверки и присваиваем переменную, для получения значения "boolean".
    let answer_Name = validation.isNameUser(formName.value);
    let answer_Phone = validation.isPhoneNumber(formPhone.value);

    if (answer_Name && answer_Phone) {
        // Если значение "boolean" = true
        sendBtnForm.classList.add('valid-btn');
        sendBtnForm.disabled = false;
    } else {
        // Если значение "boolean" = false
        sendBtnForm.classList.remove('valid-btn');
        sendBtnForm.disabled = true;
    };
}

formPhone.onblur = function() {
    let answer_Phone = validation.isPhoneNumber(formPhone.value);
    if (answer_Phone) {
        validPhone.classList.remove('invalid');
        signal2.classList.remove('span-on');
        validPhone.classList.add('valid');
    } else {
        validPhone.classList.remove('valid');
        validPhone.classList.add('invalid');
        signal2.classList.add('span-on');
    };
};

formName.onblur = function() {
    let answer_Name = validation.isNameUser(formName.value);
    if (answer_Name) {
        validName.classList.remove('invalid');
        signal1.classList.remove('span-on');
        validName.classList.add('valid');
    } else {
        validName.classList.remove('valid');
        validName.classList.add('invalid');
        signal1.classList.add('span-on');
    };
};