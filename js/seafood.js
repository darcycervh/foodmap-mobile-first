$(document).ready(function(){
    var $buttonPrev = $('#buttonPrev');
    $buttonPrev.on('click', function(){
        window.location.href='../views/principal.html';
    })
    var restaurantNameLength = data['MIRAFLORES']['restaurantes']['seafood'].length;
    //console.log(restaurantNameLength);
    
    for(var i=0;i<restaurantNameLength;i++){
        var each = data['MIRAFLORES']['restaurantes']['seafood'][i]['photo'];
        var eachName = data['MIRAFLORES']['restaurantes']['seafood'][i]['name'];

        var imageRestaurant = '<img class="images" src='+each+' type="button" data-toggle="modal" data-target="#exampleModal">';
        var card = $('.restaurant').append('<div class="card d-inline-block w-75 m-1 bg-warning text-dark"><div class="card-body">'+imageRestaurant+eachName+'</div></div>');        
        var $cardBody = $('.card-body');
        console.log(eachName);
        /*$cardBody.eq(i).on('click',function(event){
           var name = event.currentTarget.innerText;
           //alert(event.currentTarget.innerText)
        });*/
            var modal= '<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><div class="modal-title" id="exampleModalLabel"><h5>' +eachName+imageRestaurant+'</h5></div><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-primary d-flex justify-content-between" data-dismiss="modal">Pedir ahora</button></div></div></div></div>';
         $('.restaurant').append(modal);
        
        
    }
});
/*var modal = '<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"><div class="modal-dialog modal-sm" role="document"><div class="modal-content">'+eachName+'</div></div></div>';
        $('.restaurant').append(modal);
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button>*/