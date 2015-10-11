var bone = 12.95;
var tofu = 9.95;
var mushroom = 15.95;
var huiguo = 8.89;
var otherValue = 0;

//to start all the listeners
$(document).ready(function(){
    $('.foodFilter').click(function(){
        $('.foodFilter').removeClass("selected");
        $(this).toggleClass("selected");
        $(".foodGridItem").hide().fadeIn('slow');
    });
    
    $('.topFiltersButton').click(function(){
        $('.topFiltersButton').removeClass("selected");
        $(this).toggleClass("selected");
    });
    
    $('.sizeFiltersButton').click(function(){
        $('.sizeFiltersButton').removeClass("selected");
        $(this).toggleClass("selected");
    });
    
    $('#exitFood').click(function(){
       $("#page-cover").css("opacity",0.6).fadeOut(300);
        $('#foodDetails').hide();
    });
    
    $('#addFood').click(function(){
       $("#page-cover").css("opacity",0.6).fadeOut(300);
        $('#foodDetails').hide();
        $('#cartItems').append("<li class='orderItem'><p>" + "Pizza" + "<br>$8.99</p><div class='right'><input class='newQuantity' id='mushroomCounter' type='number' name='bone' value='1' min='1' max='99'></div></li>");

            $('.newQuantity').bootstrapNumber();
            $('.newQuantity').addClass('quantity').removeClass('newQuantity');

            otherValue++;
    });
    
    /*<img src="img/restaurant.jpg">*/
    
    $('.cartTitle').click(function(){
       $('.cart').toggle();
    });
    
    //detect changes in quantity of items
    $('.quantity').bootstrapNumber();
    
    var boneValue = $('#boneCounter').val();
    var tofuValue = $('#tofuCounter').val();
	var huiGuoValue = $('#huiguorouCounter').val() == null ? 0: $('#huiguorouCounter').val();
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
	   
	   if($('#huiguorouCounter').val() !== huiGuoValue){
		   huiGuoValue = $('#huiguorouCounter').val() == null ? 0: $('#huiguorouCounter').val();
           console.log(huiGuoValue);
       }
	   
         if($('#mushroomCounter').val() !== mushroomValue){
           mushroomValue = $('#mushroomCounter').val();
           console.log(mushroomValue);
       }
        
        var sum = (boneValue * bone) + (tofuValue * tofu) + (mushroomValue * mushroom) + (huiGuoValue * huiguo) + (8.99 * otherValue);
 
		sum = sum.toFixed(2);
        
        console.log(sum);
        
        $('#sum').html("餐费总额：$" + sum);
        
        var count = boneValue * 1 + tofuValue * 1 + mushroomValue * 1 + huiGuoValue * 1+ otherValue * 1;
        $('#cartCount').html(count);
        
    });
    
    $('.foodGridItem').bind('mouseenter mouseleave', function(){
        $(this).find("img").attr({
          src: $(this).find("img").attr('data-other-src'),
           'data-other-src': $(this).find("img").attr('src')
        });
    });
    
    $('.foodGridItem').click(function(){
/*       var foodName = $(this).find("foodInfo").innerHTML;*/
        var clickedItemId = $(this).closest('div.foodGridItem').attr('id')+'Counter';
		// if any of the item is already in cart, then increase the original value by 1 when try to add item from menu lise
		
		if(clickedItemId == 'huiguorouCounter' && huiGuoValue > 0){
		   huiGuoValue++;
		   $('#huiguorouCounter').val(huiGuoValue);
		   $(this).trigger('keyup change click');
		} else {
/*        console.log(foodName);*/
        if($(this).hasClass("specialPop")){
            $("#page-cover").css("opacity",0.6).fadeIn(300);
            $('#foodDetails').show();
            $('#foodDetails').css({'position':'aboslute','z-index':9999});
        }
        else{
            $('#cartItems').append("<li class='orderItem'><p>" + "锅包肉" + "<br>$8.99</p><div class='right'><input class='newQuantity' id='"+ clickedItemId +"' type='number' name='bone' value='1' min='0' max='99'></div></li>");

            $('.newQuantity').bootstrapNumber();
            $('.newQuantity').addClass('quantity').removeClass('newQuantity');

            otherValue++;
        }
		}
    });
    
});