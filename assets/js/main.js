//console.log("Hello World from main.js!");


//Infowindows swipping in from sides
$(".explore").waypoint(function () {
	var myVideo = document.getElementById("explore__video");
	myVideo.play();
}, {
	offset: '40%',
	triggerOnce: true,
})