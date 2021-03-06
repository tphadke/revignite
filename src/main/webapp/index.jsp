<html>
<head>
<title>How to use CSS and jQuery to hide and show tab content</title>
<link rel="stylesheet" type="text/css" href="../css/tabs.css">
<link rel="stylesheet" type="text/css" href="../css/bg.css">

<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.7.2.js"></script>
<script type="text/javascript" src="js/jtabs.js"></script>
<script type="text/javascript" src="js/loadExternal.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
</head>
<body>
	<div>
		<ul class="nav nav-tabs">
			<li class="active"><a href="#seekHelp">Seek Help</a></li>
			<li><a href="#beMentor">Be Mentor</a></li>
			<li><a href="#cope">Cope</a></li>

			<li><a href="#managers">Managers</a></li>

			<li><a href="#women">Women</a></li>

			<li><a href="#men">Men</a></li>

			<li><a href="#videos">Videos</a></li>

			<li><a href="#culture">Culture</a></li>

			<li><a href="#about">About</a></li>

		</ul>
	</div>

	<section id="seekHelp" class="tab-content active">
		<div>Content in tab 1</div>
	</section>
	<section id="beMentor" class="tab-content hide">
		<div>Content in tab 2</div>
	</section>
	<section id="cope" class="tab-content hide">
		<div id="cope-content"></div>
	</section>

	<section id="managers" class="tab-content hide">
		<div id="manager-content"></div>
	</section>

	<section id="women" class="tab-content hide">
		<div id="women-content"></div>
	</section>

	<section id="men" class="tab-content hide">
		<div id="men-content"></div>
	</section>

	<section id="videos" class="tab-content hide">
		<div id="videos-content"></div>
	</section>

	<section id="culture" class="tab-content hide">
		<div id="culture-content"></div>
	</section>

	<section id="about" class="tab-content hide">
		<div id="about-content"></div>
	</section>
</body>
</html>