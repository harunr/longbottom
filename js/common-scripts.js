(function ($) {
    $(function () {


        $(window).on('load', function () {
            setTimeout(function () {
                $('body').addClass('loaded')
            }, 100)
        })
        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
        });

        $('.cart-trigger').click(function () {
            $("body").addClass("cart-shown");
        });

        if ($('select').length) {
            $('select').selectric({
                disableOnMobile: false,
                nativeOnMobile: false
            });
        }
        if ($('.product-single').length) {
            $('body').addClass('product-single-page');
        }
        if ($('.shop').length & $(window).width() < 768) {
            $('.main-header-section').removeClass('secondary-header');
        }

        $('.close-area').click(function () {
            $("body").removeClass("cart-shown");
        });
        $('.cart-close, .cart-wrap').click(function () {
            $("body").removeClass("cart-shown");
        });
        $('.cart-main-wrap').click(function (e) {
            e.stopPropagation();
        });

        if ($('.cart-wrap').length) {
            $(window).on('load resize', function () {
                setTimeout(function () {
                    var cartTopHeight = $('.cart-header').outerHeight(),
                        windowHeight = $(window).outerHeight(),
                        windowNeedHeight = windowHeight - cartTopHeight,
                        bottomPadding = $('.cart-bottom').outerHeight();
                    $('.cart-main').css({
                        'height': windowNeedHeight,
                        'padding-bottom': bottomPadding
                    }, 300)
                })
            })

        }




        //  venue-carousel function 
        if ($('.quote-slider-wrap').length) {
            $('.quote-slider-wrap').slick({
                dots: true,
                arrows: false,
                autoplay: false,
                infinite: true,
                navigation: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,

            });
            $(window).on('resize', function () {
                $('.quote-slider-wrap').slick('resize');

            });
        }
        if ($('.right-inner-slider-wrap').length) {
            $('.right-inner-slider-wrap').slick({
                dots: true,
                arrows: true,
                autoplay: false,
                infinite: true,
                navigation: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.arrow-prev'),
                nextArrow: $('.arrow-next'),
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                     }

                    ]
            });
            $(window).on('resize', function () {
                $('.right-inner-slider-wrap').slick('resize');

            });
        }

        if ($('.recipes-tab-item').length) {
            $('.recipes-tab-item').slick({
                dots: false,
                arrows: false,
                autoplay: false,
                infinite: false,
                navigation: false,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                     },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                     }

                    ]
            });
            $(window).on('resize', function () {
                $('.recipes-tab-item').slick('resize');

            });
        }

        if ($('.single-product-thumb').length) {
            $('.single-product-thumb').slick({
                dots: false,
                arrows: false,
                autoplay: false,
                infinite: false,
                navigation: false,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                     },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                     }

                    ]
            });
            $(window).on('resize', function () {
                $('.single-product-thumb').slick('resize');

            });
        }

        if ($('.tasty-serves-item-wrap').length) {
            $('.tasty-serves-item-wrap').slick({
                dots: false,
                arrows: false,
                autoplay: false,
                infinite: false,
                navigation: false,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                     },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                     }

                    ]
            });
            $(window).on('resize', function () {
                $('.tasty-serves-item-wrap').slick('resize');

            });
        }

        if ($('.related-product-item-wrap').length) {
            $('.related-product-item-wrap').slick({
                dots: false,
                arrows: true,
                autoplay: false,
                infinite: false,
                navigation: false,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                     },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                     }

                    ]
            });
            $(window).on('resize', function () {
                $('.related-product-item-wrap').slick('resize');

            });
        }


        //FAQs Accordion Function
        $(".accordion-item").each(function () {
            var $this = $(this);
            $this.find(" > h5").on("click touch", function () {
                $(".accordion-item").removeClass("active")
                $(".accordion-item .accordion-text").slideUp();
                if ($this.find(".accordion-text:visible").length) {
                    $(".accordion-item").removeClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                } else {
                    $this.addClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                    $this.find(" > .accordion-text").slideDown();
                }
            })
        })

        if ($(window).width() <= 768) {
            $(".accordion-nav").each(function () {
                var $this = $(this);
                $this.on("click touch", function () {
                    $(".accordion-nav").removeClass("active");
                    $(".accordion-content").slideUp();
                    if ($this.parent().find(".accordion-content:visible").length) {
                        $(".accordion-item").removeClass("active");
                        $(".accordion-content").slideUp();
                    } else {
                        $this.addClass("active");
                        $this.parent().find(" > .accordion-content").slideDown();
                    }
                })
            })
        }

        $(window).on('load', function () {
            var totalHeight = $('#scroll-container').outerHeight()
            $('body').css('height', totalHeight);
        })

        //Animate heading
        if ($('.reveal-text').length) {
            $(window).on('load', function () {
                var res = Splitting({
                    target: '.reveal-text',
                    by: 'lines',
                });
                Splitting();
                res.forEach((splitResult) => {
                    const wrappedLines = splitResult.lines.map((wordsArr) => `
            <span class="line"><span class="mask-up">
            ${wordsArr.map((word) => `${word.outerHTML}<span class="whitespace">
            </span>`).join('')}
            </span></span>`).join('');
                    splitResult.el.innerHTML = wrappedLines;
                });
                inView.threshold(0.75);
                inView(".reveal-text").on("enter", function (el) {
                    if (!el.classList.contains("has-animated")) {
                        anime({
                            targets: el.querySelectorAll(".mask-up"),
                            translateY: ["100%", "0%"],
                            duration: 700,
                            delay: anime.stagger(200),
                            easing: "easeOutQuad",
                            autoplay: true
                        });
                        el.classList.add("has-animated");
                    }
                });
            })
        }


        $('.products-item .products-item-thumb').on('click', function (e) {
            e.preventDefault()
            $('.viewport').addClass('circularAnim')
            $('.viewport').removeClass('circularAnimHidden')
            setTimeout(function () {
                $('.viewport').addClass('circularAnimAll')
                setTimeout(function () {
                    $('.viewport').addClass('circularAnimAllStart')

                    setTimeout(function () {
                        $('.viewport').addClass('circularAnimHidden')
                        setTimeout(function () {
                            $('.viewport').removeClass('circularAnim circularAnimAll circularAnimAllStart')
                        }, 200)
                    }, 300)

                }, 50)
            }, 400)
        })

        var mac = 0;
        if (navigator.userAgent.indexOf('Mac') > 0) {
            mac = 1;
        } else {
            mac = 0;
        }
        if (1 == mac) {
            $('body').addClass('mac-os');
        } else {
            $("body").addClass('win-os');
        }
  

        // Start marquee
        if ($('.insta-slider-wrap').length) {
            $('.insta-slider-wrap').slick({
                speed: 5000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                swipe: false,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
                pauseOnHover: false,
            });
        }
        
        
        
        if($('.product-bottom-bar').length){
            var wrapHeight = $('.single-product-wrap').outerHeight() - 30;
            var barHeight = $('.product-bottom-bar').outerHeight() + 15;
            
            $('.main-footer-section').css({"padding-bottom": barHeight})
            
            $(window).on('scroll', function(){
                var scrollY = $(this).scrollTop()
                
                if(scrollY > wrapHeight){
                    $('.product-bottom-bar').fadeIn()
                }else{
                    $('.product-bottom-bar').fadeOut() 
                }
            })
            
            
        }

        
        

    }) // End ready function.
    
    $('.buying-option-btn input').on('change', function(){
        if ($('#buying-option-2').is(':checked')) {
            $('.delivery-option').slideDown()
        }else{
            $('.delivery-option').slideUp()
        }
    })
    
    if ($('.circle-scroll').length) {
        $('.circle-scroll').each(function () {
            var $this = $(this);
            var windowHeight = $(window).outerHeight() / 1.1;
            var circleOffset = $this.offset().top;
            var circleOffsetMain = circleOffset / windowHeight;

            $(window).on('scroll', function () {
                var scrollY = $(this).scrollTop();
                var scale = scrollY / 1500
                if (scrollY > circleOffsetMain) {
                    $this.css({
                        "transform": "scale(" + scale + ")"
                    });
                }


            })

        })


    }
    
    if ($('.tilt-hoverd').length) {
        $(".tilt-hoverd figure").tilt({
            maxTilt: 30,
            perspective: 1000,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            speed: 1000,
            glare: false,
            scale: 1
        });
    }
    
    
    if($('.cocktails-wrap').length){
        $('body').addClass('cocktails-page')
    }
    
    $('.spiced-drinks-tab-trigger ul li a').eq(1).addClass('spiced-nav-active')
    $('.spiced-drinks-tab-item').eq(1).addClass('spiced-tab-active')
    $('.spiced-drinks-tab-trigger ul li a').click(function () {
        $('.spiced-drinks-tab-trigger ul li a').removeClass('spiced-nav-active');
        $(this).addClass('spiced-nav-active');
        $('.spiced-drinks-tab-item').removeClass('spiced-tab-active');

        var activeTab = $(this).attr('href');
        $(activeTab).addClass('spiced-tab-active');
        return false;
    });
    
    
        if ($('.more-recipes-slider-wrap').length) {
            $('.more-recipes-slider-wrap').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                infinite: false,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
            $(window).on('resize', function () {
                $('.more-recipes-slider-wrap').slick('resize');

            });
            
            
            

            
            
            
        }
    
    

})(jQuery)

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}