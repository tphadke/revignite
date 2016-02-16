$(document).ready(function(){ 
	$('[data-toggle="tooltip"]').tooltip();
	$("#clt").click(function(){
		$("#one").fadeIn( 1000, function() {
			$("#two").fadeIn(1000, function() {
				$("#three").fadeIn(1000, function() {
					$("#four").fadeIn(1000, function() {
						$("#five").fadeIn(1000, function() {
							$("#six").fadeIn(1000, function() {
							});
						});
					});
				});
			});
		});
	});
});

function openpopup(str){
	var arr = str.split(',');
	var mlink = arr[0];
	var btnlink = arr[1];
	var frm = arr[2];
	var sts = arr[3];
	clearStatusCodeforMens(sts);
	$(mlink).modal('show');
	hidemodal(mlink,btnlink);
	$(btnlink).click(function(){
		$(btnlink).unbind( "click" );					  
		postDataforMens(frm,sts,btnlink);
			
	});	
		
}

function postDataforMens(frm,sts,btnlink){
	$.ajax({
		url: 'women.html',
		dataType: 'html',
		method:'post',
		data: $(frm).serialize(),
			success: function (response) { 
				
			},
			complete: function(e, xhr, settings){
				$(sts).html(e.status);
			}
	});	
	
}

function clearStatusCodeforMens(sts){
	$(sts).html('');	
}

function hidemodal(mlink,btnlink){
	$(mlink).on('hidden.bs.modal', function () {
		$(btnlink).unbind( "click" );										  
	});

}


