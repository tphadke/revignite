$(document).ready(function() {
	$('#about-content').load('../pages/about.html');
	
	$('#culture-content').load('../pages/culture.html', function(){
		//alert('animate here');														 
	});

	$('#cope-content').load('../pages/cope.html', function(){
		$("#Link_How_did_you_cope_with_abuse").click(function(){
			openpopup($(this).attr('data-target'));
		});
		$("#Link_Participate_in_group_therapy").click(function(){
			openpopup($(this).attr('data-target'));
		});
		
	});
	

	
	$('#men-content').load('../pages/men.html',function(){ 
		$("#menlink_one").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
		$("#menlink_two").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
		$("#menlink_three").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
		$("#menlink_four").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
		$("#menlink_five").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
		$("#menlink_six").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
		$("#menlink_seven").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
		$("#menlink_eight").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
		$("#menlink_nine").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
		$("#menlink_ten").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
		$("#menlink_eleven").click(function(){ 
			openpopup($(this).attr('data-target'));
		});
		$("#menlink_twele").click(function(){ 
			openpopup($(this).attr('data-target'));
		});	
		$("#menlink_thirteen").click(function(){ 
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
