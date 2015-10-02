//to start all the listeners
$(document).ready(function(){
    $('.categoryItemA').click(function(){
        $('.categoryItem').removeClass("selected");
        $(this).toggleClass("selected");
        $(".aboutDetails").hide().fadeIn('fast');
        
        $('.aboutTitle').html('<p>关于我们</p>');
    });
    
     $('.categoryItemB').click(function(){
        $('.categoryItem').removeClass("selected");
        $(this).toggleClass("selected");
        $(".aboutDetails").hide().fadeIn('fast');
         
        $('.aboutTitle').html('<p>联系我们</p>');
    });
    
     $('.categoryItemC').click(function(){
        $('.categoryItem').removeClass("selected");
        $(this).toggleClass("selected");
        $(".aboutDetails").hide().fadeIn('fast');
         
        $('.aboutTitle').html('<p>疑难解答</p>');
    });
    
    $('#boxTitleA').click(function(){
       $('#categoryA').toggle();
    });
    
    $('#boxTitleB').click(function(){
       $('#categoryB').toggle();
    });
    
    $('#boxTitleC').click(function(){
       $('#categoryC').toggle();
    });
});