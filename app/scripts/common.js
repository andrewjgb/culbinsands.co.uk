//
 $(document).ready(function() {

// Weather feed
	$(function () {
	$('#weather').weatherfeed(['USHI0290'],{
		unit: 'c',
		image: true,
		country: false,
		highlow: false,
		wind: false,
		humidity: false,
		visibility: false,
		sunrise: false,
		sunset: false,
		forecast: false,
		link: false
	});
	});
// Mosaic
	jQuery(function($){			
		$('.circle').mosaic({
			opacity		:	0.8			//Opacity for overlay (0-1)
		});  
    });
// Scroll Top Button
	$('.topbutton').click(function(){
	  $("html, body").animate({ scrollTop: 0 }, 600);
	  return false;
	});
// Datepicker
	$('#datepicker-start').Zebra_DatePicker({
	  direction: true,
	  format: 'M d, Y',
	  pair: $('#datepicker-end')
	});

	$('#datepicker-end').Zebra_DatePicker({
	  direction: 1,
	  format: 'M d, Y'
	});
// Form Validation
	$(function(){
	  $("#bookingForm").validate();
	});
// Fit Text
	$(".fittext").fitText(1.1, { minFontSize: 32, maxFontSize: '37px' });
// Navigation Menu
	$('nav li').hover(function() {
		$(this).children('ul').fadeIn(200);
	}, function() {
		$(this).children('ul').fadeOut(200);
	});
	
// Responsive Navigation
	$("<select />").appendTo("nav");
	
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Menu"
	}).appendTo("nav select");
	
	// Populate dropdown with menu items
	$("nav li").each(function() {
		
		var depth   = $(this).parents('ul').length - 1;
		
		var indent = '';
		if( depth > 0 ) { indent = ' - '; }
		if( depth > 1 ) { indent = ' - - '; }
		if( depth > 2 ) { indent = ' - - -'; }
		if( depth > 3 ) { indent = ' - - - -'; }

		
		 var el = $(this).children('a');
		 $("<option />", {
			 "value"   : el.attr("href"),
			 "text"    : (indent+el.text())
		 }).appendTo("nav select");
	});
	
	$("nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});
	
// prettyPhoto
	$('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
	});
	$(function(){
     $("a[rel^='prettyPhoto']").prettyPhoto({
	 	show_title: false, 
		theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		overlay_gallery: false,
		social_tools: '',
		});
   });

// Flexslider
    $(window).load(function(){
      $('#homeslider').flexslider({
        animation: "fade",
		slideshowSpeed: 7000,
		animationDuration: 600,
		directionNav: true,
		controlNav: true,
		start: function(slider){
		$('div').removeClass('loadingDark');
		}
      });
	  $('#slider').flexslider({
        animation: "fade",
		slideshowSpeed: 7000,
		animationDuration: 600,
		directionNav: true,
		controlNav: true,
		start: function(slider){
		$('div').removeClass('loading');
		}
      });
	  // The slider being synced must be initialized first
	  $('#carousel').flexslider({
	    animation: "slide",
    	controlNav: false,
		directionNav: true,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 180,
	    itemMargin: 5,
	    asNavFor: '#cslider'
	  });
      $('#cslider').flexslider({
        animation: "fade",
		slideshowSpeed: 7000,
		animationDuration: 600,
		directionNav: true,
		controlNav: true,
		animationLoop: false,
	    slideshow: false,
    	sync: "#carousel",
		start: function(slider){
		$('div').removeClass('loading');
		} 
      });
    });
	
//
    });