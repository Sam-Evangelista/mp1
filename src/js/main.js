import * as img1 from '../assets/carousel/1.jpg';
import * as img2 from '../assets/carousel/2.jpg';
import * as img3 from '../assets/carousel/3.jpg';

let header = document.getElementById("navbar");
let expheader = document.getElementById("experience-header");
let projectheader = document.getElementById("projects-header");
let musicheader = document.getElementById("music-header");
let exppos = document.getElementById('experience-text').offsetTop - header.offsetHeight;
let projpos = document.getElementById('projects-text').offsetTop - header.offsetHeight;
let musicpos = document.getElementById('music-text').offsetTop - header.offsetHeight;

document.body.addEventListener('scroll',()=>{
  exppos = document.getElementById('experience-text').offsetTop - header.offsetHeight;
  projpos = document.getElementById('projects-text').offsetTop - header.offsetHeight;
  musicpos = document.getElementById('music-text').offsetTop - header.offsetHeight;

  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 80) {
    header.style.padding = "30px";
  } else {
    header.style.padding = "100px";
  }

  if (scrollTop >= musicpos) {
    musicheader.style.backgroundColor = "#833bd5";
  } else {
    musicheader.style.backgroundColor = "";
  }

  if (scrollTop >= projpos && scrollTop < musicpos) {
    projectheader.style.backgroundColor = "#833bd5";
  } else {
    projectheader.style.backgroundColor = "";
  }

  if (scrollTop >= exppos && scrollTop < projpos) {
    expheader.style.backgroundColor = "#833bd5";
  } else {
    expheader.style.backgroundColor = "";
  }
})

let expbtn = document.getElementById("experience-header");

expbtn.onclick = function() {
  document.body.scrollTo(0,exppos);
  expheader.style.backgroundColor = "#833bd5";
}

let projectsbtn = document.getElementById("projects-header");

projectsbtn.onclick = function() {
  document.body.scrollTo(0,projpos);
  projectheader.style.backgroundColor = "#833bd5";
}

let musicbtn = document.getElementById("music-header");

musicbtn.onclick = function() {
  document.body.scrollTo(0,musicpos);
  musicheader.style.backgroundColor = "#833bd5";
}


// factmodal
let modal = document.getElementById("fact-modal");
let factbtn = document.getElementById("fact-button");
let factclose = document.getElementById("closefact-button")

factclose.onclick = function() {
  modal.style.display = "none";
}
factbtn.onclick = function() {
  modal.style.display = "flex";
}

// camodal
let camodal = document.getElementById("ca-modal");
let cabtn = document.getElementById("ca-button");
let caclose = document.getElementById("closeca-button")

caclose.onclick = function() {
  camodal.style.display = "none";
}
cabtn.onclick = function() {
  camodal.style.display = "flex";
}

// techmodal
let techmodal = document.getElementById("tech-modal");
let techbtn = document.getElementById("tech-button");
let techclose = document.getElementById("closetech-button")

techclose.onclick = function() {
  techmodal.style.display = "none";
}

techbtn.onclick = function() {
  techmodal.style.display = "flex";
}

// techmodal
let webmodal = document.getElementById("web-modal");
let webbtn = document.getElementById("web-button");
let webclose = document.getElementById("closeweb-button")

webclose.onclick = function() {
  webmodal.style.display = "none";
}

webbtn.onclick = function() {
  webmodal.style.display = "flex";
}

window.onclick = function(event) {
  if (event.target == webmodal) {
    webmodal.style.display = "none";
  }
  if (event.target == techmodal) {
    techmodal.style.display = "none";
  }
  if (event.target == camodal) {
    camodal.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// carousel
let leftbtn = document.getElementById("left-button");
let rightbtn = document.getElementById("right-button");
let carouselimg = document.getElementById("carousel-img");

leftbtn.onclick = function() {
  let name = carouselimg.src;

  if (name === img3.default) {
    carouselimg.src = img2.default;
  } else if (name.toLowerCase() === img2.default) {
    carouselimg.src = img1.default;
  }
  else {
    carouselimg.src = img3.default;
  }
}

rightbtn.onclick = function() {
  let name = carouselimg.src

  if (name === img2.default) {
    carouselimg.src = img3.default;
  } else if (name === img3.default) {
    carouselimg.src = img1.default;
  } else {
    carouselimg.src = img2.default;
  }
  
}