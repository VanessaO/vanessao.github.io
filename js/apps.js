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
    
    //Fades in navbar on down scroll, fades out at top of page                     
    $(window).scroll(function(){  
        if ($(this).scrollTop() > 500) {
            $('.navigation').addClass('navigation-visible').fadeIn(500);
        } else {
            $('.navigation').fadeOut(500);
        }
    });

    //Slippry Image Carousel Options
    $('#slippry-demo').slippry({
    	auto: false,
    	captionsSrc: 'li',
    	captions: 'custom',
    	captionsEl: '.caption'
    });
    
   //Temporarily remove title attribute on hovered Slippry Images
   $("#slippry-demo li").hover(function(){
 
        // Get the current title
        var title = $(this).attr("title");
 
        // Store it in a temporary attribute
        $(this).attr("tmp_title", title);
 
        // Set the title to nothing so we don't see the tooltips
        $(this).attr("title","");
         
    });
 
  $(".sy-controls").click(function(){// Fired when we leave the element
 
        // Retrieve the title from the temporary attribute
        var title = $("#slippry-demo li").attr("tmp_title");
 
        // Return the title to what it was
        $("#slippry-demo li").attr("title", title);
         
    });

   //Enables smooth scrolling to each section

    //Temporarily remove title attribute on hovered Slippry Images
    $("#slippry-demo li").hover(function(){
  
         // Get the current title
         var title = $(this).attr("title");
  
         // Store it in a temporary attribute
         $(this).attr("tmp_title", title);
  
         // Set the title to nothing so we don't see the tooltips
         $(this).attr("title","");
          
     });
  
   $(".sy-controls").click(function(){// Fired when we leave the element
  
         // Retrieve the title from the temporary attribute
         var title = $("#slippry-demo li").attr("tmp_title");
  
         // Return the title to what it was
         $("#slippry-demo li").attr("title", title);
          
     });

   //Smooth scrolling to each section
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
