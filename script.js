(function ($) {
    $(window).on('load hashchange', function () {
        // Get the region from the URL hash or default to the first menu item
        var region = location.hash.toString() || $('.main-menu a:first').attr('href');

        // Remove active state and fade out all sections
        $('.content-region.active').removeClass('active').fadeOut(200, function () {
            // Fade in the new section with a shorter duration
            $(region).fadeIn(100).addClass('active');
        });

        // Remove any active classes on the main menu
        $('.main-menu a').removeClass('active');

        // Highlight the correct menu link
        $('.main-menu a[href="' + region + '"]').addClass('active');
    });

    // Ensure the first section is visible on page load
    $(document).ready(function () {
        var region = location.hash.toString() || $('.main-menu a:first').attr('href');
        $(region).fadeIn(300).addClass('active');
        $('.main-menu a[href="' + region + '"]').addClass('active');
        
        // Back-to-Top Button functionality
        $('#backToTop').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 500);
        });
    });

    // Smooth scrolling when clicking internal links
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');

        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 500, function () {
                // Change hash in URL after scrolling (without jumping)
                window.location.hash = target;
            });
        }
    });
})(jQuery);
