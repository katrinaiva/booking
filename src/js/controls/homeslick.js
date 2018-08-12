/*
 * PCG JS module - homeslick
 */
var HomeSlick = function () {
    var currentContext = $(document);
    var moduleOptions = {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    var classMap = {
        currentNumber: ".js-current-number",
        totalAmount: ".js-all-number"
    }

    $(window).resize(function () {
        $(currentContext).slick('resize');
    });

    $(window).on('orientationchange', function () {
        $(currentContext).slick('resize');
    });

    var $countView = $();
    var $currentNumber = $();
    var $totalAmount = $();

    function extendSlickByCounter() {

        if ($countView.length) {
            var slickInst = currentContext.slick("getSlick");
            if (slickInst.slideCount > slickInst.options.slidesToShow) {
                currentContext.append($countView);

                $currentNumber = $(classMap.currentNumber, $countView);
                currentContext.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    $currentNumber.text(nextSlide + 1);
                });
                currentContext.on('setPosition', function (event, slick, currentSlide, nextSlide) {
                    currentContext.append($countView);
                });
            }
        };
    }

    function extendSlickInit() {
        $countView = moduleOptions.slidesCounter ? $(moduleOptions.slidesCounter).clone() : $();

        if ($countView.length) {
            $totalAmount = $(classMap.totalAmount, $countView);
            currentContext.on('init', function (event, slick, currentSlide, nextSlide) {
                $totalAmount.text(slick.slideCount);
            });
        };
    }


    this.init = function (context, options) {
        currentContext = context || currentContext;
        $.extend(moduleOptions, options);
        extendSlickInit();
        currentContext.slick(moduleOptions);
        extendSlickByCounter();
    };

    return this;
};

HomeSlick.init = (context, options) => {
    var slider = new HomeSlick();
    slider.init(context, options);
};

module.exports = HomeSlick;