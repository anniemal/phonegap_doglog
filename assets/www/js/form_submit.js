$('#login_submit').live('click', function(){
	 
	 var url = "http://10.0.0.10:5000/save_user";
	
		 var email = $('input[name=email]');
        var password = $('input[name=password]');

        var data = 'email=' + email.val() + '&password=' + password.val();
	$.ajax({

		type:'POST',
		data: data,
		url:url,
		success: function(data){
			console.log(data);
			
			alert('You have successfully logged in to Dog Log. Get loggin');
		},
		error: function(data){
			console.log(data);
			
			alert('There was an error with your email or password. Please try logging in again.');
		}
	});


	return false;
});

