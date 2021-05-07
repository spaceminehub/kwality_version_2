const element = document.querySelector(".element");

element.innerHTML = element.innerText
  .split("")
  .map((letter) => `<span>${letter}</span>`)
  .join("");

const letters = document.querySelectorAll("span");

letters.forEach((letter) => letter.classList.add("effect"));

$('#owl_product').owlCarousel({
  loop:true,
  margin:10,
  lazyLoad:true,
  autoplay:true,
  autoplayTimeout:2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:5
      }
  }
})
$(".owl-carousel1").owlCarousel({
  loop: true,
  center: true,
  margin: 0,
  responsiveClass: true,
  lazyLoad:true,
  autoplay:true,
  nav: false,
  autoplayTimeout:7000,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    680: {
      items: 2,
      loop: false
    },
    1000: {
      items: 3,
    }
  }
})