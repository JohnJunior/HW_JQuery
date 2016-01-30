$(window).load(function(){
    //mobile menu button
    $('#btn-toggle').on("click", function(){
        $('#menu-nav-open').toggle('slow');
    });

    //scrolling
    $('.menu-nav a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);
        $('.menu-nav').css("display", "none");
        return false;
    });

    //accordion
    function close_section() {
        $('.accord-header').removeClass('active');
        $('.accord-text').slideUp(500);
    }

    $('.accord-header').on('click', function(e) {
        var section = $(this).data('target');
        if($(e.target).is('.active')) {
            close_section();
        } else {
            close_section();
            $(e.target).addClass('active');
            $(section).slideDown(500);
        }
    });

    //dialog
    $('#popup, #hide').on('click', function(){
        $('#popup').hide();
    });

    $('#popup-pls').on('click', function(){
        $('#popup').show();
    });

    $('.popup-content').on('click', function(e) {
        e.stopImmediatePropagation();
    });

    //tabs
    $('span[data-tab-id^="#tabs-"]').on('click', function(){
        var tab = $(this).data('tab-id');
        $('.tab-open').removeClass('tab-open');
        var on_class = $('.tab-content').hasClass("on");
        if(on_class) {
            $('.on').hide().removeClass('on');
            $(this).addClass('tab-open');
            $(tab).show().addClass('on');
        } else {
            $(this).addClass('tab-open');
            $(tab).show().addClass('on');
        }
    });

    //Tolltips
    var box = '.tt-box';
    $('*').mouseover(function (e) {
        var tt_title = $(this).data('tt-title');
        if (tt_title) {
            $(box).text(tt_title);
            $(box).css("left", event.pageX + 15);
            $(box).css("top", event.pageY + 15);
            $(box).fadeIn(300);
        }
    });
    $('*').mouseleave(function () {
        var tt_title = $(this).data('tt-title');
        if (tt_title) {
            $(box).fadeOut(300);
        }
    });

    //Flexisliders
    $('.flexslider.single').flexslider({
        animation: "slide"
    });

    $('.flexslider.carousel').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        minItems: 2,
        maxItems: 4
    });
});