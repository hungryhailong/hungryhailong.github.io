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

function titleMove(){
    if(!document.getElementsByTagName) return false;
    var title = document.getElementById("a_title");
    var links = title.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        links[i].onmouseover = function(){
               this.style.opacity = 1;
               this.style.filter = 'alpha(opacity:'+(100)+')';
        }
        links[i].onmouseout = function(){
               this.style.opacity = 0.7;
               this.style.filter = 'alpha(opacity:'+(70)+')';
        }
    }
}

function titleClick(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    var title = document.getElementById("a_title");
    var a_list = title.getElementsByTagName("a");
    // var Div = document.getElementById("main-content");
    // var div_list = Div.getElementsByTagName("div");

    var Div = document.getElementById("main-content");
    var childs = Div.childNodes;
    var div_list = [];
    for(var i = 0,len = childs.length; i < len; i++){
        if(childs[i].nodeType === 1){
            div_list.push(childs[i]);
        }
    }

// 获取 元素下的子元素 而不获取子元素下面的元素

    for(var i = 0;i<a_list.length;i++)
    {
        a_list[i].index = i;
        a_list[i].onclick = function(){
            for(var j = 0;j<a_list.length;j++)
            {
                a_list[j].className = "";
                div_list[j].className = "hidden";
                }

            this.className = "on";
            div_list[this.index].className = "";
            }

        }
}
addLoadEvent(titleClick);
addLoadEvent(titleMove);
