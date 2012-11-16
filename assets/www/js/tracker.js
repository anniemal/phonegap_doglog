
var tracking_data = [] /// array containing cor. objects

function onSuccess(position){
		
  var myLat = position.coords.latitude;
  var myLong = position.coords.longitude;
  var myLatLng = new google.maps.LatLng(myLat, myLong);
  var mapOptions = {
    zoom: 15,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  tracking_data.push(position);

  $("#poop").live('click',function(){
    console.log('here');
  var poop_image = '../www/img/poop.png';

    var poop_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var poop_marker = new google.maps.Marker({
    position: poop_location,
    map: map,
    icon: poop_image
});
   console.log(poop_location);  
});
};

// $("#friend").live('click',function(){

//   var friend_image = '../www/img/dog_happy.gif';
//   var friend_location = new google.maps.LatLng(-34.397, 150.644);
//   var friendmarker = new google.maps.Marker({
//     position: friend_location,
//     map: map,
//     icon: friend_image
// });
// });
// $("#frenemy").live('click',function(){

//   var frenemy_image = '../www/img/dog_sad.gif';
//   var frenemy_location = new google.maps.LatLng(-34.397, 150.644);
//   var frenemymarker = new google.maps.Marker({
//     position: frenemy_location,
//     map: map,
//     icon: frenemy_image
// });
// });

// $("#pee").live('click',function(){

//   var pee_image = '../www/img/pee.gif';
//   var pee_location = new google.maps.LatLng(-34.397, 150.644);
//   var peemarker = new google.maps.Marker({
//     position: pee_location,
//     map: map,
//     icon: pee_image
// });
// });

function onError(error){

	alert ('error')
}

$("#start_logging").live('click', function(){

	var watchId = navigator.geolocation.watchPosition(onSuccess, onError,{frequency: 15000});
  
});

$("#end_logging").live('click', function(){

  navigator.geolocation.clearWatch(watchId);
  var track_data_str=JSON.stringify(tracking_data);
  console.log(track_data_str);
  });


