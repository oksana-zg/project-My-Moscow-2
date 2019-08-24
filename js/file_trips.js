
// Крестик и мини-меню

$('.openMenu').click(function() {
    let dashAttr = $('.dash1').attr('style');
    if ( dashAttr == undefined ) {
        $('.dash1').css('transform', 'rotate(-45deg)');
        $('.dash2').css('display', 'none');
        $('.dash3').css({
        'top':'0',
        'transform':'rotate(45deg)',
        });
    } else {
        $('.dash1').removeAttr ('style');
        $('.dash2').removeAttr ('style');
        $('.dash3').removeAttr ('style');
    }

// мини- меню
    let navAttr = $('.nav').attr('style');
    if ( navAttr == undefined ) {
        $('.nav').css('left', '0');
    } else {
        $('.nav').removeAttr ('style');
    }
    return false;
});


// валидация формы

var userFio = $('[name="fio"]');
var userEmail = $('[name="email"]');
var userPhone = $('[name="phone"]');
var userMessage = $('[name="message"]');

$('form').submit(function (event) {
    if (userFio.val() === '') {
        userFio.css('border', '2px solid red');
    } else {
        userFio.css('border', '');
    } 

    if (userEmail.val() === '') {
        userEmail.css('border', '2px solid red');
    } else {
        userEmail.css('border', '');
    } 

    if (userPhone.val() === '') {
        userPhone.css('border', '2px solid red');
    } else {
        userPhone.css('border', '');
    } 

    if (userMessage.val() === '') {
        userMessage.css('border', '2px solid red');
    } else {
        userMessage.css('border', '');
    } 

    if (userFio.val() === '' || userEmail.val() === '' || userPhone.val() === '' || userMessage.val() === '') {
        return false;
    }  
});

userFio.keyup(function () {
    if ( userFio.val() === '') {
        userFio.css('border', '2px solid red');
    } else {
        userFio.css('border', '');
    }
});

userEmail.keyup(function () {
    if (userEmail.val() === '') {
        userEmail.css('border', '2px solid red');
    } else {
        userEmail.css('border', '');
    } 
});

userPhone.keyup(function () {
    if (userPhone.val() === '') {
        userPhone.css('border', '2px solid red');
    } else {
        userPhone.css('border', '');
    } 
});

userMessage.keyup(function () {
    if (userMessage.val() === '') {
        userMessage.css('border', '2px solid red');
    } else {
        userMessage.css('border', '');
    } 
});