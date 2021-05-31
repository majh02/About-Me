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
        nevigation.style.background="rgb(196,150,188, 0.9)";
        top_btn.style.visibility="visible"
    }
    else{
        nevigation.style.background="none";
        top_btn.style.visibility="hidden";
    }
}

var nevi_buttonArr = document.querySelectorAll('#Nevigation .menu button');
for(let i=0; i<nevi_buttonArr.length; i++){
    nevi_buttonArr[i].addEventListener('click',()=>{
        document.getElementById('title'+(i+1)).scrollIntoView(true);
    });
}
top_btn.addEventListener('click',()=>{
    document.getElementById('title1').scrollIntoView(true);
});

var project_buttonArr = document.querySelectorAll('.project .button button');
var project_itemArr = document.querySelectorAll('.project .project_container .item button');
for(let j=0; j<project_buttonArr.length;j++){
    project_buttonArr[j].addEventListener('click',()=>{
        project_buttonArr[j].style.color="rgb(249, 245, 240)";
        project_buttonArr[j].style.backgroundColor="rgb(196,150,188)";
        project_buttonArr[j].style.opacity=0.7;
        project_buttonArr[(j+1)%3].style.color="rgb(144, 144, 144)";
        project_buttonArr[(j+1)%3].style.backgroundColor="white";
        project_buttonArr[(j+2)%3].style.color="rgb(144, 144, 144)";
        project_buttonArr[(j+2)%3].style.backgroundColor="white";
        if(j==0){
            for(let a=0;a<project_itemArr.length;a++){
                project_itemArr[a].style.visibility="visible";
            }
        }
        else if(j==1){
            for(let a=0;a<4;a++){
                project_itemArr[a].style.visibility="visible";
            }
            for(let b=4;b<6;b++){
                project_itemArr[b].style.visibility="hidden";
            }
        }
        else{
            for(let a=0;a<4;a++){
                project_itemArr[a].style.visibility="hidden";
            }
            for(let b=4;b<6;b++){
                project_itemArr[b].style.visibility="visible";
            }
        }

    });
}

var project_item = document.querySelector('.project .project_container .item');
var next_btn = document.querySelectorAll('.project .project_container .next_btn');
next_btn[0].addEventListener('click',()=>{
    project_item.scrollBy(-500,0);
});
next_btn[1].addEventListener('click',()=>{
    project_item.scrollBy(500,0);
});