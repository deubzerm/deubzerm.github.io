//Custom javascript file for custom and selfwritten functions

(function() {

  var headerHeight = $("div#navbar").height();
  //console.log(headerHeight);

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - headerHeight
      }, 1000);
      return false;
    }
    }
  });

/**
  $(".custom-short").click(function(){
      alert($(this).attr("class"));
      console.log("click");
  });

 **/


  //ste paddingfromtop according to headerheight (fallback for mobile devices)
  document.getElementById("start").style.paddingTop=headerHeight+"px";
  //console.log("set anchor");

  //exchange backgroundpic
  function changeBack () {
    var pictures = ["url('/img/top.jpg')", "url('/img/about.jpg')","url('/img/imp.jpg)'"];
    document.getElementById("landingpic").style.backgroundImage=pictures[getRandomInt(0,pictures.length)];
    //
    //console.log("background");
    //console.log(top.location.pathname);
    setTimeout(changeBack, 5000);
  }

  if (top.location.pathname === '/' && $(document).width() >= 415 ) {
    //console.log("index and greater");
    changeBack();
  } else {
    //console.log("not");
  };

  if ($(document).width() >= 600) {
    console.log("large screen");
    $('#navbar').removeClass("sticky");
    $('#navbar').addClass("fixed");

  } else {
    $('#navbar').removeClass("fixed");
    $('#navbar').addClass("sticky");
  };

  function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

  }

})();

$(document).ready(function() {
var theFrame = $(”.ytframe”, parent.document.body);
theFrame.height($(document.body).height() + 30);
console.log("test");
});
