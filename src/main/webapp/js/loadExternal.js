$(document).ready(function() {
	$('#about-content').load('../pages/about.html');
	
	$('#culture-content').load('../pages/culture.html', function(){
		//alert('animate here');														 
	});
	$('#cope-content').load('../pages/cope.html', function(){
		$(".cope_links").click(function(){
			openpopup($(this).attr('data-target'));
		});
	});
	$('#men-content').load('../pages/men.html',function(){ 
		$(".men_links").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
	});
	$('#women-content').load('../pages/women.html');
	//$('#about-content').load('../pages/cultureBuilding.html');
	$('#videos-content').load('../pages/videos.html');
	$('#be-Mentor').load('../pages/videos.html');
	$('#seekHelp-content').load('../pages/seekHelp.html');
	$('#manager-content').load('../pages/manager.html');

});
