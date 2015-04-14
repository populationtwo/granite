(function (window, $, undefined) {

	$( document ).ready( function () {


		$( '' ).addClass( 'animated fadeIn' );
		//Declare all variables
		var bodyElement = document.body,
			$heroHeader = $( document.getElementById( 'hero-header' ) ),
			$mainMenuLink = $( document.getElementById( 'site-navigation' ) ).find( ' a[href^="#"]' ),
			$mainMenuAllLinks = $( document.getElementById( 'site-navigation' ) ).find( 'a' ),
			$portfolioCloseOverlay = $( '.close-overlay' ),
			$portfolioPhoto = $( '.photo' ),
			$blog = $( '#blog-posts' ),
			toggleMobileMenu = document.getElementById( 'js-mobile-menu' ),
			contentWrap = document.querySelector( '.content-wrap' ),
			numberAnimationIsExecuted = false,
			$intro = $( '.hero-content' ),

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
		 * Animate skills graph
		 */
		function checkGraphAnimation() {
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
			checkGraphAnimation();
		} );

		$( '.outer-wrapper' ).on( 'swipeleft', function (e) {
			alert( 'asdfsdf' );
		} );


		function init() {
			initCanvasMenu();
			checkIntroAnimation();

		}

		init();
	} );


})( window, jQuery, undefined );