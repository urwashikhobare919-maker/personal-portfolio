function goContact(){
document.getElementById("contact").scrollIntoView({
behavior:"smooth"
});
}


/* CONTACT FORM LOADER */

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

let loader=document.getElementById("loader");
let msg=document.getElementById("successMsg");

loader.style.display="block";
msg.style.display="none";

/* fake sending delay */

setTimeout(()=>{
loader.style.display="none";
msg.style.display="block";
this.reset();
},2000);

});



/* PROFESSIONAL TYPING EFFECT */

const text = ["Web Developer","Frontend Designer","Java Programmer"];
let i=0, j=0, current="", isDeleting=false;

function type(){

current=text[i];

if(isDeleting){
document.querySelector(".typing").textContent=current.substring(0,j--);
}else{
document.querySelector(".typing").textContent=current.substring(0,j++);
}

if(!isDeleting && j===current.length+1){
isDeleting=true;
setTimeout(type,1000);
return;
}

if(isDeleting && j===0){
isDeleting=false;
i=(i+1)%text.length;
}

setTimeout(type,isDeleting?40:80);
}

type();
