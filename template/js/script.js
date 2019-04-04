
function slideShow(){
    var interval=0;
    var n = document.getElementById("sliderContent").childElementCount;
    document.getElementById("sliderContent").style.width = (100*n)+"%";
    var childs=document.getElementById("sliderContent").children;
    for (i=0;i<childs.length;i++){
        childs[i].style.width=(100/n)+"%";
    }

    
}
slideShow();