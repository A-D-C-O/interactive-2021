// to do:
// Increase user-facing elements to afftect

function resetMiddle(elem) {

let width = elem.offsetWidth;
let height = elem.offsetHeight;
console.log(width + " x " + height);
}

function TextClocks() {

  let allTexts = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, dt, dd"); //h1, h2, h3, h4, h5, h6, p

  for (let allText of allTexts) {

    const list = {
      's' : `<span class="seconds">s</span>`,
      'm' : `<span class="minutes">m</span>`,
      'h' : `<span class="hours">h</span>`
    }

    resetMiddle(allText);

    allText.innerHTML = allText.innerText.replace(/[smh]/g, i => list[i]);

  }
}

function setRotation(hand, count) {

  function now() {

    let date = new Date();

    if(hand === "seconds") {
      return date.getSeconds();
    } else if (hand === "minutes") {
      return date.getMinutes();
    } else {
        let currentHour = date.getHours();
        if(currentHour > 12) {
          return currentHour - 12;
        } else {
          return currentHour;
      }       
    }
  }

  let currentTime = now(); 
  console.log(currentTime);
  let currentHand = document.getElementsByClassName(hand);

  // Original value range to be normalized to a new range:
  let minimum = 0; // Midnight on a new day
  let maximum = count; // The total number of seconds in a day

  //New value range:
  let newMinimum = 0; // zero degrees rotation
  let newMaximum = 359; // full circle rotation minus one

  //Normalized value:
  let normalized = (newMaximum - newMinimum) * [ (currentTime - minimum) / (maximum - minimum) ] + newMinimum;

  // The formula for normalizing a value x that comes from a range (y, z) between a range (a, b):
  // X_normalized = (b - a) * [ (x - y) / (z - y) ] + a

  for(i = 0; i < currentHand.length; i++) {

    currentHand[i].style.transform = `rotate(${normalized}deg)`;
  }

}

TextClocks();
setRotation();
setInterval(function(){ 
        setRotation("seconds", 60);
        setRotation("minutes", 60);
        setRotation("hours", 12); 
}, 1000);




