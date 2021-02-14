function initMap() {};
// AOS.init();
    // window.addEventListener('load', AOS.refresh);
    AOS.init({
        startEvent: 'load',
    });

    $(window).on("load", function() {
        $(".loader-container").fadeOut(500);
    });