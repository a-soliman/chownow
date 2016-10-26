$(document).ready(function() {
	var firstMonthContent = $(".firstMonth")
	var secondMonthContent = $(".secondMonth")
	var thirdMonthContent = $(".thirdMonth")
	
	$("#monthOne").find("h2").addClass("selected")

	$("#monthOne").click(function() {
		$(".expect-text").css("display", "none")
		firstMonthContent.fadeIn(1000)

		$("#monthTwo, #monthThree").find("h2").removeClass("selected")
		$(this).find("h2").addClass("selected")
		event.preventDefault();
	})
	$("#monthTwo").click(function() {
		$(".expect-text").css("display", "none")
			secondMonthContent.fadeIn(1000)

			$("#monthOne, #monthThree").find("h2").removeClass("selected")
			$(this).find("h2").addClass("selected")

		event.preventDefault();
	})
})
