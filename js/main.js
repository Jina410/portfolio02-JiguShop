$(function () {
  $(".main-menu, .menu-bg").on("mouseenter", function () {
    $(".main-menu .sub, .menu-bg").stop().fadeIn(100);
    $(".main-menu").addClass("active");
  })
  $(".main-menu, .menu-bg").on("mouseleave", function () {
    $(".main-menu .sub, .menu-bg").stop().fadeOut(100);
    $(".main-menu").removeClass("active");
  })
})

$(function () {

  var swiper = new Swiper(".mySwiper1", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return number = '0' + number;
      },
      formatFractionTotal: function (number) {
        return number = '0' + number;
      },
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    loop: true,
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 13,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 13,
      },
    },
    loop: true,
  });

  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: "#mySwiper3-nextBtn",
      prevEl: "#mySwiper3-prenBtn",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 400,
      },
      1800: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
    on: {
      init() {
        setActiveSlides(this);
      },
      slideChange() {
        setActiveSlides(this);
      }
    },
  });

  function setActiveSlides(swiper) { //양쪽에 fade를 넣는 함수
    swiper.slides.forEach(slide => {
      slide.classList.remove('active', 'fade');
    });

    const total = swiper.slides.length;
    const active = swiper.activeIndex;
    const perView = swiper.params.slidesPerView;

    let centers = [];

    if (perView >= 4) {// 4개일 때 중앙 2개
      centers = [(active + 1) % total, (active + 2) % total];
    } else if (perView === 3) {// 3개일 때 중앙 1개
      centers = [(active + 1) % total];
    } else if (perView === 2) {// 2개일 때 둘 다 활성
      centers = [active % total, (active + 1) % total];
    }

    swiper.slides.forEach((slide, i) => {
      if (centers.includes(i)) {
        slide.classList.add('active');
      } else {
        slide.classList.add('fade');
      }
    });
  }
})

//! GSAP
//* #recycle 섹션
// $(function () {
//   gsap.registerPlugin(ScrollTrigger);
//   const ani1 = gsap.timeline();

//   ani1.from(".recycle-text > h2", { y: 100, autoAlpha: 0, duration: 0.6 })
//     .from(".recycle-text > p", { y: 200, autoAlpha: 0, duration: 0.7 }, "<")
//     .from(".recycle-step:nth-child(1) .recycle-step__images img:nth-child(1)", { y: -100, autoAlpha: 0 }, "<0.5")
//     .from(".recycle-step:nth-of-type(1) figcaption", { autoAlpha: 0, duration: 0.3 })
//     .from(".recycle-step__arrow:nth-child(2)", { x: -100, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-child(3) .recycle-step__images img:nth-child(1)", { y: -100, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-child(3) .recycle-step__images img:nth-child(2)", { y: -150, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-child(3) .recycle-step__images img:nth-child(3)", { y: -200, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-child(3) .recycle-step__images img:nth-child(4)", { y: -250, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-of-type(3) figcaption", { autoAlpha: 0, duration: 0.3 })
//     .from(".recycle-step__arrow:nth-child(4)", { x: -100, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-child(5) .recycle-step__images img:nth-child(1)", { y: -100, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-child(5) .recycle-step__images img:nth-child(2)", { y: -150, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-child(5) .recycle-step__images img:nth-child(3)", { y: -200, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-of-type(5) figcaption", { autoAlpha: 0, duration: 0.3 })
//     .from(".recycle-step__arrow:nth-child(6)", { x: -100, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-child(7) .recycle-step__images img:nth-child(1)", { y: -100, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-child(7) .recycle-step__images img:nth-child(2)", { y: -150, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-child(7) .recycle-step__images img:nth-child(3)", { y: -200, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-child(7) .recycle-step__images img:nth-child(4)", { y: -250, autoAlpha: 0 }, "<")
//     .from(".recycle-step:nth-of-type(7) figcaption", { autoAlpha: 0, duration: 0.3 })

//   ScrollTrigger.create({
//     animation: ani1,
//     trigger: "#recycle",
//     start: "top 70%",
//     // end: "+=1000",
//     // pin: "#recycle",
//     // scrub: true,
//     // markers: true,
//   })
// })
$(function () {
  gsap.registerPlugin(ScrollTrigger);
  const ani1 = gsap.timeline();

  ani1.from(".recycle-text > h2", { y: 100, autoAlpha: 0, duration: 0.6 })
    .from(".recycle-text > p", { y: 200, autoAlpha: 0, duration: 0.7 }, "<")
    .from(".recycle-steps", { y: 200, autoAlpha: 0 }, "<0.5")
    .from(".recycle-step:nth-child(1) .recycle-step__images img:nth-child(1)", { y: -100, autoAlpha: 0 }, "<0.2")
    .from(".recycle-step:nth-child(3) .recycle-step__images img:nth-child(1)", { y: -100, autoAlpha: 0 }, "<0.2")
    .from(".recycle-step:nth-child(3) .recycle-step__images img:nth-child(2)", { y: -150, autoAlpha: 0 }, "<")
    .from(".recycle-step:nth-child(3) .recycle-step__images img:nth-child(3)", { y: -100, autoAlpha: 0 }, "<")
    .from(".recycle-step:nth-child(3) .recycle-step__images img:nth-child(4)", { y: -150, autoAlpha: 0 }, "<")
    .from(".recycle-step:nth-child(5) .recycle-step__images img:nth-child(1)", { y: -100, autoAlpha: 0 }, "<0.2")
    .from(".recycle-step:nth-child(5) .recycle-step__images img:nth-child(2)", { y: -150, autoAlpha: 0 }, "<")
    .from(".recycle-step:nth-child(5) .recycle-step__images img:nth-child(3)", { y: -200, autoAlpha: 0 }, "<")
    .from(".recycle-step:nth-child(7) .recycle-step__images img:nth-child(1)", { y: -100, autoAlpha: 0 }, "<0.2")
    .from(".recycle-step:nth-child(7) .recycle-step__images img:nth-child(2)", { y: -150, autoAlpha: 0 }, "<")
    .from(".recycle-step:nth-child(7) .recycle-step__images img:nth-child(3)", { y: -200, autoAlpha: 0 }, "<")
    .from(".recycle-step:nth-child(7) .recycle-step__images img:nth-child(4)", { y: -250, autoAlpha: 0 }, "<")

  ScrollTrigger.create({
    animation: ani1,
    trigger: "#recycle",
    start: "top 70%",
    // end: "+=1000",
    // pin: "#recycle",
    // scrub: true,
    // markers: true,
  })
})


//* #product-menu 섹션 
$(function () {
  gsap.registerPlugin(ScrollTrigger);

  const ani2 = gsap.timeline();

  ani2.from('.product-menu li', {
    y: 300,
    stagger: {
      amount: 0.5,
      from: 'end'
    }
  })

  ScrollTrigger.create({
    animation: ani2,
    trigger: '#product-menu',
    start: "top 80%",
    end: "bottom -2000%",
    // scrub:true,
    // pin:true,
    // anticipatePin: 8,
    // markers: true,
    toggleActions: "play reverse play reverse"
  })
})

//* #best-products 섹션 
$(function () {
  gsap.registerPlugin(ScrollTrigger);

  const ani3 = gsap.timeline();

  ani3.from('.best-products-wrap', { y: 300, autoAlpha: 0, duration: 1 })

  ScrollTrigger.create({
    animation: ani3,
    trigger: '#best-products',
    start: "top 80%",
    end: "bottom -2000%",
    // scrub:true,
    // pin:true,
    // anticipatePin: 8,
    // markers: true,
    toggleActions: "play reverse play reverse"
  })

  //* .review-section-wrap 섹션 
  const ani4 = gsap.timeline();
  ani4.from('.review-section-wrap', { y: 300, autoAlpha: 0, duration: 1 })

  ScrollTrigger.create({
    animation: ani4,
    trigger: '#real-review',
    start: "top 80%",
    end: "bottom -2000%",
    // scrub:true,
    // pin:true,
    // anticipatePin: 8,
    // markers: true,
    toggleActions: "play reverse play reverse"
  })
})

//* #brand-story 섹션 
$(function () {
  gsap.registerPlugin(ScrollTrigger);

  const ani5 = gsap.timeline();
  const items = gsap.utils.toArray(".brandstory-item");
  const itemsH1 = gsap.utils.toArray(".brandstory-item h2");

  ani5.from(itemsH1[0], { y: 300, autoAlpha: 0 })
    .from(items[1], { y: 400 })
    .from(itemsH1[1], { y: 300, autoAlpha: 0 }, "<")
    .from(items[2], { y: 500 })
    .from(itemsH1[2], { autoAlpha: 0 }, "<")

  ScrollTrigger.create({
    animation: ani5,
    trigger: "#brand-story",
    start: "top 150px",
    end: "+=1300",
    scrub: true,
    pin: ".brandstory-section-inner",
  })

  ScrollTrigger.create({
    trigger: "#brand-story",
    start: "top -80%",
    // once: true,
    onEnter: () => {
      gsap.to(".btn-more-brand", {
        rotation: 5,
        duration: 0.12,
        yoyo: true,
        repeat: 3,
        ease: "power1.inOut",
      });
    },
  });
})

//* #best-products섹션
$(function () {
  $('.product-actions li').on('click', function (e) {
    e.preventDefault();

    if ($(this).hasClass('btn-hart')) {
      const img = $(this).find('img');
      const isActive = $(this).hasClass('active');


      if (!isActive) {
        img.attr('src', 'img/icon/hart-on.png');
        $(this).addClass('active');
      } else {
        img.attr('src', 'img/icon/hart.png');
        $(this).removeClass('active');
      }
    }

    if ($(this).hasClass('btn-cart')) {
      const img = $(this).find('img');
      const isActive = $(this).hasClass('active');

      if (!isActive) {
        img.attr('src', 'img/icon/cart-on.png');
        $(this).addClass('active');
      } else {
        img.attr('src', 'img/icon/cart.png');
        $(this).removeClass('active');
      }
    }

  })
})

//* #community섹션 
$(function () {
  gsap.registerPlugin(ScrollTrigger);

  const ani6 = gsap.timeline();

  ani6.from('.notie-wrap', { y: 300, autoAlpha: 0, duration: 1 })

  ScrollTrigger.create({
    animation: ani6,
    trigger: '.notie-wrap',
    start: "-80% 90%",
    end: "bottom -2000%",
    // scrub:true,
    // pin:true,
    // anticipatePin: 8,
    // markers: true,
    toggleActions: "play reverse play reverse"
  })

  const ani7 = gsap.timeline();

  ani7.from('#community', { y: 300, autoAlpha: 0, duration: 1 })

  ScrollTrigger.create({
    animation: ani7,
    trigger: '#community',
    start: "top 90%",
    end: "+=2000",
    // scrub:true,
    // pin:true,
    // anticipatePin: 8,
    // markers: true,
    toggleActions: "play reverse play reverse"
  })
})



//! search-detailed & mobile-tap-menu에 이용될 함수
function reset() { //모바일 네비게이션 및 ui 요소 초기화
  $(".transparency").removeClass('active');
  $("#header-wrapper").removeClass('active');
  $(".search-detailed").hide();
  $(".mobile-tap-menu > li").removeClass('on');
  $(".mobile-tap-menu-wrap").removeClass('on');
}

function updateTransparency() {
  const isSearchOpen = $(".search-detailed").is(":visible");
  const isMenuOpen = $(".mobile-tap-menu-wrap").hasClass("on");

  if (isSearchOpen || isMenuOpen) {
    $(".transparency").addClass("active");
    $("#header-wrapper").addClass("active");
  } else {
    $(".transparency").removeClass("active");
    $("#header-wrapper").removeClass("active");
  }
}
//! search-detailed
$(function () {
  $(".search-detailed").hide();

  $(window).on('resize', function () { // search-detailed가 켜져있는데 pc화면일경우 초기화하는 함수
    let deviceStatus = $(window).width() <= 1184 ? "mobile" : "pc";

    if (deviceStatus === "pc" && $('.transparency').hasClass("active")) {
      reset();
    }
  })

  $(".mobile-header-menu .mobile-search").on("click", function (e) { // (모바일화면일때 서치버튼 클릭시)
    e.preventDefault();


    if ($(".mobile-tap-menu-wrap").hasClass("on")) {
      $(".mobile-tap-menu-wrap").removeClass("on");
      $(".mobile-tap-menu > li").removeClass("on").find('.sub').slideUp();
    }

    $(".search-detailed").toggle();
    updateTransparency();
  })

  $(".search-detailed .container > img, .transparency").on("click", function (e) {
    e.preventDefault();
    reset();
  })
})

//! mobile-tap-menu
$(function () {
  $('.mobile-tap-menu .sub').slideUp();

  $(".mobile-tap-menu > li").on('click', function (e) {
    e.preventDefault();

    const $this = $(this);

    if ($this.hasClass("on")) { //이미 열려있으면 닫기
      $this.removeClass('on').find('.sub').stop().slideUp();
      return;
    }
    $('.mobile-tap-menu > li').removeClass('on').find('.sub').stop().slideUp(); //다른메뉴닫기
    $this.addClass('on').find('.sub').stop().slideDown(); //클릭한 메뉴만 열기
  })

  //* 모바일화면일때 메뉴버튼 클릭시
  $(".mobile-header-menu .mobile-menu").on("click", function (e) {
    e.preventDefault();

    if ($(".search-detailed").is(":visible")) {
      $(".search-detailed").hide();
    }

    $(".mobile-tap-menu-wrap").toggleClass('on');
    updateTransparency();
  })

  $(".mobile-tap-nav .top-box > img, .transparency").on("click", function (e) {
    e.preventDefault();
    reset();
  })
})