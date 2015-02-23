<!DOCTYPE html> 
<html>
	<head>
		<title>Море Туров Онлайн</title>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
		<meta name="description" content="Виртуальные туры. Туры по всему миру.">
		<meta name="keywords" content="Виртуальные туры 3D туры туры по всему миру Египет Турция Греция">
		<link rel="stylesheet" type="text/css" href="vcss/mainpage.css">
		<script type="text/javascript" src="vjquery2.1.3/jquery-2.1.3.min.js"></script>
		<script type="text/javascript" src="vscripts/mainpage.js"></script>
	</head>

	<body>
		<div id='moreturovb1'>
			<map name='mapleft'>
				<area id='shapeleft' shape='poly' coords='0,0' style='z-index: 10'>
			</map>
			<img usemap='#mapleft' id='imgleft' src='../vimages/mainpage/design-site-2.png'></img>
			<div class="vertical verright blackdiv"></div>
			<div class="horizontal horright blackdiv"></div>
		</div>
		<div id='moreturovb2'>
			<map name='mapright'>
				<area id='shaperight' shape='poly' coords='0,0' style='z-index: 10'>
			</map>
			<img usemap='#mapright' id='imgright' src='../vimages/mainpage/design-site-1.png'></img>
			<div class="vertical verleft blackdiv"></div>
			<div class="horizontal horleft blackdiv"></div>
		</div>
		<script type="text/javascript">
			$(document).ready(function(){
				ResizeMain();
			});
			$(window).load(function(){
				$("#moreturovb1").animate({left: "0"}, 1300);
				$("#moreturovb2").animate({left: "0"}, 1300, function(){setTimeout(
					function(){
						alert("Сайт находится в разработке. \r\n Стоимость одной панорамы в составе тура 700 р.\r\n По вопросам создания вритуального тура \r\n звоните по тел. 8-920-831-00-66");
					}, 1000);
				});
			});
			$(window).resize(ResizeMain);
		</script>
		<!-- Yandex.Metrika informer 
		<a href="https://metrika.yandex.ru/stat/?id=28086876&amp;from=informer"
			target="_blank" rel="nofollow"><img src="//bs.yandex.ru/informer/28086876/3_0_A0A0A0FF_808080FF_0_pageviews"
			style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" onclick="try{Ya.Metrika.informer({i:this,id:28086876,lang:'ru'});return false}catch(e){}"/></a>
		<!-- /Yandex.Metrika informer -->
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript">
		(function (d, w, c) {
			(w[c] = w[c] || []).push(function() {
				try {
					w.yaCounter28086876 = new Ya.Metrika({id:28086876,
							webvisor:true,
							clickmap:true,
							trackLinks:true,
							accurateTrackBounce:true});
				} catch(e) { }
			});

			var n = d.getElementsByTagName("script")[0],
				s = d.createElement("script"),
				f = function () { n.parentNode.insertBefore(s, n); };
			s.type = "text/javascript";
			s.async = true;
			s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

			if (w.opera == "[object Opera]") {
				d.addEventListener("DOMContentLoaded", f, false);
			} else { f(); }
		})(document, window, "yandex_metrika_callbacks");
		</script>
		<noscript><div><img src="//mc.yandex.ru/watch/28086876" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
		<!-- /Yandex.Metrika counter -->
	</body>
</html>
    	