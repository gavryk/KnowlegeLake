$(function() {
    $('.search_btn').on('click', function() {
        $('.search_panel').toggleClass('search_active');
    });

    $('.burger').on('click', function() {
        $('.main_menu').toggleClass('menu_active');
        $(this).toggleClass('burger_active');
    })
});