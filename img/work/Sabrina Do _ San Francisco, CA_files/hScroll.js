jQuery(document).ready(function ($) {

    $(".scroll").click(function (event) {
        var current = $('.container').scrollLeft();
        var left = $(this.hash).position().left;        

        event.preventDefault();

        $('.container').animate({
            scrollLeft: current + left
        }, 200);
    });
});