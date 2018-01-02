$(document).ready(function() {
  var $buttonPrev = $('#buttonPrev');
  $buttonPrev.on('click', function() {
    window.location.href = '../views/principal.html';
  });
  var restaurantNameLength = data['MIRAFLORES']['restaurantes']['seafood'].length;
  // console.log(restaurantNameLength);
    
  for (var i = 0;i < restaurantNameLength;i++) {
    var each = data['MIRAFLORES']['restaurantes']['seafood'][i]['photo'];
    var eachName = data['MIRAFLORES']['restaurantes']['seafood'][i]['name'];
    var address = data['MIRAFLORES']['restaurantes']['seafood'][i]['address'];
    var web = data['MIRAFLORES']['restaurantes']['seafood'][i]['web'];
    var rating = data['MIRAFLORES']['restaurantes']['seafood'][i]['rating'];
    var imageRestaurant = '<img class="images img-responsive" src=' + each + ' type="button" data-toggle="modal" data-target="#exampleModal">';
    var card = $('.restaurant').append('<div class="card d-inline-block w-75 m-1 bg-warning text-dark"><div class="card-body">' + imageRestaurant + eachName + '</div></div>');        
    var $cardBody = $('.card-body');
    console.log(eachName);
    /* $cardBody.eq(i).on('click',function(event){
           var name = event.currentTarget.innerText;
           //alert(event.currentTarget.innerText)
        });*/
    var modal = '<div class="container"><div class="col-xs-12"><div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><div class="modal-title" id="exampleModalLabel"><h5>' + eachName + '</h5></div><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">' + imageRestaurant + '<p>Dirección: ' + address + '</p><p>Puntuación: ' + rating + '<span class="fa fa-star text-warning" aria-hidden="true"></span></p><p>Sitio web: ' + web + '</p></div><div class="modal-footer"><button type="button" class="btn btn-primary mx-auto" data-dismiss="modal">Pedir ahora</button></div></div></div></div></div></div>';
    $('.restaurant').append(modal);
  }
});
/* var modal = '<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"><div class="modal-dialog modal-sm" role="document"><div class="modal-content">'+eachName+'</div></div></div>';
        $('.restaurant').append(modal);
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button>*/