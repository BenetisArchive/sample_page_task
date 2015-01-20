(function($) {

    //hack to see if page is loaded as responsive
    var isResponsive = $("#screen").css("font-weight") == "bold";

    $.fn.dropdown = function() {
        var menu = $(this);
        var menuLinks = menu.children("li");

        menuLinks.on("click", function() {
            console.log(this);
        })
    };


    $('.menu').dropdown();

    $('.menu').dropit({ action: 'mouseenter' });
})(jQuery);
