$(document).ready(function(){

   // slick slider
  $('.c_slider').slick({
      dots: true,
      arrows: false,
     infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  // counter 
   $('.counter').counterUp({
      delay: 10,
      time: 1000
   });

});

  // document.addEventListener('DOMContentLoaded', function() {
  //   var count = document.getElementById('counter');
  //   var countUp = new CountUp(count, 0, parseInt(count.getAttribute('data-count')), 0, 2.5);
  //   if (!countUp.error) {
  //     countUp.start();
  //   } else {
  //     console.error(countUp.error);
  //   }
  // });


