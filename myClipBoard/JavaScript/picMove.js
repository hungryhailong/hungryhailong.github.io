function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name]
    }
    else
    {
        return getComputedStyle(obj,false)[name]
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

function startMoveLi(obj,att,add)
{
    clearInterval(obj.timer)
    obj.timer = setInterval(function(){
       var cutt = 0 ;
       if(att=='opacity')
       {
           cutt = Math.round(parseFloat(getStyle(obj,att)));
       }
       else
       {
           cutt = Math.round(parseInt(getStyle(obj,att)));
       }
       var speed = (add-cutt)/4;
       speed = speed>0?Math.ceil(speed):Math.floor(speed);
       if(cutt==add)
       {
           clearInterval(obj.timer)
       }
       else
       {
           if(att=='opacity')
           {
               obj.style.opacity = (cutt+speed)/100;
               obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
           }
           else
           {
               obj.style[att] = cutt+speed+'px';
           }
       }

    },30)
}

  window.onload = function()
  {
      pic_btnMove();
      var oDiv = document.getElementById('play-box');
      var oPre = getByClass(oDiv,'pre')[0];//获取前一张按钮
      var oNext = getByClass(oDiv,'next')[0];//获取下一张按钮
      var oUlBig = getByClass(oDiv,'play')[0];// 获取图片框class=play;
      var aBigLi = oUlBig.getElementsByTagName('li');//获取每一张图片
      var oDivSmall = getByClass(oDiv,'smallTitle')[0]//获取smallTitle
      var aLiSmall = oDivSmall.getElementsByTagName('li');//smallTitle下的li
     // alert("here");
      function tab()
      {
         for(var i=0; i<aLiSmall.length; i++)
         {
            aLiSmall[i].className = '';
         }//清除唯一的一个thisTitle
         aLiSmall[now].className = 'thisTitle'// 设置thisTitle
         startMoveLi(oUlBig,'left',-(now*aBigLi[0].offsetWidth))
      }
      var now = 0;
      for(var i=0; i<aLiSmall.length; i++)//smallTitle按钮的点击事件
      {
          aLiSmall[i].index = i;
          aLiSmall[i].onclick = function()
          {
              now = this.index;
              tab();
          }
     }
     //alert("here1");
      oPre.onclick = function()//前一张
      {
          now--
          if(now ==-1)
          {
              now = aBigLi.length;
          }
           tab();
      }
       oNext.onclick = function()//后一张
      {
           now++
          if(now ==aBigLi.length)
          {
              now = 0;
          }
          tab();
      }
     // alert("here2");
      var timer = setInterval(oNext.onclick,3000) //自动滚动间隔时间设置
      oDiv.onmouseover = function()
      {
          clearInterval(timer)
      }
       oDiv.onmouseout = function()
      {
          timer = setInterval(oNext.onclick,3000) //自动滚动间隔时间设置
      }
      //alert("here3");
  }
  function pic_btnMove(){
        var myDiv = document.getElementById("play-box");
        var btn = getByClass(myDiv,'pre');
        alert("hello");
        btn.onmouseover = function(){
              this.style.opacity = 1;
              this.style.filter = 'alpha(opacity:'+(100)+')';
            }
            btn.onmouseout = function(){
             this.style.opacity = 0.2;
              this.style.filter = 'alpha(opacity:'+(20)+')';
            }

        // for(var i=0;i<btn.length;i++)
        // {
        //       btn[i].onmouseover = function(){
        //       this.style.opacity = 1;
        //       this.style.filter = 'alpha(opacity:'+(100)+')';
        //     }
        //     btn[i].onmouseout = function(){
        //      this.style.opacity = 0.2;
        //       this.style.filter = 'alpha(opacity:'+(20)+')';
        //     }
        //  }



  }
