$(document).ready(function(){
    var $buttonPrev = $('#buttonPrev');
    $buttonPrev.on('click', function(){
        window.location.href='../views/principal.html';
    })
    var restaurantNameLength = data['MIRAFLORES']['restaurantes']['seafood'].length;
    //console.log(restaurantNameLength);
    for(var i=0;i<restaurantNameLength;i++){
        var each = data['MIRAFLORES']['restaurantes']['seafood'][i]['photo'];
        //console.log(each);
        //$('.restaurant').append('<div></div>').addClass('card').append('<div></div>').addClass('card-body').append(each);
        $('.restaurant').append('<img src='+each+'>').addClass('image-restaurants');
        //var eachPhoto =data['MIRAFLORES']['restaurantes']['seafood'][i]['photo'];
        //console.log(eachPhoto);
      }
});