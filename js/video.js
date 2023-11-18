var video;
var mute = false;
var current_volume;


window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Autoplay is set to false");
    video.loop = false;
	console.log("Loop is set to false");

	document.querySelector("#play").addEventListener("click",function(){
		video.play();
		console.log("Play the video");
		// Need to update the volume!!!!
		document.querySelector("#volume").textContent = Math.round(video.volume*100)+"%";
		
	})

	this.document.querySelector("#pause").addEventListener("click",function(){
		video.pause();
	})

	this.document.querySelector("#slower").addEventListener("click",function(){
		video.playbackRate *= 0.9;
		console.log("Current slowed play rate: ",video.playbackRate);
	})

	this.document.querySelector("#faster").addEventListener("click", function(){
		video.playbackRate /= 0.9;
		console.log("Current fastered play rate: ", video.playbackRate);
	})

	this.document.querySelector("#skip").addEventListener("click", function(){
		if(video.currentTime+10>=video.duration){
			video.currentTime = 0;
			video.play();
		}

		else{
			video.currentTime += 10;
			console.log("Video current time is: ", video.currentTime);
		}
	})

	this.document.querySelector("#mute").addEventListener("click", function(){
		if(mute == false){
			// console.log("Mute!!!");
			video.muted = true;
			document.querySelector("#mute").innerHTML = "Unmute";
			mute = true;
		}

		else{
			video.muted = false;
			document.querySelector("#mute").innerHTML = "Mute";
		}
	})

	this.document.querySelector("#slider").addEventListener("input",function(){
		var newVolume = document.querySelector("#slider").value/100;
		video.volume = newVolume;
		current_volume = newVolume;
		document.querySelector("#volume").textContent = Math.round(newVolume*100)+"%";
	})

	this.document.querySelector("#vintage").addEventListener("click", function(){
		video.classList.add("oldSchool");
	})

	this.document.querySelector("#orig").addEventListener("click", function(){
		video.classList.remove("oldSchool");
	})
});




// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

