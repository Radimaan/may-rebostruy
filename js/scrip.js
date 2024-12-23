// side bar start
function openNav() {
  "use strict";
  const sidepanel = document.getElementById("mySidepanel");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("Error: sidepanel not found");
  }
}
function closeNav() {
  "use strict";
  const sidepanel = document.getElementById("mySidepanel");
  if (sidepanel) {
    sidepanel.style.left = "-320px";
  } else {
    console.error("Error: sidepanel not found");
  }
}
// search
function open_search() {
  const searchpanel = document.getElementById("search-bar");
  if (searchpanel) {
    searchpanel.style.height = "100vh";
    searchpanel.style.borderRadius = "0";
  } else {
    console.error("Error: search sidepanel not found");
  }
}

function close_search() {
  const searchpanel = document.getElementById("search-bar");
  if (searchpanel) {
    searchpanel.style.height = "0%";
    searchpanel.style.borderTopLeftRadius = "100%";
    searchpanel.style.borderTopRightRadius = "100%";
  } else {
    console.error("Error: search sidepanel not found");
  }
}

// portafolio gallry tab

function open_img(evt, sityName) {
  let i, tabcontent, tabLinks;
  // hide all tab content

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // remove active class from all toblinks

  tabLinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }
  //show the selected tab conten and mark the correspanding tab link as active

  document.getElementById(sityName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

//responcive logipsum slider

$(".sliderlogo").slick({
  arrows: false,
  dots: false,
  Infinite: false,
  outoplay: false,
  speed: 300,
  slidesToShow: 5,
  sliderToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      sittings: {
        slidesToShow: 4,
        sliderToScroll: 1,
        Infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      sittings: {
        slidesToShow: 2,
        sliderToScroll: 1,
      },
    },
  ],
});

//responcive team slider
$(".team-slider").slick({
  arrows: false,
  dots: false,
  Infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        Infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

document.addEventListener("DOMContentLoaded", function () {
  let accordionbuttons = document.querySelectorAll(".accordion-button");
  let acoimg = document.querySelectorAll(".accordion-button img");

  accordionbuttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      let collapse = this.parentElement.nextElementSibling;

      accordionbuttons.forEach(function (OtherButton, OtherIndex) {
        if (OtherButton !== button) {
          let otherCollapse = OtherButton.parentElement.nextElementSibling;

          // Close other collapses
          otherCollapse.style.maxHeight = null;

          // Reset other images and styles
          acoimg[OtherIndex].src = "Images/icon/plus.png";
          acoimg[OtherIndex].style.transform = "rotate(0deg)";
          OtherButton.style.backgroundColor = "#fff";
        }
      });

      if (collapse.style.maxHeight) {
        // Close current collapse
        collapse.style.maxHeight = null;

        acoimg[index].src = "Images/icon/plus.png";
        acoimg[index].style.transform = "rotate(0deg)";
        button.style.backgroundColor = "";
      } else {
        // Open current collapse
        collapse.style.maxHeight = collapse.scrollHeight + "px";

        acoimg[index].src = "Images/icon/menus.png";
        acoimg[index].style.transform = "rotate(180deg)";
        button.style.backgroundColor = "#c1b0b5";
      }
    });
  });
});

// footer
const fom = document.getElementById("footer-form");
const footermessege = document.getElementById("footer-messege");

fom.addEventListener("submit", (event) => {
  event.preventDefault();
  footermessege.innerHTML = "~ Form Submited Success Fully";
  footermessege.style.display = "flex";
  fom.reset();
  setTimeout(() => {
    footermessege.style.display = "none";
  }, 3000);
});

window.onscroll = function(){
scrollfunction();
}
function scrollfunction(){
  if(document.body.scrollTop > 20 ||  document.documentElement.scrollTop > 20){
    document.getElementById("backToTopBtn").style.display = 'block';
  }else{
        document.getElementById("backToTopBtn").style.display = "none";

  }
}
function scrollToTop(){
  const scrollTOTopbtn = document.documentElement || document.body;
  scrollTOTopbtn.scrollIntoView({
    behavior: 'smooth'
  })
}




// activete
function setActive(clickedButton) {
  // Get all buttons within the 'buttonContainer' ul
  const buttons = document.querySelectorAll("#buttonContainer .nav-link");

  // Remove the 'active' class from all buttons
  buttons.forEach((button) => button.classList.remove("active"));

  // Add the 'active' class to the clicked button
  clickedButton.classList.add("active");
}

