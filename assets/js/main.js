  var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
       $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-primary" );
});

$("#btn-nav").click(function(){
       $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-primary" );
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})