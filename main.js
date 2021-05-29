// let nevigation=document.getElementById('Nevigation');
// let header=document.querySelector('header');
// let header_height=header.getBoundingClientRect().height;
// window.onscroll=function(){
//     let window_Y=window.scrollY;
//     if(window_Y > header_height){
//         nevigation.style.opacity=0.9;
//     }
//     else{
//         nevigation.style.opacity=0.5;
//         nevigation.style.zIndex=1;
//     }
// }

var nystories = document.querySelector(".profile").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
      var opac = (window.pageYOffset / nystories);
      document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url('image/background.jpg') no-repeat";
  }
}