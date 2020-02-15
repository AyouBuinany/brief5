var z;
var list = document.getElementById("dpar");

function slideSection1(){

dpar.scrollLeft=z +222;
z=dpar.scrollLeft;
console.log(" ___" +z);
}
function slideSection2(){

dpar.scrollLeft=z -222;
z=dpar.scrollLeft;
console.log(" ___" +z);
}
var listImages= document.getElementById("divSlide");
var buttons = document.querySelectorAll(".btns");
var imgs=document.getElementsByClassName("imgs");
var c=0;

 var x;
 var b = 0;
window.onload=function(){  
    setInterval(btnpres , 5000);
            }
buttons[0].addEventListener("click",btnsuivant);
buttons[1].addEventListener("click",btnpres);

function btnpres(){
    if(b == 0){
        
        if(c < 4){
        listImages.scrollLeft=x + 1950;
        x=listImages.scrollLeft;
        c++;
    }
        else{
            x=0
            c = 0;
        listImages.scrollLeft = x;
        b++;
    }
    }else{
    if(c < 3){
        console.log("tania")
        listImages.scrollLeft=x +1950 ;
        x=listImages.scrollLeft;
        c++;
   }else{
       x=0
       c = 0;
    listImages.scrollLeft = x;
   
   }}
 }

 function btnsuivant(){
    
     listImages.scrollLeft=x - 1950 ;
     x=listImages.scrollLeft;
 }

 
 
  
 
 
 

  var nom = document.getElementById("Nom"), affichNom=document.getElementById("affich2");
  var prenom = document.getElementById("prenom"),affichPrenom=document.getElementById("affich1");
  var cin = document.getElementById("cin"),affichCin=document.getElementById("affich3");
  var  email = document.getElementById("email"),affichEmail=document.getElementById("affich4");
  var  password = document.getElementById("password"),affichPassword=document.getElementById("affich5");
  var  confirmationPS = document.getElementById("confirmation"),affichConfirmation=document.getElementById("affich6");
  
  var regEmail=/\w+@\w+\.(net|com|fr)/;
  var regPrenom=/[A-Z]{5,10}/;
  var regPrenom=/\w{5,10}/;
var regpass=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!=])[a-zA-Z0-9@!=]{8,}/;
  function valid(_champ,_affichage,_reg){
if(_champ.value===""){
_affichage.innerHTML="remplir le " + _champ.placeholder;
_affichage.style.color="red";
console.log("valid");
}
else if(_champ.value!="" && !_champ.value.match(_reg)){
    _champ.style.border="1px solid red";
}
else {
    _affichage.innerHTML="ok";
    _affichage.style.color="green";
    _champ.style.border="1px solid green";
    
}
}
function confirmationPassWord(){
    if(confirmationPS.value!="" && confirmationPS.value!=password.value){
        affichConfirmation.innerHTML= "tester la confirmaion";
        console.log("this");
    }
}

var _balise= document.getElementById("hAffich");
var _affich= document.getElementById("Affich");
var _bts= document.getElementById("_bts");
function affichageValid(){
if(prenom.value==="" ||  nom.value==="" || cin.value==="" || email.value==="" || password.value==="" || confirmationPS.value===""){
    _affich.classList.add("dparks");
    _affich.style.display="block";
_balise.innerHTML="Remplir Tout les Champs !";
_bts.style.display="block";
/*window.open("file:///C:/Users/admin/Desktop/picasso/test.html","_blank");*/
}
else
    alert("Welcom : " + prenom.value);
    console.log(2);

}

_bts.onclick=function(){
 /*window.open("file:///C:/Users/admin/Desktop/picasso/inscris-toi.html","_parent");*/
      _affich.style.display="none";    
}