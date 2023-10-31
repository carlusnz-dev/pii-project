// navbar scrolled
$(window).scroll(function () {
  const nav = $(".navbar");
  this.scrollY > 20 ? nav.addClass("scroll") : nav.removeClass("scroll");
});

// obj-fade when viewport
const objFade = $(".obj-fade");
$(window).scroll(function () { 
   objFade.each(function() {
      const objPos = $(this).offset().top;
      const winHeight = $(window).height();
      const scrollY = $(window).scrollTop();
      if (scrollY > objPos - winHeight + 200) {
         $(this).addClass('fade-in');
      }
   });
});   

// nav-link active when current page
const navLink = $(".nav-link");
const url = window.location.href;
navLink.each(function () {
  if (url === this.href) {
    $(this).addClass("active");
  }
});
