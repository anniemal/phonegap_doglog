var dogwalker_id_val=null;
var base_url="http://afternoon-ocean-9111.herokuapp.com"
// var base_url="http://192.168.1.7:5000"
$('#login_submit').live('click', function(){
	 

	var url = base_url + "/m_authenticate";
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
			console.log(str_data)
			dogwalker_stuff=JSON.parse(str_data);
			dogwalker_id_val=dogwalker_stuff.user_id;
			if (dogwalker_id_val=='error')
				{
				alert('There was an error with your email or password. Please try logging in again.');
				}
			else
				{
				console.log(dogwalker_stuff);
				console.log(dogwalker_id_val);
				window.location.href="#log";

				}
		},
		error: function(data){
			console.log(data);
			alert('There was an error connecting to the server. Please try logging in again.');
		}
	});
	return false;
});

$('#new_user').live('click', function(){
	 
	var url = base_url + "/m_save_user";
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
			window.location.href="#new_owner_page";

		
		},
		error: function(data){
			console.log(data);
			alert('There was an error. Please try again.');
		}
	});
	return false;
});

$('#owner_submit').live('click', function(){
	 
	var url = base_url + "/m_save_owner";
	var owner_first_name_val=document.getElementById('owner_first_name').value;
	console.log(owner_first_name_val);
	var owner_last_name_val=document.getElementById('owner_last_name').value;
	console.log(owner_last_name_val);
	var owner_phone_val=document.getElementById('owner_phone').value;
	console.log(owner_phone_val);
	var owner_email_val=document.getElementById('owner_email').value;
	console.log(owner_email_val);
	var emergency_contact_val=document.getElementById('emergency_contact').value;
	console.log(emergency_contact_val);
	var contact_phone_val=document.getElementById('contact_phone').value;
	console.log(contact_phone_val);
	var vet_name_val=document.getElementById('vet_name').value;
	console.log(vet_name_val);
	var vet_phone_val=document.getElementById('vet_phone').value;
	console.log(vet_phone_val);
	var data = {first_name: owner_first_name_val, last_name:owner_last_name_val, phone_number:owner_phone_val,
				email:owner_email_val, emergency_contact:emergency_contact_val, contact_phone:contact_phone_val, 
				vet_name:vet_name_val, vet_phone:vet_phone_val};
	console.log(data);

	$.ajax({

		type:'POST',
		data: data,
		url: url,
		success: function(data){
			console.log(data);
			var str_data=JSON.stringify(data);
			console.log(str_data);
			window.location.href="#new_dog_page";
		},
		error: function(data){
			console.log(data);
			var str_data=JSON.stringify(data);
			console.log(str_data);

			alert('There was an error reg. you. Please try again.');
		}
	});
	return false;
});

$('#dog_submit').live('click', function(){
	var sex_val='didntwork';
	var url = base_url + "/m_save_dog";
	var dog_name_val=document.getElementById('dog_name').value;
	function getResults() {
    var radios = document.getElementsByName("sex"); 
    for (var i = 0; i < radios.length; i++) {       
        if (radios[i].checked) {
            sex_val=radios[i].value;
            console.log(sex_val);
            break;
        }
    }
}
	getResults();
	console.log(sex_val);
	var breed_val=document.getElementById('breed').value;
	var needs_val=document.getElementById('needs').value;
	var data = {dog_name: dog_name_val, sex: sex_val, breed: breed_val, needs: needs_val
			};
	console.log(data);

	$.ajax({

		type:'POST',
		data: data,
		url: url,
		success: function(data){
			console.log(data);
			var str_data=JSON.stringify(data);
			console.log(str_data);
			window.location.href="#log";
		},
		error: function(data){
			console.log(data);
			alert('There was an error. Please try again.');
		}
	});
	return false;
});


	 
	



