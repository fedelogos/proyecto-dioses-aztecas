$(document).ready(function () {
	$(window).scroll(function () {

		if ($(this).scrollTop() > 50) {
			$(".main_section_subContainer").css({ "opacity": "0" })

		} else {
			$(".main_section_subContainer").css({ "opacity": "1" })
		}
	});
});

var currentBackground =0;
function changeBackground() {

	if (currentBackground == 4) currentBackground = 0;
    currentBackground++;

    $('.main_container').fadeOut(1500,function() {
        $('.main_container').css({
            'background-image' : "url(./media/calendario" + currentBackground + ".jpg)"
        });
        $('.main_container').fadeIn(1500);
    });


    setTimeout(changeBackground, 5000);
}
$(document).ready(function() {

    setTimeout(changeBackground(1), 5000);  

}); 
