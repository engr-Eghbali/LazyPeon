

//////////////////////////////
function openSideMenu(){

    var pos=-100;
    var id=setInterval(function(){
        
        if (pos<=0){
         document.getElementById("sideMenu").style.right=pos+"%";
         pos+=2;
        }else{
         clearInterval(id);
        }
    },10)
}
///////////////////////////////////
function closeSideMenu(){

    var pos=0;
    var id=setInterval(function(){
        
        if (pos>-100){
         document.getElementById("sideMenu").style.right=pos+"%";
         pos-=2;
        }else{
         clearInterval(id);
        }
    },10)

}
//////////////////////////////////////
function collapse(id){
    document.getElementById(id).classList.toggle("active");
    document.getElementById(id).previousElementSibling.classList.toggle("rotate180");
    document.getElementById(id).previousElementSibling.classList.toggle("borderNone");
   
}
////////////////////////////////////////
 
function MoveSlides(direction){
    
    position=document.getElementById("sliderContent").style.left;
    childsLength=document.getElementById("sliderContent").childElementCount;
    
    if(direction=='l'){
        if (parseFloat(position) < (childsLength-2)*-100){
            document.getElementById("sliderContent").style.left="0%";
            
        }else{
            document.getElementById("sliderContent").style.left=parseFloat(position)-100+"%"
        }
    }

    if(direction=='r'){
        if (parseFloat(position) == 0){
            document.getElementById("sliderContent").style.left=(childsLength-1)*-100+"%";
            
        }else{
            document.getElementById("sliderContent").style.left=parseFloat(position)+100+"%"
        }
    }

    
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
function MoveCards(direction){
    

    if(direction=='l'){
        document.getElementById("cardContent").scrollBy(200,0);
        document.getElementById("leftCardController").style.display="block";
    }

    if(direction=='r'){
        document.getElementById("cardContent").scrollBy(-200,0);

    }

    
}






setInterval(MoveSlides,5000,'l');

document.addEventListener('DOMContentLoaded', function(){

    document.getElementById("sliderContent").style.width=(document.getElementById("sliderContent").childElementCount+1)*100+"%";
    document.getElementById("cardSlider").style.width=(document.getElementById("cardSlider").childElementCount)*29+"vh";
});
