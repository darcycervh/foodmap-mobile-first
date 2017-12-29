$(document).ready(function(){
    var $cevicheCard = $('#ceviche-card');
    var $anticuchoCard = $('#anticucho-card');
    var $picaronesCard = $('#picarones-card');

    $cevicheCard.on('mouseover',function(){
        //alert('hey! con respeto!');
        $('.marino').text('¿Algo fresco?');
    });
    $cevicheCard.on('click', function(){
        setTimeout(function(){ 
        window.location.href='../views/seafood.html'; 
        }, 1000);
    })

    $anticuchoCard.on('mouseover',function(){
        $('.criollo').text('¿Qué tal algo con sabor a tradición?');
    });

    $picaronesCard.on('mouseover',function(){
        $('.dulce').text('¿Qué tal algo dulce?');
    });
});