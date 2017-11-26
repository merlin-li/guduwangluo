var page = {
    init : function(){
        this.bindEvent();
    },
    bindEvent : function(){
    	var _this = this;     	
		var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        slidesPerView: 1,
	        nextButton: '.swiper-button-next',
	    	prevButton: '.swiper-button-prev',
	        spaceBetween: 0,
	        autoplay: 4000,
	        autoplayDisableOnInteraction: false,
	        loop: true,
	        speed:800,
	        onInit: function(swiper){ 
			    swiperAnimateCache(swiper); 
			    swiperAnimate(swiper); 
			}, 
			onSlideChangeEnd: function(swiper){ 
			    swiperAnimate(swiper);
			} 
	    });
	    $('.downIcon').on('click',function(){
	    	$(document).scrollTop('300');
	    })
	    $('.float-right-box').hover(function(){
	    	$(this).removeClass('on');
	    },function(){
	    	$(this).addClass('on');
	    })
	    $(".return-webtop ").click(function () {
	        var speed=200;
	        $('body,html').animate({ scrollTop: 0 }, speed);
	        return false;
	    });
		$(window).scroll(function(){
			var scrollTop =$(document).scrollTop();
			var topH = $('.all').offset().top ; 
			if(topH - scrollTop < 250){
				$('.all').addClass('active');
			}else{
				$('.all').removeClass('active');
			}
		});
    }
};
$(function(){
    page.init();    
});
