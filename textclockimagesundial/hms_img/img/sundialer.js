
// to do:
// adjust animation to daylight hours
// make a nighttime animation
// try to debug instances where div does not align with bottom of image

function setTime() {

	let date = new Date();
	let secondsNow = date.getSeconds() + (60 * date.getMinutes()) + (3600 * date.getHours()); // total # seconds in 24hrs
	let allIMGDials = document.getElementsByClassName("IMGDial"); // get al of the <divs> added in newSundial

	for (let IMGDial of allIMGDials) { // for each of them do the following:
		IMGDial.style.animationDuration = "86400s" // set the full animation duration to 84600s (total number in 24hrs)
		IMGDial.style.animationDelay = -86400 + secondsNow + "s"; // negatively delay the animation to the current time
	}
}

function newSundial() {

	let images = document.getElementsByTagName("IMG"); // get all of the <img> tags on the page

	for (let IMG of images) { //loop through each item of the "images" array and do the following:
		let height = IMG.height; //get the current <img> height
		let width = IMG.width;  //get the current <img> width
		let parent = IMG.parentElement;  //get the <img>'s parent element
		let div = document.createElement("DIV");  //create a new <div> in the document
		div.classList.add("IMGDial");
		div.style.cssText = `height: ${height}px; width: ${width}px;`; //style the div with the current <img>'s height & width
		IMG.after(div); // place the new <div> on the page after the current <img> tag
	}
	setTime();
}

newSundial(); 

