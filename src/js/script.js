$(document).ready(function () {

    $(".search-form-block__button").click(function () {
        $(".search-form-block, .search-input").toggleClass("search-active");
        $("input[type='text']").focus();
    });

});
