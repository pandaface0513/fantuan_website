//to start all the listeners
$(document).ready(function(){
    $('.cityButton').click(function(){
        $('.cityButton').removeClass("selected");
        $(this).toggleClass("selected");
        $(".locationGridItem").hide().fadeIn('slow');
    });
    
    $('.typeButton').click(function(){
        $('.typeButton').removeClass("selected");
        $(this).toggleClass("selected");
        $(".locationGridItem").hide().fadeIn('slow');
    });
    
});