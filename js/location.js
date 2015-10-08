//to start all the listeners
$(document).ready(function(){
    $('.cityButton').click(function(){
        $('.cityButton').removeClass("selected");
        $(this).toggleClass("selected");
        $(".locationGridItem").hide();
        
        switch($(this).attr('id')) {
            case 'lougheed':
                $(".lougheed").fadeIn('slow');
                break;
            case 'vancouver':
                $(".vancouver").fadeIn('slow');
                break;
            case 'richmond':
                $(".richmond").fadeIn('slow');
                break;
            case 'metrotown':
                $(".burnaby").fadeIn('slow');
                break;
            case 'surrey':
                $(".surrey").fadeIn('slow');
                break;
            case 'all':
                $(".locationGridItem").fadeIn('slow');
                break;
            case 'default':
                break;
        }
    });
    
    $('.typeButton').click(function(){
        $('.typeButton').removeClass("selected");
        $(this).toggleClass("selected");
        $(".locationGridItem").hide().fadeIn('slow');
    });
    
});