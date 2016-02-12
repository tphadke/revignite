function showFirstModal()
{ 
	var id=1;
	clearStatusCodeforcope(id);
	$('#How_did_you_cope_with_abuse').modal('show');
	$("#btn_cope_"+id).click(function(){
		postDataforcope(id);
	});	
} 

function showSecondModal()
{
	var id=2;
	clearStatusCodeforcope(id);
	$('#Participate_in_group_therapy').modal('show');
	$("#btn_cope_"+id).click(function(){
		postDataforcope(id);
	});	
}

function showmenlink_one(){
	var id=1;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_two(){
	var id=2;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_three(){
	var id=3;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_four(){
	var id=4;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_five(){
	var id=5;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_six(){
	var id=6;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_seven(){
	var id=7;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_eight(){
	var id=8;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_nine(){
	var id=9;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_ten(){
	var id=10;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_eleven(){
	var id=11;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_twele(){
	var id=12;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function showmenlink_thirteen(){
	var id=13;
	clearStatusCodeforMens(id);
	$('#menlink_'+id).modal('show');
	$("#btn_menlink_"+id).click(function(){
		postDataforMens(id);
	});	
}

function postDataforMens(id){
	$.ajax({
		url: 'women.html',
		dataType: 'html',
		method:'post',
		data: $('#frm_menlink_'+id).serialize(),
			success: function (response) { 
			
			},
			complete: function(e, xhr, settings){
				$('#statuscode_menlink_'+id).html(e.status);
			}
	});	
}
function clearStatusCodeforMens(id){
	$('#statuscode_menlink_'+id).html('');	
}



function postDataforcope(id){
	$.ajax({
		url: 'women.html',
		dataType: 'html',
		method:'post',
		data: $('#frm_cope_'+id).serialize(),
			success: function (response) { 
			
			},
			complete: function(e, xhr, settings){
				$('#statuscode_cope_'+id).html(e.status);
			}
	});	
}
function clearStatusCodeforcope(id){
	$('#statuscode_cope_'+id).html('');	
}
