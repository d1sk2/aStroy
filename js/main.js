$(".calc__range-slider").ionRangeSlider({
    skin: "round",
    min: 0,
    max: 300,
});


$('#price, #metrs').on('change', function () {
    sum();
})

function sum() {
    var price = $('#price').val();
    var metrs = $('#metrs').val();


    var sum = (metrs * price);

    $({ countNum: $('.sum').text() }).animate({
        countNum: sum
    }
        ,
        {
            duration: 500,
            easing: 'swing',
            step: function () {
                $('.sum').text(Math.floor(this.countNum));
            },
            complete: function () {
                $('.sum').text(this.countNum);
            }
        }

    )

}

var input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry: "auto",
    autoFormat: true,
    onlyCountries: ["ru", "ua", "kz"],
    preferredCountries: ["ru"],

    geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
            .then(function (res) { return res.json(); })
            .then(function (data) { callback(data.country_code); })
            .catch(function () { callback("us"); });
    },
    customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
        return selectedCountryPlaceholder;
    },
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});

jQuery(function ($) {
    $("#phone").mask("+7 (999) 999-99-99");
    $("#phone2").mask("+7 (999) 999-99-99");
});

videojs(document.querySelector('.video-js'));

$('.review__slider').slick({
    infinite: true,
    arrows: false,
});

$('.review__prev').on('click', function (e) {
    e.preventDefault()
    $('.review__slider').slick('slickPrev')
})
$('.review__next').on('click', function (e) {
    e.preventDefault()
    $('.review__slider').slick('slickNext')
})


$('.faq__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('faq__acc-link--active')
    $(this).children('.faq__acc-text').slideToggle()
})

setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
}, 0)

$('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('body').toggleClass('open')
    $('.burger').toggleClass('open')
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
})

function init() {
    let map = new ymaps.Map('map', {
        center: [55.734633, 37.586122],
        zoom: 15,
    });

    let placemark = new ymaps.Placemark([55.734633, 37.586122], {}, {

    });

    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.geoObjects.add(placemark)
}

ymaps.ready(init);