$(document).ready(function () {

    if (screen.width > 993) {
        $(".search-form-block__button").click(function () {
            $(".search-form-block, .search-input").toggleClass("search-active");
            $("input[type='text']").focus();
        });
    }
    $('.menu-bottom__text').click(function(){
        if ($('.menu-bottom').css('display') == 'none') {
            $('.menu-bottom').slideDown();
            $('.icon').addClass('open');
        } else {
            $('.menu-bottom').slideUp();
            $('.icon').removeClass('open');
        }
    });

    $('.menu-lines').click(function () {
        if ($('.menu-list').css('display') == 'none') {
            $('.menu-list').slideDown();
            $('.burger').addClass('burger-open');
        } else {
            $('.menu-list').slideUp();
            $('.burger').removeClass('burger-open');
        }
    });

});
