$(document).ready(function() {
	$('#about-content').load('../pages/about.html');
	
	$('#culture-content').load('../pages/culture.html');

	$('#cope-content').load('../pages/cope.html', function(){
		$("#Link_How_did_you_cope_with_abuse").click(function(){
			showFirstModal();
		});
		$("#Link_Participate_in_group_therapy").click(function(){
			showSecondModal();
		});
		
	});

	
	$('#men-content').load('../pages/men.html',function(){ 
		$("#menlink_one").click(function(){ 
			showmenlink_one();
		});	
		$("#menlink_two").click(function(){ 
			showmenlink_two();
		});	
		$("#menlink_three").click(function(){ 
			showmenlink_three();
		});	
		$("#menlink_four").click(function(){ 
			showmenlink_four();
		});	
		$("#menlink_five").click(function(){ 
			showmenlink_five();
		});	
		$("#menlink_six").click(function(){ 
			showmenlink_six();
		});	
		$("#menlink_seven").click(function(){ 
			showmenlink_seven();
		});	
		$("#menlink_eight").click(function(){ 
			showmenlink_eight();
		});	
		$("#menlink_nine").click(function(){ 
			showmenlink_nine();
		});	
		$("#menlink_ten").click(function(){ 
			showmenlink_ten();
		});	
		$("#menlink_eleven").click(function(){ 
			showmenlink_eleven();
		});
		$("#menlink_twele").click(function(){ 
			showmenlink_twele();
		});	
		$("#menlink_thirteen").click(function(){ 
			showmenlink_thirteen();
		});	
		
	});

	
	$('#women-content').load('../pages/women.html');

	
	$('#about-content').load('../pages/cultureBuilding.html');
	
	$('#videos-content').load('../pages/videos.html');

	$('#seekHelp-content').load('../pages/seekHelp.html');
	
	$('#manager-content').load('../pages/manager.html');

});
