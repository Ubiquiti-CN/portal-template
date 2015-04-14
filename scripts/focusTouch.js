$(document).ready(function() {  
    $('#carousel-ads').hammer().on('swipeleft', function(){
        $(this).carousel('next'); 
    });
    $('#carousel-ads').hammer().on('swiperight', function(){
        $(this).carousel('prev'); 
    });
 }); 