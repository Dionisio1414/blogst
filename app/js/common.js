$(function() {
	var $bd = $('body');
	var $mnu = $('.main-menu');
	$('.main-menu-gamburger').click(function() {
        $mnu.toggleClass('menu-state-open');
        $(this).toggleClass('menu-state-open');
		$bd.toggleClass('overfl-fix');
    });
	
    
    $('.pagination ul li, .pagination ul li a').click(function(e) {
        $(this).addClass('active-li').siblings().removeClass('active-li');
        e.stopPropagation();
        e.preventDefault();
    });
    
    $('.top-lists li:first-child').click(function(e) {
		if($(window).width() < 768) {
			$('.top-lists li:not(:first-child)').fadeToggle("fast");
		}
		e.preventDefault();
//        return false;
    })
	
	var $slick_header = $('.slick-header');
	var $dark_hdr = $('.slick-dark-header');
	$(window).scroll(function() {
		
		if($(this).scrollTop() > 100) {
			$slick_header.addClass('fixed-header');
		} else if($(this).scrollTop() <= 100) {
			$slick_header.removeClass('fixed-header');
		}
		
		if($(this).scrollTop() > 100) {
			$dark_hdr.addClass('fixed-header-darknes');
		} else if($(this).scrollTop() <= 100) {
			$dark_hdr.removeClass('fixed-header-darknes');
		}
	
	});
	
	
	// page 4 adaptive menu
	
	$('.top-lists li').click(function(e) {
		$(this).addClass('active-itm').siblings().removeClass('active-itm');
	});
	
});