$(window).bind("load", function() {
    　var footerHeight =0;
    　var footerTop =0;
   　 var $footer =$("#footer");
   　 positionFooter();
    
   　 function positionFooter() {
   　　 footerHeight =$footer.height();
   　　 footerTop = ($(window).scrollTop() +$(window).height() - footerHeight) +"px";
   　　 if (($(document.body).height() + footerHeight) <$(window).height()) {
   　　　 $footer.css({
   　　　 　position:"absolute"
   　　　 }).stop().animate({
   　　　　 top: footerTop
   　　　 });
   　　 } else {
   　　　 $footer.css({
   　　　 position:"static"
   　　　 });
   　　 }
   　 }
    
    　$(window).scroll(positionFooter).resize(positionFooter);
   });
    
   
   