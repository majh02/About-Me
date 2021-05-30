var nystories = document.querySelector(".profile").offsetTop;
var nevigation = document.getElementById('Nevigation');
var top_btn=document.getElementById('top_btn');
var header=document.querySelector('header').offsetTop;
var footer=document.querySelector('footer').offsetTop;

window.onscroll = function(){
    // Page Fadeout
    if (window.pageYOffset > 0) {
        var opac = (window.pageYOffset / nystories);
        document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url('image/background.jpg') no-repeat";
    }
    // Nevigation & TopButton
    if(window.pageYOffset >= header){
        nevigation.style.background="rgb(238, 136, 170, 0.9)";
    }
    else if(window.pageYOffset < header){
        nevigation.style.background="none";
        top_btn.style.visibility="hidden";
    }
    else{
        top_btn.style.visibility="visible"
    }
}

var buttonArr = document.querySelectorAll('#Nevigation .menu button');
for(let i=0; i<buttonArr.length; i++){
    buttonArr[i].addEventListener('click',()=>{
        document.getElementById('title'+(i+1)).scrollIntoView(true);
    });
}
top_btn.addEventListener('click',()=>{
    document.getElementById('title1').scrollIntoView(true);
});
