$(function () {

  var swiperP = new Swiper(".proswiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay:5000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiperR = new Swiper(".revswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay:5000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


    $('header .inner').mouseenter(function () {
        $('header').addClass('on')
        $('.submenu').addClass('on')
        $('.category').addClass('on')
    }
    )
    $('header').mouseleave(function () {

        $('header').removeClass('on')
        $('.submenu').removeClass('on')
        $('.category').removeClass('on')
    }
    )

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    $('.playBtn').click(function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
            swiper.autoplay.start()
        } else {
            $(this).addClass('on')
            swiper.autoplay.stop()

        }
    })
    
    var swiperE = new Swiper(".eventSwiper", {
        autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var PIsrc = $(".main-pro-img img").attr("src")
    var PIalt = $(".main-pro-img img").attr("alt")
  var MI = $("main-pro-img img").attr("alt")
    var SIsrc = $('.shoe')
   
     $(".main-pro-img-wrap a.shoe1").click(function subimg(){
      var SIsrc = $(".main-pro-subimg-wrap a.shoe1 img").attr("src")
      var SIalt = $(".main-pro-subimg-wrap a.shoe1 img").attr("alt")
      console.log(SIsrc);
      console.log(SIalt);
      if ($(".main-pro-subimg-wrap a img").attr("alt") == MI){
      }else{
        $(".main-pro-img img").attr({src:SIsrc,alt:SIalt})
      }
      return false
     })
     $(".main-pro-img-wrap a.shoe2").click(function subimg(){
      var SIsrc = $(".main-pro-subimg-wrap a.shoe2 img").attr("src")
      var SIalt = $(".main-pro-subimg-wrap a.shoe2 img").attr("alt")
      console.log(SIsrc);
      console.log(SIalt);
      if ($(".main-pro-subimg-wrap a img").attr("alt") == MI){
      }else{
        $(".main-pro-img img").attr({src:SIsrc,alt:SIalt})
      }
      return false
     })
     $(".main-pro-img-wrap a.shoe3").click(function subimg(){
      var SIsrc = $(".main-pro-subimg-wrap a.shoe3 img").attr("src")
      var SIalt = $(".main-pro-subimg-wrap a.shoe3 img").attr("alt")
      console.log(SIsrc);
      console.log(SIalt);
      if ($(".main-pro-subimg-wrap a img").attr("alt") == MI){
      }else{
        $(".main-pro-img img").attr({src:SIsrc,alt:SIalt})
      }
      return false
     })
     $(".main-pro-img-wrap a.shoe4").click(function subimg(){
      var SIsrc = $(".main-pro-subimg-wrap a.shoe4 img").attr("src")
      var SIalt = $(".main-pro-subimg-wrap a.shoe4 img").attr("alt")
      console.log(SIsrc);
      console.log(SIalt);
      if ($(".main-pro-subimg-wrap a img").attr("alt") == MI){
      }else{
        $(".main-pro-img img").attr({src:SIsrc,alt:SIalt})
      }
      return false
     })
     $(".main-pro-img-wrap a.shoe5").click(function subimg(){
      var SIsrc = $(".main-pro-subimg-wrap a.shoe5 img").attr("src")
      var SIalt = $(".main-pro-subimg-wrap a.shoe5 img").attr("alt")
      console.log(SIsrc);
      console.log(SIalt);
      if ($(".main-pro-subimg-wrap a img").attr("alt") == MI){
      }else{
        $(".main-pro-img img").attr({src:SIsrc,alt:SIalt})
      }
      return false
     })
      
})