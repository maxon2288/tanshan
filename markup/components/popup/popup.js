function popup() {
    $('.popupClose, .overlay').on('click', function (event) {
        $('body, html').css('overflow', 'auto');
        $('.popup, .overlay, .sidebar, .sidebar__container, .popup__container, .nav-container').removeClass('visible');
        $(".sidebar__sub-menu").css("height", 0);	
        $(".sidebar__sub-menu").removeClass("active");
        $(".open-menu span.active").removeClass("active");
        $(".sidebar").removeClass("active");
        $(".sidebar__container").css("min-width", "250px")	
        $(".overlay").removeClass("visible");
        $(".sidebar").removeClass("z1000");
    });
    
    $(".callPopup").on('click', function (event) {
        event.preventDefault();
        var popup = $(this).attr('data-popupBlock');
        $('.overlay').addClass('visible');
        $('.' + popup).addClass('visible');
        $('body, html').css('overflow', 'hidden');
        
        
    });


}