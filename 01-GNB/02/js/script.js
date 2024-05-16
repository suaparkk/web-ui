//DOM 구조가 파악이 되면 실행
$(function () {
  // alert('준비완료');

  //대상을 변수에 저장
  const $header = $('header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  //메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);

    //활성화된 메뉴 표시 : on 클래스 부여
    $(this).addClass('on');

    // header에 active 클래스 부여
    $header.addClass('active');
  });
  //메뉴 영역에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.slideUp(duration);
    $menu.removeClass('on');
    $header.removeClass('active');
  });
});
