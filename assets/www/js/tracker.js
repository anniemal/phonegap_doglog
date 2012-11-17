
var tracking_data = []; 
var event_data=[];/// array containing cor. objects
var last_values=[];
var watchId=null;
var map=null;
var condition=true;
var pretty=null;
var seconds = null;
var ticker = null;
function onSuccess(position){
		
  var myLat = position.coords.latitude;
  var myLong = position.coords.longitude;
  console.log(myLat,myLong);
  var myLatLng = new google.maps.LatLng(myLat, myLong);
  map.setCenter(myLatLng)
  tracking_data.push(myLatLng);
  last_values=[myLat,myLong];

   var trackPath = new google.maps.Polyline({
      path: tracking_data,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    // Apply the line to the map
    trackPath.setMap(map);
};

$("#poop").live('click',function(){
  console.log('here');
  var poop_image = '../www/css/img/poop.png';
  var poop_location = new google.maps.LatLng(last_values[0], last_values[1]);
  console.log(last_values[0],last_values[1])
  var poop_marker = new google.maps.Marker({
    position: poop_location,
    map: map,
    icon: poop_image
  });

  event_data.push(poop_marker);
 
});


$("#friend").live('click',function(){

  var friend_image = '../www/css/img/dog_happy.gif';
  var friend_location = new google.maps.LatLng(last_values[0], last_values[1]);
  var friend_marker = new google.maps.Marker({
    position: friend_location,
    map: map,
    icon: friend_image
});
  event_data.push(friend_marker);
});
$("#frenemy").live('click',function(){

  var frenemy_image = '../www/css/img/dog_sad.gif';
  var frenemy_location = new google.maps.LatLng(last_values[0], last_values[1]);
  var frenemy_marker = new google.maps.Marker({
    position: frenemy_location,
    map: map,
    icon: frenemy_image
});
  event_data.push(frenemy_marker);
});

$("#pee").live('click',function(){

  var pee_image = '../www/css/img/pee.gif';
  var pee_location = new google.maps.LatLng(last_values[0], last_values[1]);
  var pee_marker = new google.maps.Marker({
    position: pee_location,
    map: map,
    icon: pee_image
});
  event_data.push(pee_marker);
});

function onError(error){

	alert ('error')
}

$("#start_logging").live('click', function(){
  var start = Date.now();
	watchId = navigator.geolocation.watchPosition(onSuccess, onError,{frequency: 15000, enableHighAccuracy: true});
  var default_center = new google.maps.LatLng(37.37,121.92);
  pretty=null;
  condition=true;
  var mapOptions = {
    zoom: 15,
    center: default_center,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };
  startTimer(true);
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
});
  
$("#end_logging").live('click', function(){

  navigator.geolocation.clearWatch(watchId);
  var track_data_str=JSON.stringify(tracking_data);
  // var event_data_str=JSON.stringify(event_data);
  tracking_data=[];
  event_data=[];
  condition=false;
  console.log(track_data_str);
  // console.log(event_data_str);
  });

function tick( )
{
  if (condition==true)
  {   
    ++seconds;
    var secs = seconds;
    var hrs = Math.floor( secs / 3600 );
    secs %= 3600;
    var mns = Math.floor( secs / 60 );
    secs %= 60;
    pretty = ( hrs < 10 ? "0" : "" ) + hrs
               + ":" + ( mns < 10 ? "0" : "" ) + mns
               + ":" + ( secs < 10 ? "0" : "" ) + secs;
    document.getElementById("ELAPSED").innerHTML = pretty;
  }
  else{
    document.getElementById("ELAPSED").innerHTML = pretty;
}
}

function startTimer(condition)
{
    seconds = -1;
    ticker = setInterval("tick( )", 1000);
    tick(condition);
}

