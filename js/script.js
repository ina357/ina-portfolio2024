//Splitting 효과 활성화
$(function(){
    Splitting()
});

// scrollo.js 스크롤할때마다 애니메이션 작동시키기
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    });
});

//모든 링크의 부드러운 스크롤 추가
$(function(){ 
    $("a").on('click', function(event) {

      // hash값 찾기
        if (this.hash !== "") { 
            event.preventDefault();

        var hash = this.hash;
        
            $('html, body').animate({ 
                scrollTop: $(hash).offset().top 
            }, 800, function(){

                window.location.hash = hash; 
            });
        } 
    });
});

//헤더 스크롤 시
$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 100){
        $('header').addClass('fixed');
    } else{
        $('header').removeClass('fixed');
    }
});


//모바일 메뉴
$(function(){
    //모바일 메뉴 버튼
    $('.mo-menu').on('click', function(){ 
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
        $('body').toggleClass('on');
    })
    //모바일 메뉴 클릭시
    $('.gnb ul li').on('click', function(){ 
        $('.gnb').removeClass('on');
        $('.mo-menu').removeClass('on');
        $('body').removeClass('on');
    })
})

// main-visual svg path 길이 구하기
$(function(){
    $('.main-img-ani').find('#mainVis01').each(function(i, path){
        var length = path.getTotalLength();
        //alert(length);
    }); // 각각의 길이를 구한다.
    // 5210.31
});

//sec04 위치일때 배경색과 글씨색 변경
$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.sec04',
            start:'0% 50%', 
            end:'80% 100%',
            scrub:1,
            //markers:true
        }
    })
    
    .to('.bg-active',{backgroundColor:'#222', color:'#fff', ease:'none', duration:5},0)
});







