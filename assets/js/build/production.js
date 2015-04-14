(function (window, $, undefined) {

	$( document ).ready( function () {

		//Declare all variables
		var bodyElement = document.body,
			$blog = $( document.getElementById( 'blog-posts' ) ),
			$intro = $( '.hero-content' ),
			toggleMobileMenu = document.getElementById( 'js-mobile-menu' ),
			contentWrap = document.querySelector( '.content-wrap' ),
			$outerWrap = $( '.outer-wrapper' ),
			isOpen = false;


		/**
		 * Check if Element is in viewport
		 */
		function checkElementInViewport(elem) {
			var $el = $( elem ),
			// Get the scroll position.
				scrollElem = ((navigator.userAgent.toLowerCase().indexOf( 'webkit' ) != -1) ? 'body' : 'html'),
				$viewportTop = $( scrollElem ).scrollTop(),
				viewportBottom = $viewportTop + $( window ).height(),
			// Get the position of the element on the page.
				elemTopPosition = Math.round( $el.offset().top ),
				elemBottomPosition = elemTopPosition + $el.height();

			return ( (elemBottomPosition > $viewportTop) && (elemTopPosition < viewportBottom));
		}

		/**
		 * Initial load animation
		 */
		function checkBlogAnimation() {
			if ($blog.hasClass( 'animated' )) return;
			if (checkElementInViewport( '#blog-posts' )) {
				$blog.addClass( 'animated fadeIn' );
			}
		}

		function checkIntroAnimation() {
			$intro.addClass( 'animated fadeIn' );
		}


		/**
		 * Mobile Menu
		 */
		function toggleCanvasMenu() {
			if (isOpen) {
				classie.remove( bodyElement, 'ss-mobile-menu-active' );
			}
			else {
				classie.add( bodyElement, 'ss-mobile-menu-active' );
			}
			isOpen = !isOpen;
		}

		function initCanvasMenu() {
			toggleMobileMenu.addEventListener( 'click', toggleCanvasMenu );
			contentWrap.addEventListener( 'click', function (e) {
				var target = e.target;
				if (isOpen && target !== toggleMobileMenu) {
					toggleCanvasMenu();
				}
			} );
		}


		// Capture scroll events
		$( window ).scroll( function () {
			checkBlogAnimation();
		} );


		/**
		 * Swipe event handler
		 */
		$outerWrap.on( 'swipeleft', function (e) {
			toggleCanvasMenu();
		} );
		$outerWrap.on( 'swiperight', function (e) {
			toggleCanvasMenu();
		} );


		function init() {
			initCanvasMenu();
			checkIntroAnimation();
		}

		init();
	} );


})( window, jQuery, undefined );