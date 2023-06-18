$(document).ready(function () {
    // 換圖輪播
    function bannerSwitcher() {
        next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
        if (next.length) next.prop('checked', true);
        else $('.sec-1-input').first().prop('checked', true);
    }

    var bannerTimer = setInterval(bannerSwitcher, 5000);

    $('nav .controls label').click(function () {
        clearInterval(bannerTimer);
        bannerTimer = setInterval(bannerSwitcher, 5000)
    });

    // 漢堡按鈕
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });

    // 滑動至指定位置
    $('.menu a').click(function () {
        var btn = $(this).attr('href');
        var pos = $(btn).offset();

        $('html,body').animate({ scrollTop: pos.top }, 1500);
    });

    // 滑動至頂
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1500);
    });
    //指定捲軸位置淡出淡入
    $(window).scroll(function () {

        if ($(this).scrollTop() > 200) {
            $('#gotop').fadeIn();
        }

        else {
            $('#gotop').fadeOut();
        }

    });

    // 啟用JQUERY Smoove
    $('.smoove').smoove({
        offset  : '25%',
    });

});


