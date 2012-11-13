document.addEventListener("deviceready", function(){
	if (navigator.network.connection.type==Connection.NONE)
{
	$("#start_logging").text('No GPS Access')
					   .button('refresh');
}

});

$("#start_logging").live('click'), function(){

	var watchId = navigator.geolocation.watchPosition(onSuccess, geolocationError,{enableHighAccuracy: true});
}

function onSuccess(position){
	alert ( 'Latitude ' + position.coords.latitude + '/n'
+
			'Longitude ' + position.coords.longitude + '/n'
			);
}

function onError(position){

	alert ('error')
}


