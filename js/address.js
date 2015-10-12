var map;	// Google map object

// Initialize and display a google map
// Create a Google coordinate object for where to initially center the map
var latlng = new google.maps.LatLng( 38.8951, -77.0367 );	// Washington, DC

// Map options for how to display the Google map
var mapOptions = { zoom: 12, center: latlng  };

var fullAddress;

//to start all the listeners
$(document).ready(function(){
    
    // Show the Google map in the div with the attribute id 'map-canvas'.
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    //show map
    var geocoder = new google.maps.Geocoder();    // instantiate a geocoder object
    
    $('#addAddressButtonHere').click(function(){
        $("#page-cover").css("opacity",0.6).fadeIn(300);
        $('#window').css({'position':'aboslute','z-index':9999});
        $('#window').show();
    });
    
    $('.subAddressBox').click(function(){
        $('.subAddressBox .status').removeClass("selected");
        var par = $('.subAddressBox input:checked').parent();
        par.find('.boxTitle .status').addClass("selected");
        console.log("hi");
    });
    
    $('#showMap').click(function(){
        $('#map').show();
        google.maps.event.trigger(map, 'resize')
        $('#map').css({'position':'aboslute','z-index':9999});

        // Get the user's inputted address
        var person = document.getElementById( "personAddress" ).value;
        var phone = document.getElementById( "phoneAddress" ).value;
        var city = document.getElementById( "cityAddress" ).value;
        var address = document.getElementById( "mapAddress" ).value;
        
        $('.subAddressBox .status').removeClass("selected");
        $('.subAddressBox input:checked').prop('checked', false);
        
        fullAddress =  "<div class='subAddressBox new'><div class='boxTitle'><p>" + person + "</p><p class='orange'>" + phone + "</p><span class='right status selected'>默认地址</span></div><div class='listdeliveryAddress'><br>" + address + "</h3></div><input type='radio' name='address' checked>送到该位置</div>";
        
        $('#deliveryAddress').html(fullAddress);
    
        /*$('.subAddressBox.new input:radio').prop("checked", true);*/
        $('.subAddressBox.new').removeClass('new');
        
        $('#window').hide();
        
        $('.subAddressBox').click(function(){
            $('.subAddressBox .status').removeClass("selected");
            var par = $('.subAddressBox input:checked').parent();
            par.find('.boxTitle .status').addClass("selected");
            console.log("hi");
        });

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
        
        $('#addresses').html(fullAddress + $('#addresses').html());
        
    });
    
    //$('#map').hide();

});

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