$(function(){
    $(".responsive-menu").click(function(){
       $(".menu").toggleClass('js-active',1000);
    });

 });

 $(window).on("scroll",function() {
   if($("html").scrollTop()>42) {
      $('.header-nav').addClass('nav-scroll');
   }
   else{
      $('.header-nav').removeClass('nav-scroll');
   }
   });

  