/*画像を時間経過で自動的に切り替える*/
$('.p-top__img img:nth-child(n+2)').hide();
    setInterval(function() {
    $(".p-top__img img:first-child").fadeOut(1500);
    $(".p-top__img img:nth-child(2)").fadeIn(1500);
    $(".p-top__img img:first-child").appendTo(".p-top__img");
    }, 4500
);
/*リロード時のフェードイン*/
$(window).on("load", function() {
    $('body').fadeIn(2500); 
});

/*スクロール時のフェードイン*/
$(function(){
    $(window).scroll(function (){
        $('.jsFade').each(function(){
            var pos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > pos - windowHeight + 100){
                $(this).addClass('scroll');
            }
        });
    });
});