(function($) {
    'use strict';

    $.fn.pulldown = function (option) {
        var elm = this,
            options,
            delaySpeed = 100;

        options = $.extend({
            slideSpeed: 300
        }, option);

        elm.find('ul>li').hover(function () {

            $('>ul', $(this))
                .stop(true, false)
                .slideDown(options.slideSpeed);
        }, function (){

            $('>ul', $(this))
                .delay(delaySpeed)
                .slideUp(options.slideSpeed);
        });

        return this;
    };

$('#main_navigation').pulldown();

})(jQuery);
