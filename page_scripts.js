$(document).ready(function() {

setInterval(function(){
	var dt = new Date();
	// var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	// $('.time').text(time);

	var sec_deg = dt.getSeconds() * 6; // 360/60 = 6
	var min_deg = dt.getMinutes() * 6; // 360/60 = 6
	var hr_deg = dt.getHours() * 30;   // 360/12 = 30

	$('.clock .second-hand').css({'-webkit-transform':'rotate(' + sec_deg + 'deg)',
																	 '-moz-transform':'rotate(' + sec_deg + 'deg)',
																		 '-o-transform':'rotate(' + sec_deg + 'deg)',
																		'-ms-transform':'rotate(' + sec_deg + 'deg)',
																				'transform':'rotate(' + sec_deg + 'deg)'});

	$('.clock .minute-hand').css({'-webkit-transform':'rotate(' + min_deg + 'deg)',
																	 '-moz-transform':'rotate(' + min_deg + 'deg)',
																		 '-o-transform':'rotate(' + min_deg + 'deg)',
																		'-ms-transform':'rotate(' + min_deg + 'deg)',
																				'transform':'rotate(' + min_deg + 'deg)'});

	$('.clock .hour-hand').css({'-webkit-transform':'rotate(' + hr_deg + 'deg)',
																 '-moz-transform':'rotate(' + hr_deg + 'deg)',
																	 '-o-transform':'rotate(' + hr_deg + 'deg)',
																	'-ms-transform':'rotate(' + hr_deg + 'deg)',
																			'transform':'rotate(' + hr_deg + 'deg)'});

}, 1000);

});