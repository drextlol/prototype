jQuery(document).ready(function($) {
    modules.infiniteScroll();
});

/* Scroll Infinito  */
var modules = (function () {
    var self;
    self = {}

    self.init = (function () {
        self.infiniteScroll();
    });

    /* Método de scroll Infinito */
    self.infiniteScroll = (function () {
        var options, descontoPage, sectionsUl, sectionsLi, scrollPage, getHeightElements, windowHeight;

        options = {
            qtdLines: 1
        }

        windowHeight = $(window).height();
        sectionsUl = $(".sections ul").outerHeight(true);
        sectionsLi = $(".sections ul li").outerHeight(true) * options.qtdLines;
        getHeightElements = $("#header").outerHeight(true) + $(".h4_ad_195x40").outerHeight(true) + $(".filters_social").outerHeight(true);

        $(".sections").height(sectionsLi);

        $(document).scroll(function () {
            descontoPage = ((getHeightElements + $(".sections").outerHeight(true)) - windowHeight);
            scrollPage = $(document).scrollTop();

            if (scrollPage >= descontoPage) {
                if ($(".sections").height() < sectionsUl) {
                    $(".sections").height($(".sections").height() + sectionsLi);
                }
            }
        });


    });

    return self;
})();