$(document).ready(function () {

  //nav side btn
  $(".nav-side-btn").click(function () {
    $(".nav-side-links").toggleClass('height');
    $('.nav-side-btn').toggleClass('turn');
  })


  //nav top btn
  $(".nav-top-btn").click(function () {
    $(".nav-side").toggleClass("translate");
    $('.nav-top-btn').toggleClass('turn');
    $('.main').toggleClass('width');
  })


  // owl carousel for top songs
  $('.top-songs-center').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    slideBy: 1,
    // dots:false,
    smartSpeed: 1500,
    autoHeight: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    },
    navText: ["Prev", "Next"]
  })


})