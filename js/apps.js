$(document).ready(function(){
	$(".titleName").lettering();

	$(".titleName").addClass('animated swing');

	$(".goDown").hover(
		function(){
			$(this).addClass('animated infinite bounce');
		}, function(){
			$(this).removeClass('animated infinite bounce');
		}
	);
                             
    $(window).scroll(function(){  
        if ($(this).scrollTop() > 500) {
            $('.navigation').addClass('navigation-visible').fadeIn(500);
        } else {
            $('.navigation').fadeOut(500);
        }
    });

    $('#slippry-demo').slippry({
    	auto: false
    });
   
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

















});
