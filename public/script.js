var $rotating = $(".Home_sticky_image__uCfa_"),
    $body = $(document.body),
    bodyHeight = $body.height();

$(window).scroll(function () {
    $rotating.css({
        transform: "rotate(" + $(document).scrollTop() + "deg)",
    });
});
