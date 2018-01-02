$(document).ready(function() {
  var $cevicheCard = $('#ceviche-card');
  var $anticuchoCard = $('#anticucho-card');
  var $picaronesCard = $('#picarones-card');
  // creando efecto sobre la primera imagen
  $cevicheCard.on('mouseover', ()=>{
    $('.marino').text('Comida marina').show();
  });
  $cevicheCard.on('mouseleave', ()=>{
    $('.marino').hide();
  });
  // creando efecto sobre la segunda imagen
  $anticuchoCard.on('mouseover', ()=>{
    $('.criollo').text('Comida criolla').show();
  });
  $anticuchoCard.on('mouseleave', ()=>{
    $('.criollo').hide();
  });
  // creando efecto sobre la tercera imagen
  $picaronesCard.on('mouseover', ()=>{
    $('.dulce').text('Postres peruanos').show();
  });
  $anticuchoCard.on('mouseleave', ()=>{
    $('.dulce').hide();
  });
  // direccionar hacia una nueva página
  $cevicheCard.on('click', function() {
    window.location.href = '../views/seafood.html';  
  });
  $anticuchoCard.on('click', function() {
    // window.location.href='../views/criollo.html'; 
    alert('hey'); 
  });
  $picaronesCard.on('click', function() {
    window.location.href = '../views/dulces.html';  
  });
  var $tipoComidaFiltro = $('#tipo-comida');
  var $comidaMarinaOption = $('#comida-marina');
});