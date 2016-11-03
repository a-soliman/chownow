$(document).ready(function() {
	
	//Nav Bar
	var introHeight = $('.intro').height()
	
	$(window).scroll(function() {
		
		if(($(this).scrollTop() > introHeight) && ($(this).width() > 769 )) {
			$('.nav').addClass('scrolled-nav')
			console.log("now")
			// $('nav').removeClass('navbar-static')

		} 
		else {
			$('.nav').removeClass('fixed-navbar')
			// $('nav').addClass('navbar-static')

		}
	})

	//Carousel
	var firstMonthContent = $(".firstMonth")
	var secondMonthContent = $(".secondMonth")
	var thirdMonthContent = $(".thirdMonth")
	
	$("#monthOne").find("h2").addClass("selected")

	$("#monthOne").click(function(event) {
		$(".expect-text").css("display", "none")
		firstMonthContent.fadeIn(1000)

		$("#monthTwo, #monthThree").find("h2").removeClass("selected")
		$(this).find("h2").addClass("selected")
		event.preventDefault();
	})

	$("#monthTwo").click(function(event) {
		$(".expect-text").css("display", "none")
			secondMonthContent.fadeIn(1000)

			$("#monthOne, #monthThree").find("h2").removeClass("selected")
			$(this).find("h2").addClass("selected")

		event.preventDefault();
	})

	$("#monthThree").click(function(event) {
		$(".expect-text").css("display", "none")
			thirdMonthContent.fadeIn(1000)

			$("#monthOne, #monthTwo").find("h2").removeClass("selected")
			$(this).find("h2").addClass("selected")

		event.preventDefault();
	})
})
