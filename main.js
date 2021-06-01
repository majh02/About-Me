// Page Fadeout
// Nevigation Bar & Top Button style
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
        nevigation.style.background="rgb(196,150,188)";
        top_btn.style.visibility="visible"
    }
    else{
        nevigation.style.background="none";
        top_btn.style.visibility="hidden";
    }
}

// Nevigation menu click event
var nevi_buttonArr = document.querySelectorAll('#Nevigation .menu button');
var menu_btn = document.querySelector('#Nevigation .menu_btn');
var menu = document.querySelector('#Nevigation .menu');
for(let i=0; i<nevi_buttonArr.length; i++){
    nevi_buttonArr[i].addEventListener('click',()=>{
        document.getElementById('title'+(i+1)).scrollIntoView(true);
        if(window.innerWidth <= 900) menu.style.display="none";
    });
}

// window resize event
window.addEventListener('resize',()=>{
    if(window.innerWidth > 900)
        menu.style.display="block";
});

// Top Button click event
top_btn.addEventListener('click',()=>{
    document.getElementById('title1').scrollIntoView(true);
});

// Nevigation menu (small window size)
let count = 0;
menu_btn.addEventListener('click',()=>{
    if(count == 0){
        menu.style.display="block";
        nevigation.style.background="rgb(196,150,188)";
        count++;
    }
    else {
        if(window.pageYOffset == 0 ){
            nevigation.style.background="none";
        }
        menu.style.display="none";
        count=0;
    }
});

// Project button(Total, Web, App) click event
var project_buttonArr = document.querySelectorAll('.project .button button');
project_total = document.querySelector('.project .project_container .item');
project_web = document.querySelector('.project .project_container .item .web');
project_app = document.querySelector('.project .project_container .item .app');
for(let j=0; j<project_buttonArr.length;j++){
    project_buttonArr[j].addEventListener('click',()=>{
        project_buttonArr[j].classList.toggle('clicked');

        // project_buttonArr[j]: selected button
        project_buttonArr[j].style.color="rgb(249, 245, 240)";
        project_buttonArr[j].style.backgroundColor="rgb(196,150,188)";

        // not-selected button
        project_buttonArr[(j+1)%3].style.color="rgb(144, 144, 144)";
        project_buttonArr[(j+1)%3].style.backgroundColor="white";
        project_buttonArr[(j+2)%3].style.color="rgb(144, 144, 144)";
        project_buttonArr[(j+2)%3].style.backgroundColor="white";

        if(j==0){ //click total-button
            project_web.style.display="flex";
            project_app.style.display="flex";
            // project_web.style.animation="downup 1s ease";
            // project_app.style.animation="downup 1s ease";
        }
        else if(j==1){ //click web-button
            project_web.style.display="flex";
            project_app.style.display="none";
            // project_web.style.animation="downup 1s ease";
        }
        else{ //click app-button
            project_web.style.display="none";
            project_app.style.display="flex";
            // project_app.style.animation="downup 1s ease";
        }
    });
}

// Project item scroll event
var project_item = document.querySelector('.project .project_container .item');
var next_btn = document.querySelectorAll('.project .project_container .next_btn');
next_btn[0].addEventListener('click',()=>{
    project_item.scrollBy(-500,0);
});
next_btn[1].addEventListener('click',()=>{
    project_item.scrollBy(500,0);
});