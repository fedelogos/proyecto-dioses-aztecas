var counter = 0;
  var colors = [
    "#0f7367",
    "#80230f",
    "#060400",
    "#f4c57c"      
  ];

$('.card').click(function(){
    $(this).toggleClass('flipped');
    $('.principal, .container').css({'background-color': colors[(counter++)%colors.length]});
});
