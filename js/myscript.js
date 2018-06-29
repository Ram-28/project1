$(function(){
  $("h2").hide(1000).delay(500).show(1000).delay(500);

});

$(function(){
  $(".jumbotron p").css({color:"blue"});
});

$(function(){
  $(".jbutton").on("click",function(){
    var cardId = $(this).attr('data-cardid');
    $("#"+cardId).toggle(100);
    });
});

$(function(){
  $("#cardbtn1").on("click",function(){
    $("#card1").fadeOut(300).fadeIn(300);
    });
});

$(function(){
  $("#cardbtn2").on("click",function(){
    $("#card2").fadeOut(300).fadeIn(300);
    });
});

$(function(){
  $("#cardbtn3").on("click",function(){
    $("#card3").fadeOut(300).fadeIn(300);
    });
});

$(document).ready(function(){
  $("#button").click(function(){
    $("#text").slideToggle("fast");
    alert("Element Toggles/Clicked");
    });
});

$(document).ready(function()){
  $(".dropdown-toggle").dropdown();
});
