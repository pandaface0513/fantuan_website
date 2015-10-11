var addressA = "<h3>Address A<br>778-239-9269<br>17420 61A ave, Surrey, B.C.</h3>";
var addressB = "<h3>Address B<br>778-239-9269<br>17420 61A ave, Surrey, B.C.</h3>";
var addressC = "<h3>Address C<br>778-239-9269<br>17420 61A ave, Surrey, B.C.</h3>";

var bone = 12.95;
var tofu = 9.95;
var mushroom = 15.95;

var discount = 0;

var boneValue, tofuValue, mushroomValue;

var sum, tax, total;

var map;	// Google map object

//to start all the listeners
$(document).ready(function(){
    
    //show map
    var geocoder = new google.maps.Geocoder();    // instantiate a geocoder object
    
    var dialog = document.getElementById('window');
    var mapDialog = document.getElementById('map');
    var couponDialog = document.getElementById('couponDialog');
    
    $('#showCoupon').click(function(){
        $("#page-cover").css("opacity",0.6).fadeIn(300);
        $('#couponDialog').css({'position':'aboslute','z-index':9999});
        $('#couponDialog').show();
    });

    $('#exitCoupon').click(function(){
        $('#couponDialog').hide();
        $("#page-cover").css("opacity",0.6).fadeOut(300);
    });

    $('#saveCoupon').click(function(){
        $('#couponDialog').hide();
        $("#page-cover").css("opacity",0.6).fadeOut(300);

        var selected = $('input:radio[name=coupon]:checked').val();

        if(selected == 'a'){
            //selectedAddress = addressA;
            discount = sum * 0.1;
            $('#couponName').html("10% off");
        }else if(selected == 'b'){
            //selectedAddress = addressB;
            discount = sum * 0.2;
            $('#couponName').html("20% off");
        }else if(selected == 'c'){
            //selectedAddress = addressC;
            discount = 3 * 1;
            $('#couponName').html("$3 off"); 
        }else {
            //selectedAddress = addressD;
            discount = 0;
            $('#couponName').html("None"); 
        }
        
        $('#deliveryAddress').html(selectedAddress);
        

    });

    $('#addAddressButton').click(function(){
        $('#window').show();
        $("#page-cover").css("opacity",0.6).fadeIn(300);
        $('#window').css({'position':'aboslute','z-index':9999});
    });
    
    $('#showMap').click(function(){
        $('#map').show();
        google.maps.event.trigger(map, 'resize')
        $("#page-cover").css("opacity",0.6).fadeIn(300);
        $('#map').css({'position':'aboslute','z-index':9999});

        // Get the user's inputted address
        var person = document.getElementById( "personAddress" ).value;
        var phone = document.getElementById( "phoneAddress" ).value;
        var city = document.getElementById( "cityAddress" ).value;
        var address = document.getElementById( "mapAddress" ).value;
        
        var fullAddress = "<h3>" + person + "<br>" + phone + "<br>" + address + ", " + city + "</h3>";
        
        $('#deliveryAddress').html(fullAddress);
        $('#window').hide();

        // Make asynchronous call to Google geocoding API
        geocoder.geocode( { 'address': address }, function(results, status) {
/*            var addr_type = results[0].types[0];	// type of address inputted that was geocoded*/
            if (status == google.maps.GeocoderStatus.OK ){ 
                ShowLocation( results[0].geometry.location, address);
            }
            else{     
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    });
    
    $('#exit').click(function(){
        $('#window').hide();
        $("#page-cover").css("opacity",0.6).fadeOut(300);
    });
    
    $('#exitMap').click(function(){
        $('#map').hide();
        $("#page-cover").css("opacity",0.6).fadeOut(300);
    });
    
    $('#saveMap').click(function(){
        $('#map').hide();
        $("#page-cover").css("opacity",0.6).fadeOut(300);
    });
    
    // Initialize and display a google map
    // Create a Google coordinate object for where to initially center the map
    var latlng = new google.maps.LatLng( 38.8951, -77.0367 );	// Washington, DC

    // Map options for how to display the Google map
    var mapOptions = { zoom: 12, center: latlng  };

    // Show the Google map in the div with the attribute id 'map-canvas'.
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
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

       updateCart();
        
    });
    
    
});

//update cart function
function updateCart(){
    sum = (boneValue * bone) + (tofuValue * tofu) + (mushroomValue * mushroom) - discount;
    sum = sum.toFixed(2);
        
    console.log(sum);
        
    $('#sum').html("餐费总额：$" + sum);
        
    $('#summary').html("$" + sum);
        
    tax = (sum * 0.05).toFixed(2);
        
    $('#tax').html("$" + tax);
       
    total = (sum * 1) + (tax * 1) + (8);
        
    total = total.toFixed(2);
    
    $('#discount').html("$" + discount.toFixed(2));
    $('.priceTotal').html("<h2>= $" + total + " (建议小费至少10%)</h2>");
    
    var count = boneValue * 1 + tofuValue * 1 + mushroomValue * 1;
    $('#cartCount').html(count);
}
	
// Show the location (address) on the map.
function ShowLocation( latlng, address)
{
    // Center the map at the specified location
    map.setCenter( latlng );

    // Set the zoom level according to the address level of detail the user specified
    var zoom = 12;
/*    switch ( addr_type )
    {
    case "administrative_area_level_1"	: zoom = 6; break;		// user specified a state
    case "locality"						: zoom = 10; break;		// user specified a city/town
    case "street_address"				: zoom = 15; break;		// user specified a street address
    }*/
    map.setZoom( zoom );

    // Place a Google Marker at the same location as the map center 
    // When you hover over the marker, it will display the title
    var marker = new google.maps.Marker( { 
        position: latlng,     
        map: map,      
        title: address
    });

    // Create an InfoWindow for the marker
    var contentString = "<b>" + address + "</b>";	// HTML text to display in the InfoWindow
    var infowindow = new google.maps.InfoWindow( { content: contentString } );

    // Set event to display the InfoWindow anchored to the marker when the marker is clicked.
    google.maps.event.addListener( marker, 'click', function() { infowindow.open( map, marker ); });
}
