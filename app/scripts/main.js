(function($) {

    //hack to see if page is loaded as responsive
    var isResponsive = $("#screen").css("font-weight") == "bold";

    $.fn.dropdown = function() {
        var menu = $(this);
        var menuLinks = menu.children("li");

        menuLinks.on("click", function() {
            var subMenu = $(this).find("ul");
            var icon = $(this).find("i");
            if(subMenu.css("display") == "none") {
                subMenu.show();
                icon.removeClass("arrow-down");
                icon.addClass("arrow-up");
            } else {
                subMenu.hide();
                icon.removeClass("arrow-up");
                icon.addClass("arrow-down");
            }
        })
    };


    if(isResponsive) {
        $('.menu').dropdown();
    } else {
        $('.menu').dropit({ action: 'mouseenter' });
    }

})(jQuery);
