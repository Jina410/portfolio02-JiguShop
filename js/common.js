$(function(){
  $(window).scroll(function(){
    let st = $(window).scrollTop();
    let winH = $(window).height();

    if( st > winH - 300){
      $(".top").addClass("on");
    } else{
      $(".top").removeClass("on");
    }

    let footerTop = $('footer').offset().top;
    let btnH = $(".top").outerHeight();
    let btnBottom = st + winH - btnH - 20;

    if(btnBottom >= footerTop){
      $('.top > a > img').attr("src", "img/icon/topBtn2.png")
    } else {
      $('.top > a > img').attr("src", "img/icon/topBtn1.png")
    }
  })
})