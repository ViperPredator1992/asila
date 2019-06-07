$(document).ready(function () {

    $(".search-form-block__button").click(function () {
        $(".search-form-block, .search-input").toggleClass("search-active");
        $("input[type='text']").focus();
    });

    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => {  
        icon.addEventListener('click', (event) => {
            icon.classList.toggle("open");
        });
    });

});
