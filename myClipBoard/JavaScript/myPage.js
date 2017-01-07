// JavaScript Document
//为了清除 border margin 和ppadding的影响
function getStyle(obj,attr){//获取样式
    if(obj.currentStyle){//针对IE浏览器
        return obj.currentStyle[attr];
        }
    else{//针对火狐或谷歌
        return getComputedStyle(obj,false)[attr];
        }
    }
    function getByClass(oParent,nClass)
{
    var eLe = oParent.getElementsByTagName('*');
    var aRrent  = [];
    for(var i=0; i<eLe.length; i++)
    {
        if(eLe[i].className == nClass)
        {
            aRrent.push(eLe[i]);
        }
    }
    return aRrent;
}

// header-js
function startMove(obj,json,fn){
    var flag = true;//假设所有的运动都到达目标值
    clearInterval(obj.timer);
     obj.timer = setInterval(function(){


        for(var attr in json){//同时运动的循环

            var icur = 0;
        if(attr == 'opacity'){//判断样式 获取样式值
            icur = Math.round(parseFloat(getStyle(obj,attr))*100);
            }
        else{
            icur = parseInt(getStyle(obj,attr));
        }
        //设置速度值
        var speed = (json[attr]-icur)/8;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        //判断是否所有的属性到达目标值
        if(icur != json[attr]){
            flag = false;
            }
       //执行动画
            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity:'+(icur+speed)+')';
                obj.style.opacity = (icur+speed)/100;
                }
            else{
                obj.style[attr] = icur+speed+'px';
            }
        //所有值都到达目标值
        if(flag == true){
            clearInterval(obj.timer);
            if(fn){fn();}
            }
        }
        },30)

    }


function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }

}

function liMoveIn(obj,len){
            startMove(obj,{width:len,height:40,opacity:30});
}
function liMoveOut(obj,len){
            startMove(obj,{width:len,height:40,opacity:100});
}


// main-picture
// function startMoveLi(obj,att,add)
// {
//     clearInterval(obj.timer)
//     obj.timer = setInterval(function(){
//        var cutt = 0 ;
//        if(att=='opacity')
//        {
//            cutt = Math.round(parseFloat(getStyle(obj,att)));
//        }
//        else
//        {
//            cutt = Math.round(parseInt(getStyle(obj,att)));
//        }
//        var speed = (add-cutt)/4;
//        speed = speed>0?Math.ceil(speed):Math.floor(speed);
//        if(cutt==add)
//        {
//            clearInterval(obj.timer)
//        }
//        else
//        {
//            if(att=='opacity')
//            {
//                obj.style.opacity = (cutt+speed)/100;
//                obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
//            }
//            else
//            {
//                obj.style[att] = cutt+speed+'px';
//            }
//        }

//     },30)
// }





