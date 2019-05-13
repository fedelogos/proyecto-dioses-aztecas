$(document).mousemove(function(e) {
$('.logo').offset({
    left: e.pageX,
    top: e.pageY 
});
});