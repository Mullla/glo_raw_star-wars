$( document ).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true, //бесконечная прокрутка
    margin:10,
    navClass: ["slider__nav--left", "slider__nav--right"],
    nav:true, 
    responsive:{ //для адавтива: размер экрана
        0:{
            items:1
        },
        700:{
            items:2
        },
        900:{
            items:3
        },
        1200: {
            items:3
        }
    }
});
});