// Init swiper slider

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  autoplay: {
    delay: 15000,
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Tabbs Jquery
$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});


// Accordeon 

$(".accordion-item_trigger").click(function () { 
  $(this).next(".accordion-item_content").slideToggle("slow");
});

// Accordeon icon 
$(".accordion-item_trigger").click(function () {
  $(this).toggleClass("active-svg");
});