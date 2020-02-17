var listImages= document.getElementById("divSlide");
var buttons = document.querySelectorAll(".btns");
var imgs=document.getElementsByClassName("imgs");
var c=0;

 var x;
 var b = 0;
window.onload=function(){  
    setInterval(btnpres , 5000);
    datedebut.value=Date.value;
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

 
  var regPrenom=/[A-Z]{5,10}/;
  var regEmail=/\w+@\w+\.(net|com|fr)/;
  var regCode=/(?=.*[0-9])[0-9]{4,5}/;
 
  function valid(_champ,_reg){
    if(_champ.value==="" || !_champ.value.match(_reg)){
    _champ.style.border="1px solid red";
    console.log("valid");
    }
    else
        _champ.style.border="1px solid green";
    
    }

var affichage=document.getElementById("sect3");
var bclose= document.getElementById('close');
var afichage= document.getElementById("R3");
  function clicked(dafich,mspan,fclass,listAffich,affE){
  dafich.setAttribute("class",fclass);
  console.log("hello");
  listAffich.style.display="block";
  affE.textContent =mspan;
  }
  function closes(listAffich){
    listAffich.style.display="none";
    console.log("none");
    vider();
  }
  var nom = document.getElementById("Nom");
  var prenom = document.getElementById("prenom");
  var  email = document.getElementById("email");
  var dchild=document.getElementById("child1");
  var divAffichage=document.getElementById("child2");
  var Telephone=document.getElementById("Telephone");
  var Adresse=document.getElementById("Adresse");
  var zcode=document.getElementById("ZipCode");
  var divalerted=document.getElementById("alerted");
  function clickAlert(){
if(nom.value==="" || prenom.value==="" || email.value==="" || zcode.value==="" || dated(datedebut,datefin)==false){
    alert("remplir Tou les champs");
}else{
    if(dated(datedebut,datefin)==true)
    Affichimg(dchild,afichage.className,affichage);
divAffichage.innerHTML="Le Prenom est :" + prenom.value + "<br>" + "Le Nom est :" + nom.value + "<br>" + "Email est :" + email.value + "<br>" + "Peroide De :" + datedebut.value + "<br>" + "Jusqu'a :" + datefin.value + "<br>" + "Zip Code est :" + zcode.value + "<br>" ; 
vider();
}
  }
  function Affichimg(_afich,_fclass,_listAffich){
    _afich.setAttribute("class",_fclass);
    divalerted.style.display="flex";
    _listAffich.style.display="none";
  }
  function confirmer(){
      alert("Bien Confirmer");
      divalerted.style.display="none";
  }
 
  function vider(){
    nom.value="";
    prenom.value="";
    email.value="";
    datedebut.value="";
    datefin.value="";
    zcode.value="";
}
var datedebut=document.getElementById("datedebut");
var datefin=document.getElementById("datefin");
function dated(_datedebut,_datefin){
    if(_datedebut.value>_datefin.value || _datedebut.value===_datefin.value){
      _datedebut.style.border="1px solid red";
      _datefin.style.border="1px solid red";
      return false;
    }
    else{
        _datedebut.style.border="1px solid green";
        _datefin.style.border="1px solid green";
        return true;
    }
}
