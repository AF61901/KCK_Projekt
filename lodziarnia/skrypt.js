$(document).ready(function(){
  $(window).scroll(function(){
   var scroll = $(window).scrollTop();
     if(scroll>200){
      $(".navbar").css("background-color", "white");
       }
       else {
      $(".navbar").css("background-color", "rgba(255, 255, 255, 0.5)");
       }
      })
   })


   