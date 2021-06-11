$(document).ready(function () {


  $('.nav-btn').click(function () {
    
    // displaying links on click
    $('.nav-links').slideToggle(1000);
    
  })
  
  $('.nav-link').click(function () {
    
    var mq = window.matchMedia("(max-width: 992px)");
    if (mq.matches) {
      // hiding links on click
      $('.nav-links').slideToggle(1000);
    }
    
    })
  



  // transparent background
  $(window).scroll(function () {

    let position = $(window).scrollTop();
    if (position >= 100) {
      $('nav, nav-header').addClass('navBackground')
    }
    else {
      $('nav, nav-header').removeClass('navBackground')
    }

  })



  // smooth scroll
  $('.nav-link,.about-btn').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 79
    }, 1000);

  })


})




