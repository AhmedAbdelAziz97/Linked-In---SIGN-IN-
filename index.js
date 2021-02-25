$(document).ready(function (){
   $("#login-box").animate({
       top:"0px",
        width:"20px",
       height:"20px",
   },1000);
    
      $("#login-box").animate({
       width : "600px",
   },500);
          $("#login-box").animate({
       height: "400px",
   },500);
    $("#login-box").animate({
       borderRadius:"30px",
   },500);
    $("#login-box").animate({
       borderRadius:"30px",
   },500,function(){
        $(".left").slideDown(2000);
         $(".right").slideDown(2000);
         $(".or").fadeIn(3000);
    });
    
   
    
});