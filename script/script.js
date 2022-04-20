/*토글버튼 자바스크립트*/
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

/*서브메뉴제이쿼리*/
$(function(){
  $(".navbar_menu> li").mouseover(function(){
      $(this).children(".sub").stop().slideDown();
  });
  $(".navbar_menu> li").mouseout(function(){
      $(this).children(".sub").stop().slideUp();
  });
});

/*슬라이드배너*/
$(function(){
  var swiper = new Swiper('.slide ', {
     speed: 4000,//버튼을 슬라이드가 넘어가는 시간
     autoplay: {
         delay: 3000,//자동으로 넘어가기 전 머무르는 시간
         disableOnInteraction: false,
       },
       loop: true,//슬라이드 무한반복
       navigation: {//화살표 버튼
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
       pagination: {//블릿 버튼
         el: '.swiper-pagination',
         clickable: true,
       },
     });
 });

/*탭*/
$(function(){
	$('.tabcontent > div').hide();
	$('.tabnav a').click(function () {
		$('.tabcontent > div').hide().filter(this.hash).fadeIn();
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
  });

/*사진클릭*/
$('.thumb_img').click(function(){
  var src = $(this).attr('src');
  $('#display').attr('src', src);

  $('.thumb_img').removeClass('on');
  $(this).addClass('on');
})


