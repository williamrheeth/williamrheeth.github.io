// Wait for the document to load before running the script
(function ($) {
    $(window).on('load hashchange', function () {
        // First hide all content regions
        $('.content-region').removeClass('active').fadeOut(300);

        // Remove any active classes on the main menu
        $('.main-menu a').removeClass('active');

        // Get the region from the URL hash or default to the first menu item
        var region = location.hash.toString() || $('.main-menu a:first').attr('href');

        // Fade in the selected region with animation
        setTimeout(function () {
            $(region).fadeIn(300).addClass('active');
        }, 300); // Delay to ensure a smooth transition

        // Highlight the menu link associated with this region
        $('.main-menu a[href="' + region + '"]').addClass('active');
    });

    // Ensure the first section is visible on page load
    $(document).ready(function () {
        var region = location.hash.toString() || $('.main-menu a:first').attr('href');
        $(region).fadeIn(300).addClass('active');
        $('.main-menu a[href="' + region + '"]').addClass('active');
    });
})(jQuery);
