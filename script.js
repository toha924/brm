let hash= document.location.hash;
console.log(hash)
window.onload=function(){
let aList = document.querySelectorAll("#goodslist li a");
for(i=0; i<aList.length; i++)
{if(aList[i].hash==hash){console.log(aList[i].classList); aList[i].classList.toggle('active'); document.querySelector(hash).classList.toggle('active');}
else{aList[0].classList.toggle('active')}}};

let browser;
window.addEventListener("load",iosAdapt())
window.addEventListener("resize", iosAdapt())


function iosAdapt(){console.log(navigator.userAgent);console.log(navigator.platform); if (window.navigator.userAgent.search(/iPad|iPhone|iPod/) > 0)
    /**/
{let backGround=document.querySelector('.wrapper');
console.log(document.documentElement.clientWidth); 
backGround.style.backgroundAttachment = 'local';
/*backGround.style.backgroundSize = ` ${document.documentElement.clientWidth}px 110vh`;*/
}} 