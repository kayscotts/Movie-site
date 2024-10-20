/*let but1=document.querySelector(".movie-list-item-button-1");
let play1=document.querySelector(".play");
but1.addEventListener("click",() =>{
    play1.classList.toggle("active");
    console.log("clicked");
});*/
alert("To view movie details and also playing it please just hover any image Thanks");

const playButton = document.querySelector(".movie-list-item-button-1");
const playOverlay = document.querySelector(".play");
const playImage=document.querySelector(".playi");

if (playButton && playOverlay) {
  playButton.addEventListener("click", () => {
    playOverlay.classList.toggle("active");
    playImage.classList.toggle("active");
    playButton.classList.toggle("active");
    console.log("Play overlay toggled"); // For debugging
  });
} else {
  console.error("Elements not found: playButton or playOverlay");
};
const playButton1= document.querySelector(".movie-list-item-button-2");
const playOverlay2 = document.querySelector(".play1");
const playImage3=document.querySelector(".playi2");
if (playButton1 && playOverlay2) {
  playButton1.addEventListener("click", () => {
    playOverlay2.classList.toggle("active");
    playImage3.classList.toggle("active");
    playButton1.classList.toggle("active");
    console.log("Play overlay toggled"); // For debugging
  });
} else {
  console.error("Elements not found: playButton or playOverlay");
};

const playButton2= document.querySelector(".movie-list-item-button-3");
const playOverlay3 = document.querySelector(".play2");
const playImage4=document.querySelector(".playi3");
if (playButton2 && playOverlay3) {
  playButton2.addEventListener("click", () => {
    playOverlay3.classList.toggle("active");
    playImage4.classList.toggle("active");
    playButton2.classList.toggle("active");
    console.log("Play overlay toggled"); // For debugging
  });
} else {
  console.error("Elements not found: playButton or playOverlay");
};

const playButton3= document.querySelector(".movie-list-item-button-4");
const playOverlay4 = document.querySelector(".play3");
const playImage5=document.querySelector(".playi4");
if (playButton3 && playOverlay4) {
  playButton3.addEventListener("click", () => {
    playOverlay4.classList.toggle("active");
    playImage5.classList.toggle("active");
    playButton3.classList.toggle("active");
    console.log("Play overlay toggled"); // For debugging
  });
} else {
  console.error("Elements not found: playButton or playOverlay");
};

const playButton4= document.querySelector(".movie-list-item-button-5");
const playOverlay5= document.querySelector(".play4");
const playImage6=document.querySelector(".playi5");
if (playButton4 && playOverlay5) {
  playButton4.addEventListener("click", () => {
    playOverlay5.classList.toggle("active");
    playImage6.classList.toggle("active");
    playButton4.classList.toggle("active");
    console.log("Play overlay toggled"); // For debugging
  });
} else {
  console.error("Elements not found: playButton or playOverlay");
};
//play area
let playbut=document.querySelector(".ful");
let playarea=document.querySelector(".play-area");
let vid=document.querySelector(".play");
let hello=document.querySelector(".helo");
let cont=document.querySelector(".contd");
if(playbut && playarea){
  playbut.addEventListener("click",() =>{
    playarea.classList.toggle("activator");
    vid.classList.toggle("activator");
    hello.classList.toggle("activator");
    cont.classList.toggle("activator");
    console.log("activator clicked");
    
    
  })
};

const video = document.querySelector('.videop');
video.width = 1000; // Adjust the width as needed



