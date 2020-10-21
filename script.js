  $(".step2").hide();
  $(".step3").hide();
    $(".step4").hide();

  $(".co").click(function() {
      $(".step1").hide();
       $(".step4").hide();
      $(".step2").show();
      $(".step2").css("margin-top", "30px");
      $(".step2").css("width", "300px");
      
  });
  $(".step2").mouseleave(function() {
     $(".step2").hide();
      $(".step1").hide();
       $(".step4").hide();
     $(".step3").show();
      $(".step3").css("margin-top", "30px");
     
 });
 $(".step3").mouseenter(function() {
     $(".step2").hide();
      $(".step1").hide();
       $(".step4").show();
     $(".step3").hide();
      $(".step4").css("margin-top", "30px");
     
 });
  $(".step4").mouseleave(function() {
       $(".step4").slideUp();
     $(".step2").hide();
      $(".step1").hide();
      $(".step3").hide();
     
       
   
    
     
 });