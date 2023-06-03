$('#recipeCarousel').carousel({
   interval: 10000
 })
 
 $('.carousel .carousel-item').each(function(){
     var minPerSlide = 3;
     var next = $(this).next();
     if (!next.length) {
     next = $(this).siblings(':first');
     }
     next.children(':first-child').clone().appendTo($(this));
     
     for (var i=0;i<minPerSlide;i++) {
         next=next.next();
         if (!next.length) {
            next = $(this).siblings(':first');
          }
         
         next.children(':first-child').clone().appendTo($(this));
       }
 });

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
 