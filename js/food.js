var bone = 12.95;
var tofu = 9.95;
var mushroom = 15.95;

//to start all the listeners
$(document).ready(function(){
    $('.foodFilter').click(function(){
        $('.foodFilter').removeClass("selected");
        $(this).toggleClass("selected");
        $(".foodGridItem").hide().fadeIn('slow');
    });
    
    /*<img src="img/restaurant.jpg">*/
    
    $('.cartTitle').click(function(){
       $('.cart').toggle();
    });
    
    //detect changes in quantity of items
    $('.quantity').bootstrapNumber();
    
    var boneValue = $('#boneCounter').val();
    var tofuValue = $('#tofuCounter').val();
    var mushroomValue = $('#mushroomCounter').val();
    
    $(document).on('keyup change click', function(){
        if($('#boneCounter').val() !== boneValue){
           boneValue = $('#boneCounter').val();
           console.log(boneValue);
       }
         if($('#tofuCounter').val() !== tofuValue){
           tofuValue = $('#tofuCounter').val();
           console.log(tofuValue);
       }
         if($('#mushroomCounter').val() !== mushroomValue){
           mushroomValue = $('#mushroomCounter').val();
           console.log(mushroomValue);
       }
        
        var sum = (boneValue * bone) + (tofuValue * tofu) + (mushroomValue * mushroom);
        sum = sum.toFixed(2);
        
        console.log(sum);
        
        $('#sum').html("餐费总额：$" + sum);
        
        var count = boneValue * 1 + tofuValue * 1 + mushroomValue * 1;
        $('#cartCount').html(count);
        
    });
    
    $('.foodGridImage img').bind('mouseenter mouseleave', function(){
       $(this).attr({
          src: $(this).attr('data-other-src'),
           'data-other-src': $(this).attr('src')
       })
    });
    
});