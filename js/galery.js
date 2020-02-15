var buttons = document.querySelectorAll(".btns");
 var listImages= document.getElementById("divSlide");
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
 var afichimag=document.getElementsByClassName("sections");
 var btnsLide=document.getElementsByClassName("btn");
 var z;
 btnsLide[0].addEventListener("click",function(){slideSection1(afichimag[0])});
 btnsLide[1].addEventListener("click",function(){slideSection2(afichimag[0])});
 btnsLide[2].addEventListener("click",function(){slideSection1(afichimag[1])});
 btnsLide[3].addEventListener("click",function(){slideSection2(afichimag[1])});
 btnsLide[4].addEventListener("click",function(){slideSection1(afichimag[2])});
 btnsLide[5].addEventListener("click",function(){slideSection2(afichimag[2])});
 btnsLide[6].addEventListener("click",function(){slideSection1(afichimag[3])});
 btnsLide[7].addEventListener("click",function(){slideSection2(afichimag[3])});
 btnsLide[8].addEventListener("click",function(){slideSection1(afichimag[4])});
 btnsLide[9].addEventListener("click",function(){slideSection2(afichimag[4])});
 function slideSection1(df){
 
    df.scrollLeft=z -80;
    z=df.scrollLeft;
 console.log(z);
 }
 function slideSection2(df){
    
   df.scrollLeft=z +80;
    z=df.scrollLeft;
console.log(" ___" +z);
    }
 var urlImagefleur="images/flour/fleur",
 urlImageville="images/ville/ville",
 urlImageanimaux="images/animaux/animaux",
 urlImagebateau="images/bateau/bateau",
 urlImagenature="images/nature/nature";

 window.addEventListener("load",
 remplirImg(urlImagefleur,"imgsI","imgI",0),
 remplirImg(urlImageville,"imgsI","imgI",1),
 remplirImg(urlImageanimaux,"imgsI","imgI",2),
 remplirImg(urlImagebateau,"imgsI","imgI",3),
 remplirImg(urlImagenature,"imgsI","imgI",4));
 function remplirImg(list, imgsI,imgI,j){
for(var i=1;i<9;i++){

    var aa=document.createElement('img');
    aa.setAttribute("class",imgsI);
    aa.setAttribute("id",imgI + i);
    aa.src= list + i + ".jpg";
    afichimag[j].appendChild(aa);
    
}
 }
 var clickout = document.getElementById("bout");
 window.addEventListener("scroll",out);
 function out(){

 if(window.pageYOffset>1000){
     
     clickout.style.display="block";
 }
else{
    clickout.style.display="none"; 
}
 }
