/* Your JS here. */
console.log('Hello World!')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementsByClassName("header").style.padding = "30px 10px";
    } else {
      document.getElementsByClassName("header").style.padding = "80px 10px";
    }
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

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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

window.onclick = function(event) {
  if (event.target == camodal) {
    camodal.style.display = "none";
  }
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

window.onclick = function(event) {
  if (event.target == techmodal) {
    techmodal.style.display = "none";
  }
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
}