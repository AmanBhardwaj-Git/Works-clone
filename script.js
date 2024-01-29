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
      opacity:0,
  });
  tl.to("#loader", {
      display:'none',
  });
}
loading();

function nodesroutes(){
  
let nodelists = document.querySelectorAll('.elem h2 span')
let arraylists = [...nodelists];

arraylists.forEach((key)=>{
  key.addEventListener('mouseover',function(){
    key.closest('.elem').querySelector('.moving').style.opacity= "1"
    key.closest('.elem').querySelector('.moving').style.transform= 'translate(0 , -50%) scaleY(1)'
  
   })
  key.addEventListener('mouseleave',function(){
    key.closest('.elem').querySelector('.moving').style.opacity= "0"
    key.closest('.elem').querySelector('.moving').style.transform= 'translate(0 , -50%) scaleY(0)'
   })
})
let elemsnode = document.querySelectorAll('.elem')
let elemsarray = [...elemsnode];
elemsarray.forEach(function(ele){
    ele.addEventListener('mouseover',function(){
    let bgImg = ele.getAttribute('data-img')
    document.querySelector('#page2').style.backgroundImage = `url(${bgImg})`

})
})

}
nodesroutes();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});



