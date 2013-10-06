if ($('.video-wrapper').length > 0) {
	// Listen for page size and write video size appropriately
	resizeVideoTo80Percent();
	$(window).bind("resize", resizeVideoTo80Percent);
}

function resizeVideoTo80Percent() {
	if ($(window).width() < 720) {
		var videoWidth = $(window).width() * 0.8;
		var videoHeight = $(window).width() * 0.50;
		$('.video-wrapper').width(videoWidth);
		$('.video-wrapper iframe').width(videoWidth).height(videoHeight);
	} else {
		$('.video-wrapper').width(720);
		$('.video-wrapper iframe').width(720).height($('.video-wrapper iframe').attr('data-height'));
	}
}

