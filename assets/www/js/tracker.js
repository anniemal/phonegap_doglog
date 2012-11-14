function onSuccess(position){
	alert ( 'Latitude ' + position.coords.latitude + '\n'
+
			'Longitude ' + position.coords.longitude + '\n'
			);
}

function onError(error){

	alert ('error')
}


$("#start_logging").live('click', function(){

	var watchId = navigator.geolocation.watchPosition(onSuccess, onError,{enableHighAccuracy: true});

    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	
	var map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);

$("#poop").live('click',function(){

  var poop_image = '../www/img/poop.png';
	var poop_location = new google.maps.LatLng(-34.397, 150.644);
	var poopmarker = new google.maps.Marker({
  	position: poop_location,
  	map: map,
  	icon: poop_image
});
});

$("#friend").live('click',function(){

  var friend_image = '../www/img/dog_happy.gif';
	var friend_location = new google.maps.LatLng(-34.397, 150.644);
	var friendmarker = new google.maps.Marker({
  	position: friend_location,
  	map: map,
  	icon: friend_image
});
});
$("#frenemy").live('click',function(){

  var frenemy_image = '../www/img/dog_sad.gif';
	var frenemy_location = new google.maps.LatLng(-34.397, 150.644);
	var frenemymarker = new google.maps.Marker({
  	position: frenemy_location,
  	map: map,
  	icon: frenemy_image
});
});

$("#pee").live('click',function(){

  var pee_image = '../www/img/pee.gif';
	var pee_location = new google.maps.LatLng(-34.397, 150.644);
	var peemarker = new google.maps.Marker({
  	position: pee_location,
  	map: map,
  	icon: pee_image
});
});

});