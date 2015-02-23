var menu_boxes_options = [
	{left: 10, top: 20, size: 15, color: '#002143', bordercolor: '#00162C'}
	, {left: 20, top: 40, size: 15, color: '#002143', bordercolor: '#00162C'}
	, {left: 35, top: 15, size: 15, color: '#002143', bordercolor: '#00162C'}
	, {left: 45, top: 35, size: 15, color: '#002143', bordercolor: '#00162C'}
	, {left: 60, top: 10, size: 15, color: '#002143', bordercolor: '#00162C'}
];
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
	
	//menu_all_boxes = {box1: new menu_one_box(20,20,20,20, '#002143', '#00162C'), box2: new menu_one_box(30,40,20,20, '#002143', '#00162C'), box3: new menu_one_box(40,15,20,20, '#002143', '#00162C')
	//	, box4: new menu_one_box(50,45,20,20, '#002143', '#00162C')
	//};
	for (var i = 0; i < menu_boxes_options.length; i++)
	{
		menu_all_boxes['box' + i] = new menu_one_box(menu_boxes_options[i].left, menu_boxes_options[i].top, menu_boxes_options[i].size, '#002143', '#00162C');
	}
}

menu_one_box = function(_left, _top, _size, _color, _border){
	countBox++;
	this.left = _left;
	this.top = _top;
	this.size = _size;
	this.namebox = '#onebox' + countBox;
	
	var ignoreRollovers = false;
	this.sizex = 0;
	this.sizey = 0;
	
	this.SetSizeXY = function(){
		if (winWidth > winHeight){
			this.sizex = winWidth / 100 * this.size;
			this.sizey = this.sizex * 0.92;
		} else {
			this.sizey = winHeight / 100 * this.size;
			this.sizex = this.sizey * 0.92;
		}
	}
	
	this.SetSizeXY();
	
	$('body').append('<a href="http://yandex.ru"><div id="onebox' + countBox + '" class="onebox">654654</div></a>');
	$(this.namebox).css({left: _left + '%', top: winHeight / 100 * _top + 'px', width: this.sizex + 'px', height: this.sizey + 'px', backgroundColor: _color, border: '1px solid ' + _border
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
	TweenMax.to($(this.namebox), Math.random() * (2.7 - 1.88) + 1.88, {scaleX:Math.random() * (0.95 - 0.88) + 0.88, scaleY:Math.random() * (0.95 - 0.88) + 0.88, force3D:true, yoyo:true, repeat:-1, ease:Power1.easeInOut});
	
	this.resizeOneBox = function(){
		this.SetSizeXY();
		$(this.namebox).css({top: winHeight / 100 * this.top + 'px', width: this.sizex + 'px', height: this.sizey + 'px'});
	}

	return this;
}



