// Wait for the document to load before running the script
(function ($) {
    $(window).on('load hashchange', function () {
        // Get the region from the URL hash or default to the first menu item
        var region = location.hash.toString() || $('.main-menu a:first').attr('href');

        // Remove active state and fade out all sections
        $('.content-region.active').removeClass('active').fadeOut(600, function () {
            // Fade in the new section with longer duration
            $(region).fadeIn(200).addClass('active');
        });

        // Remove any active classes on the main menu
        $('.main-menu a').removeClass('active');

        // Highlight the correct menu link
        $('.main-menu a[href="' + region + '"]').addClass('active');
    });

    // Ensure the first section is visible on page load
    $(document).ready(function () {
        var region = location.hash.toString() || $('.main-menu a:first').attr('href');
        $(region).fadeIn(600).addClass('active');
        $('.main-menu a[href="' + region + '"]').addClass('active');
    });
})(jQuery);
