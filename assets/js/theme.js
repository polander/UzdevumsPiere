function openOverlayMenu() {
    document.getElementById("overlay_menu").style.display = "block";
}
function closeOverlayMenu() {
    document.getElementById("overlay_menu").style.display = "none";
}

var topBtn = document.getElementById("totop_btn");
var footer = document.querySelector('#footer');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
  checkOffset();
}

function goToTop() {
  //document.body.scrollTop = 0;
  //document.documentElement.scrollTop = 0;
  
  //window.scrollTo({top: 0, behavior: 'smooth'});

  var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("goToTop()", 30);
    } else clearTimeout(scrollAnimation);
}

function checkOffset() {
    function getRectTop(el){
      var rect = el.getBoundingClientRect();
      return rect.top;
    }
    
    if((getRectTop(topBtn) + document.body.scrollTop) + topBtn.offsetHeight 
        >= (getRectTop(footer) + document.body.scrollTop) - 10) {
            topBtn.style.position = 'relative';
            topBtn.style.top = 0; 
    }
    if(document.body.scrollTop + window.innerHeight
        < (getRectTop(footer) + document.body.scrollTop)) {
            topBtn.style.position = 'fixed';
            topBtn.style.top = "90%";
    }
  }
  