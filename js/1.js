var imgs=[
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg"
];
+function(){
    var AWIDTH=parseFloat($("#slider").css("width"));
    var $divImgs=$("#imgs"),$divIdxs=$("#indexs");
    +function(){
        for(var i=0,htmlImgs="",htmlIdxs="";i<imgs.length;i++){
            htmlImgs+="<a><img src='"+imgs[i]+"'></a>";
            htmlIdxs+="<a></a>";
        }
        $divImgs.html(htmlImgs);
        $divIdxs.html(htmlIdxs);
        $divImgs.css("width",AWIDTH*(imgs.length+1));
        $divImgs.append($divImgs.children("first").clone());
        $divIdxs.children("first").addClass("hover");
    }();
    var n=0;
    var SPEED=500;
    var WAIT=5000;
    +function(){
    }();
    function autoMove(){
        n++;
        $divImgs.delay(WAIT).animate({
            left:-n*AWIDTH
        },SPEED,function(){
            if(n==imgs.length){
                n=0;
                $divImgs.css("left",0);
            }
            $divIdxs
                .children(":eq("+n+")").addClass("hover")
                .siblings().removeClass("hover");
            autoMove();
        });
    };
    autoMove();
}();







function Show_Hidden1(obj){
    if(obj.style.display=='block'){
        obj.style.display='none';
    }else{
        obj.style.display='block';
    }
}
function Show_Hidden2(obj){
    if(obj.style.display=="none"){
        obj.style.display='block';

    }else{
        obj.style.display='none';
    }
}
window.onload=function(){
    var olink=document.getElementById("fte_01");
    var odiva=document.getElementById("a");
    var odivb=document.getElementById("b");
    olink.onclick=function(){
        Show_Hidden1(odiva);
        Show_Hidden2(odivb);
    }
};


