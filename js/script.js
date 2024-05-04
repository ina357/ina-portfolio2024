//Splitting 효과 활성화
$(function(){
    Splitting()
});

//모든 링크의 부드러운 스크롤 추가
$(document).ready(function(){ 
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

//헤더 스크롤시
$(function(){
    var prevScrollTop = 0;
    document.addEventListener("scroll",function(){
        var nowScrollTop = $(window).scrollTop();
        if(nowScrollTop > prevScrollTop){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })
})

//스크롤 다운된 상태에서 새로고침 했을 때 헤더 bg 나타나게
$(window).ready(function(){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 100){
        $('.header').addClass('fixed');
    } else{
        $('.header').removeClass('fixed');
    }
});

 //모바일 메뉴
$(function(){
    //모바일 메뉴 버튼
    $('.mo-menu').on('click', function(){ 
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
        $('body').addClass('on');
    })
    //모바일 메뉴 클릭시
    $('.gnb ul li').on('click', function(){ 
        $('.gnb').removeClass('on');
        $('.mo-menu').removeClass('on');
        $('body').removeClass('on');
    })
})

// scrollo.js 스크롤할때마다 애니메이션 작동시키기
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    });
});

// main-visual svg path 길이 구하기
$(function(){
    $('.main-img-ani').find('#mainVis01').each(function(i, path){
        var length = path.getTotalLength();
        //alert(length);
    }); // 각각의 길이를 구한다.
    // 6381.20 / 7182.08 / 2303.70 / 4213.48 / 3630.85 / 3026.57
});

//sec3 위치일때 배경색과 글씨색 변경
/* $(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.bg-active',
            start:'0% 100%',
            end:'10% 100%',
            scrub:1
            //markers:true

        }
    })

    .to('.bg-active',{backgroundColor:'#fff', ease:'none',duration:2},0)

}); */

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







