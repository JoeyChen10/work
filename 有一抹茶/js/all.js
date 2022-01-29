$(document).ready(function(){
  $('.dropdown').click(function(event){
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 2000,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

$document.ready(function(){
  $('.top a').click(function(event){
    event.preventDefault();
    $("html,body").animate({
      scrollTop:0
    },700);
  });
});
