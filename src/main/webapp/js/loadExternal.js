$(document).ready(function() {
	$('#about-content').load('../pages/about.html');
	
	$('#culture-content').load('../pages/culture.html');

	$('#cope-content').load('../pages/cope.html', function(){
		$("#How_did_you_cope_with_abuse").click(function(){
			showFirstModal();								 
		});
		$("#Participate_in_group_therapy").click(function(){
			showSecondModal();								 
		});
	});

	
	$('#men-content').load('../pages/men.html');

	
	$('#women-content').load('../pages/women.html');

	
	$('#about-content').load('../pages/cultureBuilding.html');
	
	$('#videos-content').load('../pages/videos.html');

	$('#seekHelp-content').load('../pages/seekHelp.html');
	
	$('#manager-content').load('../pages/manager.html');

});
