(function($) {

    //hack to see if page is loaded as responsive
    var isResponsive = $("#screen").css("font-weight") == "bold";

    $.fn.dropdown = function() {
        var menu = $(this);
        var menuLinks = menu.children("li");

        menuLinks.on("click", function() {
            var subMenu = $(this).find("ul");
            if(subMenu.css("display") == "none") {
                subMenu.show();
            } else {
                subMenu.hide();
            }
        })
    };


    if(isResponsive) {
        $('.menu').dropdown();
    } else {
        $('.menu').dropit({ action: 'mouseenter' });
    }

})(jQuery);
