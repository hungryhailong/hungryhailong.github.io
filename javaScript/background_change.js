
    function showPic(whichPic){
        if(!document.getElementById("placeHolder")) return false;
        var source = whichPic.getAttribute("name");
        var placeHolder = document.getElementById("placeHolder");
        if(placeHolder.nodeName != "IMG") return false;
        placeHolder.setAttribute("src",source);
        return true;
    }

function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for ( var i=0; i < links.length; i++) {
    links[i].onmouseover = function() {
      return showPic(this) ? false : true;
    }
    links[i].onkeypress = links[i].onclick;
  }
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

addLoadEvent(prepareGallery);
