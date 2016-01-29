$(window).load(function(){
    //mobile menu button
    $('#btn-toggle').on("click", function(){
        $('#menu-nav-open').toggle('slow');
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
});