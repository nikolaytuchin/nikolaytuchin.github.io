$( document ).ready(function() {
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 2000,
      },
      mousewheel: {
        invert: true,
      },
      keyboard: {
      enabled: true,
      onlyInViewport: false,
     },
 });

    $( "#clickID" ).click(function(){
        alert('Не делай этого больше! Ок?');
    });
    
}); 

