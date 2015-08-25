$(document).on('ready', function(){
	$("#order-form").submit(function() {
		var abort = false; 
		$("div.error").remove(); 
		$(':input[required]').each(function(){
			if ($(this).val()==='') { 
				abort = true; 
			}
		});
		
		if (abort) {return false;} else {return true;} //
		
        });
	$('#order-form').validate({
		"rules" : {
			"#your-name": {
			required: true,
			digits: false,
			maxlength: 128
			},
			"#your-email": {
			required: true,
			},
			"#your-phone": {
			required: false,
			},
			"#your-input": {
			required: true,
			maxlength: 500,
			},
		}
	});
});
