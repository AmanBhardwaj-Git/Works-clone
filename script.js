function loading() {
  var tl = gsap.timeline();

  tl.to(" #yellow1", {
    top: "-100%",
    delay: 0.5,
    duraion: 0.7,
    ease: "expo.out",
  });
  tl.from(
    " #yellow2",
    {
      top: "100%",
      delay: 0.6,
      duraion: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duraion: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loading();

function nodesroutes() {
  let nodelists = document.querySelectorAll(".elem h2 span");
  let arraylists = [...nodelists];

  arraylists.forEach((key) => {
    key.addEventListener("mouseover", function () {
      key.closest(".elem").querySelector(".moving").style.opacity = "1";
      key.closest(".elem").querySelector(".moving").style.transform =
        "translate(0 , -50%) scaleY(1)";
    });
    key.addEventListener("mouseleave", function () {
      key.closest(".elem").querySelector(".moving").style.opacity = "0";
      key.closest(".elem").querySelector(".moving").style.transform =
        "translate(0 , -50%) scaleY(0)";
    });
  });
  let elemsnode = document.querySelectorAll(".elem");
  let elemsarray = [...elemsnode];
  elemsarray.forEach(function (ele) {
    ele.addEventListener("mouseover", function () {
      let bgImg = ele.getAttribute("data-img");
      document.querySelector("#page2").style.backgroundImage = `url(${bgImg})`;
    });
  });

 

  document.querySelector("#footer #upperfooter #backdiv")
    .addEventListener("click", () => {
      scroll.scrollTo(0);
    });
  document.querySelector( "#page1 .lowerpage1 i")
    .addEventListener("click", () => {
      scroll.scrollTo(0,750);
    console.log("scrol")
    });
  document.querySelector( "#page2 .lowerpage1 i ")
    .addEventListener("click", () => {
      scroll.scrollTo(0,1900);
    console.log("scrol")
    });
    
    let count = 0;
  let navi = document.querySelector( "#nav i")
  let navi1 = document.querySelector( "#nav #slide")
  let navi2 = document.querySelector( "#nav ul")

    navi.addEventListener("click", () => {
      if(count === 0)
      {
        navi.style.transform = 'rotate(45deg) scale(1.5)'
        count=1;
        navi1.style.right = '10%';
        navi2.style.opacity = '1';
      } 
      
      // transform: rotate(45deg) scale(1.2);
      else{
        navi2.style.opacity = '0';
         navi1.style.right = '-15%';
        navi.style.transform = 'rotate(180deg) scale(1)'
        count = 0;
      }
    });
    
}
nodesroutes();
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});