
$("#work1").hover(function(){
    $("#masc1").fadeIn(500);
}, function() {
    $("#masc1").fadeOut(500);
})


$("#work2").hover(function(){
    $("#masc2").fadeIn(300);
}, function() {
    $("#masc2").fadeOut(300);
})


$("#work3").hover(function(){
    $("#masc3").fadeIn(500);
}, function() {
    $("#masc3").fadeOut(500);
})


$("#work4").hover(function(){
    $("#masc4").fadeIn(500);
}, function() {
    $("#masc4").fadeOut(500);
})


$("#work5").hover(function(){
    $("#masc5").fadeIn(500);
}, function() {
    $("#masc5").fadeOut(500);
})

$("#work6").hover(function(){
    $("#masc6").fadeIn(500);
}, function() {
    $("#masc6").fadeOut(500);
})




$("#crl2").click(function(){
    $("#crl1").removeClass('dot-active');
    $("#crl1").addClass('dot');
    $("#crl2").removeClass('dot');
    $("#crl2").addClass('dot-active');
    $("#crl3").removeClass('dot-active');
    $("#crl3").addClass('dot');
});

$("#crl1").click(function(){
    $("#crl1").removeClass('dot');
    $("#crl1").addClass('dot-active');
    $("#crl2").removeClass('dot-active');
    $("#crl2").addClass('dot');
    $("#crl3").removeClass('dot-active');
    $("#crl3").addClass('dot');
});

$("#crl3").click(function(){
    $("#crl1").removeClass('dot-active');
    $("#crl1").addClass('dot');
    $("#crl2").removeClass('dot-active');
    $("#crl2").addClass('dot');
    $("#crl3").removeClass('dot');
    $("#crl3").addClass('dot-active');
});


$(document).ready(function(){
        $("body").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
     
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
     
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
             
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1000);
        });
    });
    