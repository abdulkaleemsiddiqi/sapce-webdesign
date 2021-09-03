(function () {
  let socials = document.querySelectorAll('.social div')
      
  socials.forEach(function(social, index) {
    social.style.animation = `moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7 + 0.2}s`
  })




}())


//read more
$(document).ready(function(){
  $(".read").click(function(){
     $(this).prev().toggle();
     $(this).siblings('.dots').toggle();
     if($(this).text()=='read more'){
 $(this).text('read less');
     }
     else{
 $(this).text('read more');
     }
  });
});