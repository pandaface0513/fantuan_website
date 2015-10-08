//to start all the listeners
$(document).ready(function(){
    
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