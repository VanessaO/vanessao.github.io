$(document).ready(function(){

	//Colorizes title and makes it responsive
	$(".titleName").lettering().addClass('animated swing').fitText(0.8);

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
    	auto: false,
    	captionsSrc: 'li',
    	captions: 'custom',
    	captionsEl: '.caption'
    });
   
   $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	}); 

















});
