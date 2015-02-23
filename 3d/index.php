<!DOCTYPE html>
<html>
	<head>
		<title>Виртуальные туры</title>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
		<meta name="description" content="Виртуальные туры.">
		<meta name="keywords" content="Виртуальные туры 3D туры">
		<link rel="stylesheet" type="text/css" href="css/3dpage.css">
		<script type="text/javascript" src="vjquery2.1.3/jquery-2.1.3.min.js"></script>
		<script type="text/javascript" src="js/3dpage.js"></script>
		<script type="text/javascript" src="js/TweenMax.js"></script>
		<script type="text/javascript" src="js/TimelineMax.js"></script>
		<script type="text/javascript" src="js/EasePack.js"></script>
		<script type="text/javascript" src="js/CSSPlugin.js"></script>
	</head>
	<body>
		<script type="text/javascript">
			$(document).ready(function(){
				ResizeMain();
			});
			$(window).load(function(){
				create_menu();				
			});
			$(window).resize(ResizeMain);
		</script>
	</body>
</html>