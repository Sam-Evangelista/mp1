document.body.addEventListener('scroll',()=>{
  const header = document.getElementById("navbar");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.style.padding = "5px";
  } else {
    header.style.padding = "100px";
  }
})


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
  let name = carouselimg.src.split("/").pop();

  if (name.toLowerCase() === "3.jpeg") {
    carouselimg.src = "/assets/carousel/2.JPG";
  } else if (name.toLowerCase() === "2.jpg") {
    carouselimg.src = "/assets/carousel/1.jpg";
  }
  else {
    carouselimg.src = "/assets/carousel/3.jpeg";
  }
}

rightbtn.onclick = function() {
  let name = carouselimg.src.split("/").pop();

  if (name.toLowerCase() === "2.jpg") {
    carouselimg.src = "/assets/carousel/3.jpeg";
  } else if (name.toLowerCase() === "3.jpeg") {
    carouselimg.src = "/assets/carousel/1.jpg";
  } else {
    carouselimg.src = "/assets/carousel/2.JPG";
  }
  
}