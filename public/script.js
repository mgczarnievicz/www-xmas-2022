var $rotating = $(".Home_sticky_image__uCfa_");

$(window).scroll(function () {
    $rotating.css({
        transform: "rotate(" + $(document).scrollTop() + "deg)",
    });
});
