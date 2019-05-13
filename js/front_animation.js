$(document).ready(function () {
	$(window).scroll(function () {

		if ($(this).scrollTop() > 50) {
			$(".main_section_subContainer").css({ "opacity": "0" })

		} else {
			$(".main_section_subContainer").css({ "opacity": "1" })
		}
	});
});