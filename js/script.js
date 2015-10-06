var addressA = "<h3>Address A<br>778-239-9269<br>17420 61A ave, Surrey, B.C.</h3>";
var addressB = "<h3>Address B<br>778-239-9269<br>17420 61A ave, Surrey, B.C.</h3>";
var addressC = "<h3>Address C<br>778-239-9269<br>17420 61A ave, Surrey, B.C.</h3>";

var bone = 12.95;
var tofu = 9.95;
var mushroom = 15.95;

var boneValue, tofuValue, mushroomValue;

var sum, tax, total;

//to start all the listeners
$(document).ready(function(){
    
    var dialog = document.getElementById('window');
    
    $('#addAddressButton').click(function(){
        dialog.showModal();
    });
    
    $('#exit').click(function(){
        dialog.close();
    });
    
    //detect comment boxes click
    $('.deliveryButton').click(function(e){
        //console.log("clicked");
        
        var content = e.currentTarget.innerHTML;
        content = content.replace(/\s+/g, '');
        //console.log(content);
        
        $('#commentBox').append(content+', ');
        
    });
    
    //detect address dropdown change
    $('#addressChooser').change(function(e){
        var selected = $(':selected').val();
        
        console.log(selected);
        
        var selectedAddress;
        
        if(selected == 'A'){
            selectedAddress = addressA;
        }else if(selected == 'B'){
            selectedAddress = addressB;
        }else{
            selectedAddress = addressC;
        }
        
        $('#deliveryAddress').html(selectedAddress);
        
    });
    
    //detect changes in quantity of items
    $('.quantity').bootstrapNumber();
    
    boneValue = $('#boneCounter').val();
    tofuValue = $('#tofuCounter').val();
    mushroomValue = $('#mushroomCounter').val();
    
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
        
        sum = (boneValue * bone) + (tofuValue * tofu) + (mushroomValue * mushroom);
        sum = sum.toFixed(2);
        
        console.log(sum);
        
        $('#sum').html("餐费总额：$" + sum);
        
        $('#summary').html("$" + sum);
        
        tax = (sum * 0.05).toFixed(2);
        
        $('#tax').html("$" + tax);
        
        total = (sum * 1) + (tax * 1) + (8);
        
        total = total.toFixed(2);
        
        $('.priceTotal').html("<h2>= $" + total + " (建议小费至少10%)</h2>");
        
        var count = boneValue * 1 + tofuValue * 1 + mushroomValue * 1;
        $('#cartCount').html(count);
        
    });
    
    
});