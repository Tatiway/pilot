

jQuery.noConflict();

/* scroll -1 */

jQuery(document).ready(function($) {


	$('.scroll-pane').each(
		function(){


			$(this).jScrollPane({

					showArrows: $(this).is('.arrow')

				});
			var api = $(this).data('jsp');
			var throttleTimeout;
			$(window).bind('resize', function(){
					// IE fires multiple resize events while you are dragging the browser window which
					// causes it to crash if you try to update the scrollpane on every one. So we need
					// to throttle it to fire a maximum of once every 50 milliseconds...
					if (!throttleTimeout) {
						throttleTimeout = setTimeout(function(){

								api.reinitialise();
								throttleTimeout = null;

							},50);
					}

				});
		});

  
});

/* scroll -2 */

jQuery(document).ready(function($) {


	$('.scroll-pane-two').each(
		function(){


			$(this).jScrollPane({

					showArrows: $(this).is('.arrow')

				});
			var api = $(this).data('jsp');
			var throttleTimeout;
			$(window).bind('resize', function(){
					// IE fires multiple resize events while you are dragging the browser window which
					// causes it to crash if you try to update the scrollpane on every one. So we need
					// to throttle it to fire a maximum of once every 50 milliseconds...
					if (!throttleTimeout) {
						throttleTimeout = setTimeout(function(){

								api.reinitialise();
								throttleTimeout = null;

							},50);
					}

				});
		});

  
});



/* slider */

jQuery(document).ready(function($){

    $("#slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      addClassActive: true,
      navigationText: ["",""]
   
 
  });



});

/* sade navigation */

jQuery(document).ready(function($){


	$(".nav-button").click(function(){

		$(".slide-nav").animate({ left: "0px"}, 500);

	});


	$(".sn-toggle").click(function(e){

		e.preventDefault();

		$(".slide-nav").animate({left: "-475px"}, 500);

	});


});

/* pop-up */

jQuery(document).ready(function($){


	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

});

/* dropdown navigation */

jQuery(document).ready(function($){

		$(".ourTown-wrap").click(function() {

		$(this).toggleClass("on");

		$(".dropdown-mnu").slideToggle();
		
		return false;

	})


});

/* scroll up */

jQuery( document ).ready(function($){

	$(window).scroll(function() {
 
		if($(this).scrollTop() != 0){
		 
		$('.scrollup').fadeIn();
		 
		}else{
		 
		$('.scrollup').fadeOut();
		 
		}
		 
		});
		 
		$('.scrollup').click(function(){
		 
		$('body,html').animate({scrollTop:0},800);
		 
		});
		
});























