//to start all the listeners
$(document).ready(function(){
    
    //landingIcons
    $('.landingIcon').hover(function(){
        if($(this).attr('id') == 'card'){
            $('.selectionText').html("<h4>餐到刷卡，是本地河如沒風青動象花的腳演、法實可治行重會那他學令對……</h4><h4>解释。这里是这条特色的解释。这里是这条特色的解释</h4>");
            $('.selectionText h4').hide().fadeIn(600);
        }else if($(this).attr('id') == 'geolocation'){
            $('.selectionText').html("<h4>实时定位，三火構醫裡未活世員後自木內小業雙氣花對受畫老……</h4><h4>解释。这里是这条特色的解释。这里是这条特色的解释</h4>");
            $('.selectionText h4').hide().fadeIn(600);
        }else if($(this).attr('id') == 'warming'){
            $('.selectionText').html("<h4>专业保温，一世緊開！帶之先境痛精：生了有官地員助少的道足灣</h4><h4>解释。这里是这条特色的解释。这里是这条特色的解释</h4>");
            $('.selectionText h4').hide().fadeIn(600);
        }else if($(this).attr('id') == 'zeroStart'){
            $('.selectionText').html("<h4>零元起送，基頭領快物無什物覺化我、作傳作，線注文？</h4><h4>解释。这里是这条特色的解释。这里是这条特色的解释</h4>");
            $('.selectionText h4').hide().fadeIn(600);
        }
    });
    
    //slider
    $('.featuredContainer').slick({
    });
    
    $('.blogListItem').click(function(){
        $('.blogListItem').removeClass("selected");
        $(this).toggleClass("selected");
        $("#blogPosts").hide().fadeIn('fast');
    });
    
    $('#loginButton').click(function(){
        $("#page-cover").css("opacity",0.6).fadeIn(300);
        $('#loginDialog').css({'position':'aboslute','z-index':9999});
        $('#loginDialog').show();
    });
    
    $('.closeButton').click(function(){
        $("#page-cover").css("opacity",0.6).fadeOut(300);
        $('#loginDialog').hide();
    });
    
    $('.landingIcon').bind('mouseenter mouseleave', function(){
        console.log($(this).value());
    });
    
});