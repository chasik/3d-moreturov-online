var menu_boxes_options = [
	{left: -35, top: -30, size: 15, color: '#331100', bordercolor: '#000000', backlight: '#FF5500'}
	, {left: -25, top: 0, size: 15, color: '#220000', bordercolor: '#000000', backlight: '#FF0000'}
	, {left: -15, top: -35, size: 15, color: '#220020', bordercolor: '#000000', backlight: '#FF00F0'}
	, {left: -4, top: 10, size: 15, color: '#001111', bordercolor: '#000000', backlight: '#00FFFF'}
	, {left: 8, top: -18, size: 15, color: '#000219', bordercolor: '#000000', backlight: '#0014FF'}
	, {left: 17, top: 11, size: 15, color: '#0E0019', bordercolor: '#000000', backlight: '#8F00FF'}
];
var randomX = 0;
var randomY = 0;
var menu_all_boxes = new Object();
var winWidth = 0, winHeight = 0;

var rotation = 0;
var countBox = 0;

function ResizeMain(){
	winWidth = $(window).outerWidth();
	winHeight = $(window).outerHeight();
	
	$('body').css({backgroundSize: winWidth + 'px ' + winHeight + 'px'});
	
	for (var k in menu_all_boxes){
		menu_all_boxes[k].resizeOneBox();
	}
}

function create_menu(){
	winHeight = $(window).outerHeight();
	//set a perspective on the container so we can see the 3D-ness
	TweenLite.set($('body'), {perspective: 500});
	//offset the origin on the z-axis to make the spins more interesting.
	//TweenLite.set($('#testb'), {transformOrigin:"center center -150px"});

	for (var i = 0; i < menu_boxes_options.length; i++)
	{
		randomX = Math.random() * 2 * winWidth - winWidth;
		randomY = Math.random() * 2 * winHeight - winHeight;
		if (randomX > 0) randomX += winWidth;
		if (randomY > 0) randomY += winHeight;
		menu_all_boxes['box' + i] = new menu_one_box(menu_boxes_options[i].left, menu_boxes_options[i].top, menu_boxes_options[i].size, menu_boxes_options[i].color, menu_boxes_options[i].bordercolor, menu_boxes_options[i].backlight);
	}
}

menu_one_box = function(_left, _top, _size, _color, _border, _backlight){
	countBox++;
	this.left = _left;
	this.top = _top;
	this.leftposition = this.left;
	this.topposition = this.top;
	this.size = _size;
	this.namebox = '#onebox' + countBox;
	
	var ignoreRollovers = false;
	this.sizex = 0;
	this.sizey = 0;
	
	this.SetSizeXY = function(){
		if (winWidth > winHeight){
			this.sizex = winWidth / 100 * this.size;
			this.sizey = this.sizex * 0.92;
			this.leftposition = this.left;
			this.topposition = this.top;
		} else {
			this.sizey = winHeight / 100 * this.size;
			this.sizex = this.sizey * 0.92;
			this.leftposition = this.top;
			this.topposition = this.left;
		}
	}
	
	this.resizeOneBox = function(){
		this.SetSizeXY();
		$(this.namebox).css({width: this.sizex + 'px', height: this.sizey + 'px'});
		TweenMax.to($(this.namebox), 0.8, {left: winWidth / 2 + winWidth / 100 * this.leftposition + 'px', top: winHeight / 2 + winHeight / 100 * this.topposition + 'px', ease: Back.easeInOut.config(3)});
	}
	
	this.SetSizeXY();
	
	$('body').append('<a href="http://yandex.ru"><div id="onebox' + countBox + '" class="onebox"></div></a>');
	$(this.namebox).hover(
		function(){	$(this).css({boxShadow: '0px 0px 150px ' + _backlight }); }
		, function(){ TweenMax.to($(this), 1, {boxShadow: "0px 0px 0px " + _backlight}); }
	);
	$(this.namebox).css({backgroundColor: _color, border: '1px solid ' + _border, left: randomX + 'px', top: randomY + 'px' 
		}).hover(function() {
			if (true) {
				rotation += 360;
				this.ignoreRollovers = true;
				TweenLite.to($(this), 0.6, {rotation:rotation, ease:Elastic.easeOut});
				TweenLite.delayedCall(1, function() {
					this.ignoreRollovers = false;
				});
			}
	}, function(){});
	this.resizeOneBox();
	//pulsate the box using scaleX and scaleY
	TweenMax.to($(this.namebox), Math.random() * (1.7 - 0.88) + 0.88, {scaleX:Math.random() * (0.97 - 0.9) + 0.9, scaleY:Math.random() * (0.97 - 0.9) + 0.9, force3D:true, yoyo:true, repeat:-1, ease:Power1.easeInOut});
	
	return this;
}



