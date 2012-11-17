$('#login_submit').live('click', function(){
	 
	var url = "http://10.0.0.13:5000/m_authenticate";
	var email_val=document.getElementById('email').value;
	console.log(email_val);
	var password_val=document.getElementById('password').value;
	console.log(password_val);
	var data = {email: email_val, password: password_val};
	console.log(data);

	$.ajax({

		type:'POST',
		data: data,
		url: url,
		success: function(data){
			console.log(data);
			var str_data=JSON.stringify(data);
			console.log(str_data);
			alert('You have successfully logged in to Dog Log. Get loggin');
		},
		error: function(data){
			console.log(data);
			alert('There was an error with your email or password. Please try logging in again.');
		}
	});
	return false;
});

$('#new_user').live('click', function(){
	 
	var url = "http://10.0.0.13:5000/m_save_user";
	var first_name_val=document.getElementById('first_name').value;
	var last_name_val=document.getElementById('last_name').value;
	var company_name_val=document.getElementById('company_name').value;
	var phone_val=document.getElementById('phone').value;
	var email_val=document.getElementById('new_user_email').value;
	console.log(email_val);
	var password_val=document.getElementById('new_user_password').value;
	console.log(password_val);
	var data = {first_name: first_name_val, last_name: last_name_val, company_name: company_name_val,
				phone: phone_val, email: email_val, password: password_val};
	console.log(data);

	$.ajax({

		type:'POST',
		data: data,
		url: url,
		success: function(data){
			console.log(data);
			var str_data=JSON.stringify(data);
			console.log(str_data);
		
		},
		error: function(data){
			console.log(data);
			alert('There was an error reg. you. Please try again.');
		}
	});
	return false;
});

