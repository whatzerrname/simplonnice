document.getElementById("images").addEventListener("mouseover", appear);
document.getElementById("images").addEventListener("mouseout", disappear);
document.getElementById("player_button").addEventListener("mouseover", appear);
document.getElementById("player_button").addEventListener("mouseout", disappear);

function appear() {
    document.getElementById("player_button").style.opacity = "1";
}

function disappear() {
  document.getElementById("player_button").style.opacity = "0";
}

document.getElementById("images").addEventListener("mouseup", pause_play);
document.getElementById("player_button").addEventListener("mouseup", pause_play);

function pause_play() {
  var timeline = document.getElementById("timeline");
  var images = document.getElementById("images");
  var figcaption = document.getElementsByTagName("figcaption");

  if (images.style.animationPlayState == "paused") {
    images.style.animationPlayState = "running";
    timeline.style.animationPlayState = "running";
    for (i = 0; i < figcaption.length; i++) {
      figcaption[i].style.animationPlayState = "running";
    }

    document.getElementById("player_button").setAttribute("src", "icons/pause.svg");
  }
  else {
    images.style.animationPlayState = "paused";
    timeline.style.animationPlayState = "paused";
    for (i = 0; i < figcaption.length; i++) {
      figcaption[i].style.animationPlayState = "paused";
    }

    document.getElementById("player_button").setAttribute("src", "icons/play.svg");
  }
}

// Vidéos
document.getElementById("next").addEventListener("mouseup", next);
document.getElementById("previous").addEventListener("mouseup", previous);

document.getElementById("videos").addEventListener("mouseover", arrows_appear);
document.getElementById("videos").addEventListener("mouseout", arrows_disappear);
document.getElementById("next").addEventListener("mouseover", arrows_appear);
document.getElementById("next").addEventListener("mouseout", arrows_disappear);
document.getElementById("previous").addEventListener("mouseover", arrows_appear);
document.getElementById("previous").addEventListener("mouseout", arrows_disappear);

var next = document.getElementById("next");
var previous = document.getElementById("previous");

var videos = document.getElementById("videos");

function arrows_appear() {
  next.style.opacity = 1;
  previous.style.opacity = 1;
}

function arrows_disappear() {
  next.style.opacity = 0;
  previous.style.opacity = 0;
}

videos.style.marginLeft = "0%"; // Marge de base pour les vidéos

function next() {
  if (videos.style.marginLeft == "0%") {
    videos.style.marginLeft = "-100%";
  }
  else {
    videos.style.marginLeft = "-200%";
  }
}

function previous() {
  if (videos.style.marginLeft == "-200%") {
    videos.style.marginLeft = "-100%";
  }
  else {
    videos.style.marginLeft = "0%";
  }
}
