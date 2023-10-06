$(document).ready(function () {

    var $grid = $(".portfolio-item").isotope({
        itemSelector: ".item",
    });

    $(".portfolio-menu ul li").click(function () {
        $(".portfolio-menu ul li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $grid.isotope({
            filter: selector,
        });
        return false;
    });

    $(".popup-btn.hrana").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    $(".popup-btn.ambijent").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    $(".popup-btn.pice").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

});
