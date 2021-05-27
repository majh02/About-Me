let nevigation=document.getElementById('Nevigation');
let header=document.querySelector('header');
let header_height=header.getBoundingClientRect().height;
window.onscroll=function(){
    let window_Y=window.scrollY;
    if(window_Y > header_height){
        nevigation.style.opacity=0.9;
    }
    else{
        nevigation.style.opacity=1;
    }
}