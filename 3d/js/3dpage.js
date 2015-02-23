var winWidth = 0, winHeight = 0;

var rotation = 0;
var countBox = 0;

function ResizeMain(){
	winWidth = $(window).outerWidth();
	winHeight = $(window).outerHeight();
	
	$('body').css({backgroundSize: winWidth + 'px ' + winHeight + 'px'});
	
}

function create_menu(){
	winHeight = $(window).outerHeight();
	//set a perspective on the container so we can see the 3D-ness
	TweenLite.set($('body'), {perspective: 500});
	//offset the origin on the z-axis to make the spins more interesting.
	//TweenLite.set($('#testb'), {transformOrigin:"center center -150px"});
	menu_one_box('20%',(winHeight / 100 * 20) + 'px','200','200', '#002143', '#00162C');
	menu_one_box('30%',(winHeight / 100 * 40) + 'px','200','200', '#002143', '#00162C');
}

menu_one_box = function(_left, _top, _width, _height, _color, _border){
	var ignoreRollovers = false;
	countBox++;
	$('body').append('<a href="http://yandex.ru"><div id="onebox' + countBox + '" class="onebox">654654</div></a>');
	$('#onebox' + countBox).css({left: _left, top: _top, width: _width, height: _height, backgroundColor: _color, border: '1px solid ' + _border
		}).hover(function() {
			if (true) {
				rotation += 360;
				this.ignoreRollovers = true;
				TweenLite.to($(this), 0.6, {rotation:rotation, ease:Elastic.easeOut});
				TweenLite.delayedCall(3, function() {
					this.ignoreRollovers = false;
				});
			}
	}, function(){});
	//pulsate the box using scaleX and scaleY
	TweenMax.to($('#onebox' + countBox), Math.random() * (2.1 - 1.88) + 1.88, {scaleX:Math.random() * (0.95 - 0.88) + 0.88, scaleY:Math.random() * (0.95 - 0.88) + 0.88, force3D:true, yoyo:true, repeat:-1, ease:Power1.easeInOut});
	
	resizeOneBox = function(){
		
	}
}