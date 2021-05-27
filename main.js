let nevigation=document.getElementById('Nevigation');
let header=document.querySelector('header');
let header_height=header.getBoundingClientRect().height;
window.onscroll=function(){
    let Y=window.scrollY;
    console.log(Y);
    console.log(header_height);
    if(Y>header_height){
        nevigation.style.opacity=0.8;
        nevigation.style.backgroundColor="white";
        nevigation.style.color="black";
    }
    else{
        nevigation.style.opacity=1;
        nevigation.style.backgroundColor="#ee88aa";
        nevigation.style.color="white";
    }
}