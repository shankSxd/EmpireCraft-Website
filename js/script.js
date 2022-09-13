function play() 
{
  var element = document.getElementById("dzwon");

  element.classList.add("wobble-hor-top");

  var audio = new Audio('./audio/Ring sound.mp3');
  audio.play();

  setTimeout(() => {  element.classList.remove("wobble-hor-top"); }, 500); 
}
