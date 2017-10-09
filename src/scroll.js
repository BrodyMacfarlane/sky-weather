import $ from 'jquery'

$(document).ready(function(){
    // var focus = false;
    var ScrollTop;
    // $('.searchInput').on("focusin", function(){
    //     $(this).css("opacity", 1)
    //     focus = true;
    // })
    // $('.searchInput').on("focusout", function(){
    //     ScrollTop = parseInt($(window).scrollTop());
    //     if(ScrollTop < 100){
    //         $(this).css("opacity", 1.0 - ScrollTop/100)
    //     }
    //     else {
    //         $(this).css("opacity", 0)
    //     }
    //     focus = false;
    // })
    // $(document).bind('keydown',function(e){
    //     $('.location-search').focus();
    // });
    $(".search").on("click", function(){
        $('html, body').animate({
            scrollTop: $(".location-search").offset().top
        }, 1000);
        $('.location-search').focus();
    })
    
    $('body').on("keypress", function(){
        ScrollTop = parseInt($(window).scrollTop());
        if(ScrollTop < 800){
            $('html, body').animate({
                scrollTop: $(".location-search").offset().top
            }, 1000);
            $('.location-search').focus();
        }
    })


    $(window).scroll(function(){
        ScrollTop = parseInt($(window).scrollTop());
        $(".searchInput").css("opacity", 1.0 - ScrollTop/100)
        if(ScrollTop > 100){
            $(".searchInput").hide()
        }
        else {
            $(".searchInput").show()
        }
    });

    $('.how-block-container').on('mouseover', function(){
        $('.how-block-container').css('width', '31.33%')
        $(this).css('width', '37.34%')
        $(this).css('height', '80px')
        $(this).css('position', 'relative').animate({bottom: '10px'})
        $(this.getElementsByClassName('how')).css('color', '#CADEFF')
    })

    $('.how-block-container').on('mouseleave', function(){
        $('.how-block-container').css('width', '33.33%')
        $(this).css('height', '60px')
        $(this).css('position', 'relative').animate({bottom: '0px'})
        $(this.getElementsByClassName('how')).css('color', '#191919')
    })
})