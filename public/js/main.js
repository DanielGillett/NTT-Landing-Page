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

    $('button.corporateButton').click(() => {
        $('form.corporateForm').submit(function (event) {
            event.preventDefault();
            var data = {
                email: $('#corporateForm input').val()
            }
            ajaxPost('#corporateForm', data, `<p>Thank you your interest in our on-site program.  We will get back to you shortly at <strong>${data.email}</strong>!</p>`);
        });
    });

    $('button.wantedButton').click(() => {

        $('form.wantedForm').submit(function (event) {
            event.preventDefault();
            var data = {
                email: $('#wantedForm input').val()
            }

            ajaxPost('#wantedForm', data, `<p>Thank you for your email address.  We will get back to you shortly.  <strong>${data.email}</strong></p>`)
        });
    });

    $('button.contactButton').click(() => {
        $('form.contactForm').submit(function (event) {

            // don't seem to be getting all of the data
            // email and message are not coming through.
            event.preventDefault();
            var data = {
                first:$('#contactForm input:text[name="first"]').val(),
                last: $('#contactForm input:text[name="last"]').val(),
                email:$('#contactForm input:text[name="email"]').val(),
                message:$('#contactForm textarea').val() 
            }
            
            ajaxPost('#contactForm', data, `<p>Thank you for contacting us.  Someone will get back to you as soon as possible.</p>`)
        });
    })

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

    new CookiesEuBanner(function () {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 
        // Don't forget to put your own UA-XXXXXXXX-X code
        ga('create', 'UA-23328752-1', 'auto');
        ga('send', 'pageview');
    });

});

function ajaxPost(formName, formData, message) {

    $.ajax({
        type: 'POST',
        url: '/contact',
        dataType: 'json',
        data: JSON.stringify(formData),
        contentType: 'application/json',
        cache: false,
        timeout: 5000,
        success: (data, textStatus) => $(formName).html(message),
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (textStatus == 'timeout') console.log('Timeout');
            else if (textStatus == 'error') console.log('Error: ', errorThrown);
            else console.log('Unknown Ajax Error')
        },
        complete: (data) => console.log('Ajax Process Complete')
    });

}

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
    if ($(window).width() < 768) {
        $('.branches .map iframe').attr('height', '400px');
    } else {
        $('.branches .map iframe').attr('height', '600px');
    }
}

function viewportSize(display) {
    if (display) {
        var width = $(window).width();
        var height = $(window).height();
        $('body').prepend('<div id="viewport-size" style="position: fixed; z-index: 9999; top: 100px; left: 20px; background: rgba(255, 255, 255, 0.8); color: #555; padding: 10px;">width: ' + width + 'px <br> height: ' + height + 'px</div>');
        $(window).resize(function () {
            var width = $(window).width();
            var height = $(window).height();
            $('#viewport-size').html('width: ' + width + 'px <br> height: ' + height + 'px')
        });
    }
}
viewportSize(false);