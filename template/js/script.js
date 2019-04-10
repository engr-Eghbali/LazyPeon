
function slideShow(){
    var interval=0;
    var n = document.getElementById("sliderContent").childElementCount;
    document.getElementById("sliderContent").style.width = (100*n)+"%";
    var childs=document.getElementById("sliderContent").children;
    for (i=0;i<childs.length;i++){
        childs[i].style.width=(100/n)+"%";
    }
   
}
//////////////////////////////

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
slideShow();

