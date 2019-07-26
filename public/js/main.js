$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('header').addClass('header-bg');
            $('.logo a img').css('width', '70%');

            $('.nav-icon').css('margin-top', '0');
            $('.nav-bg').css('top', '0');

        } else if ($('header').hasClass('header-bg')) {
            $('header').removeClass('header-bg');
            $('.logo a img').css('width', '100%');

            $('.nav-icon').css('margin-top', '20px');
            $('.nav-bg').css('top', '20px');
        }
    });

    if ($('header').offset().top >= 100) {
        $('header').addClass('header-bg');
        $('.logo a img').css('width', '70%');

        $('.nav-icon').css('margin-top', '0');
        $('.nav-bg').css('top', '0');
    }

    mapResize();
    $(window).resize(mapResize);

    $('.nav-icon .bars').click(mobile_nav_toggle);

    footer_height();
    $(window).resize(footer_height);

    var scroll = new SmoothScroll('.desktop-nav a[href*="#"], .mobile-nav a[href*="#"]');

    new WOW({
        offset: 300,
        mobile: false
    }).init();

    // $('.reviews .carousel').carousel({
    //     interval: 10000
    // });
    
});

function footer_height() {
    $('footer').css('height', $('.fixed-content').height());
}

function mobile_nav_toggle() {
    $('.bars .bar:first-child').toggleClass('bar-top-rotated');
    $('.bars .bar:nth-child(2)').toggleClass('bar-middle-disappeared');
    $('.bars .bar:last-child').toggleClass('bar-bottom-rotated');

    $('.nav-bg').toggleClass('nav-bg-active');
    $('.mobile-nav .nav').toggleClass('nav-active');
}

function mapResize() {
    if($(window).width() < 768) {
        $('.branches .map iframe').attr('height', '400px');
    } else {
        $('.branches .map iframe').attr('height', '600px');
    }
}

function viewportSize(display) {
    if(display) {
        var width = $(window).width();
        var height = $(window).height();
        $('body').prepend('<div id="viewport-size" style="position: fixed; z-index: 9999; top: 100px; left: 20px; background: rgba(255, 255, 255, 0.8); color: #555; padding: 10px;">width: ' + width + 'px <br> height: ' + height + 'px</div>');
        $(window).resize(function() {
            var width = $(window).width();
            var height = $(window).height();
            $('#viewport-size').html('width: ' + width + 'px <br> height: ' + height + 'px')
        });
    }
}
viewportSize(false);