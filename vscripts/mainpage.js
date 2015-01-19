var winWidth = 0, winHeight = 0;

function ResizeMain(){
	winWidth = $(window).outerWidth();
	winHeight = $(window).outerHeight();
	
	$("#moreturovb1, #moreturovb2, #imgleft, #imgright").outerHeight(winHeight);
	$("#moreturovb1, #moreturovb2, #imgleft, #imgright").css({width: winWidth * 0.87});
	
	$('#shapeleft').attr('coords', '0,0, 0,' + winHeight + ', ' + winWidth * 0.1 + ',' + winHeight + ', ' + winWidth * 0.8 + ',0');
	$('#shaperight').attr('coords', winWidth * 0.05 + ',' + winHeight + ', ' + winWidth * 0.77 + ',0, ' + (winWidth - winWidth * 0.1) + ',0, ' + (winWidth - winWidth * 0.1) + ',' + winHeight);
}