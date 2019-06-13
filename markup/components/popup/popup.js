function popup() {
    $('.popupClose, .overlay').on('click', function (event) {
        $('body, html').css('overflow', 'auto');
        $('.popup, .overlay, .sidebar, .popup__container, .nav-container').removeClass('visible');
    });
    
    $(".callPopup").on('click', function (event) {
        event.preventDefault();
        var popup = $(this).attr('data-popupBlock');
        $('.overlay').addClass('visible');
        $('.' + popup).addClass('visible');
        $('body, html').css('overflow', 'hidden');
    });


}