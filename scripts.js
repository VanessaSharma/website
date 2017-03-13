$(document).ready(function () {
    var $home = $(".navigation a.hoverEffectSelect");
    $("nav a").hover(function () {
        $home.removeClass("hoverEffectSelect");
        $(this).addClass("hoverEffectSelect");
    },function () {
        $(this).removeClass("hoverEffectSelect");
        $home.addClass("hoverEffectSelect");
    });
});
