/* Effect: Type "Shairagavi Selvachandran", receive dictionary result */
var i = 0;
var txt = 'Shairagavi Selvachandran'; 
var speed = 75; 

function search() {
  var x = document.getElementById("search");

  if (x.innerHTML === "Search") {
    var audio = document.getElementById("typing"); 
    audio.play();
    document.getElementById("search").innerHTML = "";
    typeWriter();
  } 
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("search").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function showDefinition() {
  document.getElementById("dictionary").style.display = "block";
  document.getElementById("home-image").style.display = "none";
}

var element = document.getElementById("home-image");
element.addEventListener("click", function(){ 
  element.src = 'images/alternate.jpg';
});