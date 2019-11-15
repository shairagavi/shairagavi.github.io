const hp = document.getElementById("hp");

window.onload = () => {
  const about = document.getElementById("about");
  about.addEventListener("mouseover", function() {
    if (about.getAttribute('src') === 'images/shairagavi-1.jpg') {
      about.src = 'images/shairagavi-2.jpg';
    } else {
      about.src = 'images/shairagavi-1.jpg';
    }
  });

  const dev = document.getElementById("dev");
  dev.addEventListener("mouseover", function() {
    if (dev.getAttribute('src') === 'images/yoyos-1.jpg') {
      dev.src = 'images/yoyos-2.jpg';
    } else {
      dev.src = 'images/yoyos-1.jpg';
    }
  });

  const business = document.getElementById("bus");
  business.addEventListener("mouseover", function() {
    if (business.getAttribute('src') === 'images/bus-1.jpg') {
      business.src = 'images/bus-2.jpg';
    } else {
      business.src = 'images/bus-1.jpg';
    }
  });

  const movie = document.getElementById("movie");
  movie.addEventListener("mouseover", function() {
    if (movie.getAttribute('src') === 'images/tiff-1.jpg') {
      movie.src = 'images/tiff-2.jpg';
    } else {
      movie.src = 'images/tiff-1.jpg';
    }
  });

  const dance = document.getElementById("dance");
  dance.addEventListener("mouseover", function() {
    if (dance.getAttribute('src') === 'images/dance-1.jpg') {
      dance.src = 'images/dance-2.jpg';
    } else {
      dance.src = 'images/dance-1.jpg';
    }
  });
}


function showImg(id) {
  document.getElementById(id).style.display = "block";
}

function hideImg(id) {
  document.getElementById(id).style.display = "none";
}
