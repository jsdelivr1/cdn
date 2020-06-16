/**
 * File navigation.js.
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	var container, button, menu, links, subMenus, i, len;
	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}
	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}
	menu = container.getElementsByTagName( 'ul' )[0];
	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}
	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}
	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};
	// Get all the link elements within the menu.
	links    = menu.getElementsByTagName( 'a' );
	subMenus = menu.getElementsByTagName( 'ul' );
	// Set menu items with submenus to aria-haspopup="true".
	for ( i = 0, len = subMenus.length; i < len; i++ ) {
		subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
	}
	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}
/**

	 * Sets or removes .focus class on an element.
*/

	function toggleFocus() {
		var self = this;
		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {
			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
			if ( -1 !== self.className.indexOf( 'focus' ) ) {
				self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}

			}
			self = self.parentElement;
		}

	}
	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	( function( container ) {
		var touchStartFn, i,
			parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );
		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				var menuItem = this.parentNode, i;
				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};
			for ( i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false );

			}
		}
	}( container ) );
} )();

jQuery(document).ready(function($){'use strict';

	/* --------------------------------------
	*				Bookmark 
	*  -------------------------------------- */
	// Add Meta Value Form Submit
	$(".bookmark").on('click',function(e){ 'use strict';
		$(this).submit(function(e){
			var postdata = $(this).serializeArray();
			var formURL = $(this).attr("action");
			$(this).addClass( "active" );

			$.ajax(
			{
				url : formURL,
				type: "POST",
				data : postdata,
				success:function(data, textStatus, jqXHR) {
				},
				error: function(jqXHR, textStatus, errorThrown){
				}
			});
			e.preventDefault();	//STOP default action
		});
		$(this).submit(); //SUBMIT FORM
	});
	

	/* -------------------------------------- */
	// 			Bookmark Delete Form
	/* -------------------------------------- */
	$(".bookmark-delete").on('click',function(e){ 'use strict';
		$(this).submit(function(e){
			var postdata = $(this).serializeArray();
			var formURL = $(this).attr("action");
			$(this).addClass( "active" );

			$.ajax(
			{
				url : formURL,
				type: "POST",
				data : postdata,
				success:function(data, textStatus, jqXHR) {
					location.reload();
				},
				error: function(jqXHR, textStatus, errorThrown){
				}
			});
			e.preventDefault();	//STOP default action
		});
		$(this).submit(); //SUBMIT FORM
	});
});
(function($) {
    $(document).ready(function (){
            $('body').on('click', '.shaixuan .sub-menu .menu-item-object-category a', function(e){
                e.preventDefault();
	            $(this).closest('body').find('.shaixuan .sub-menu .menu-item-object-category a').removeClass('selected');
				$(this).addClass('selected');
				$(this).closest('body').find('input#cat').attr("value",$(this).attr('data'));
            }); 
    });
    
})(jQuery);
(function($) {
    $(document).ready(function (){
            $('body').on('click', '.shaixuan .sub-menu .menu-item-object-post_tag a', function(e){
                e.preventDefault();
	            $(this).closest('body').find('.shaixuan .sub-menu .menu-item-object-post_tag a').removeClass('selected');
				$(this).addClass('selected');
				$(this).closest('body').find('input#tag').attr("value",$(this).attr('data'));
            }); 
    });
    
})(jQuery);
(function($) {
    $(document).ready(function (){
            $('body').on('click', '.shaixuan .sub-menu .menu-item-object-custom a', function(e){
                e.preventDefault();
	            $(this).closest('body').find('.shaixuan .sub-menu .menu-item-object-custom a').removeClass('selected');
				$(this).addClass('selected');
				$(this).closest('body').find('input#s').attr("value",$(this).attr('title'));
            }); 
    });
    $(document).ready(function() {
		$("#owl-demo").owlCarousel({
		navigation : false, // Show next and prev buttons
		autoPlay:4000,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		pagination:false
		});
	});
})(jQuery);
(function($){ 
$("#madeimg").click(function(){
    var copyDom = $("#imgcanvas");
    var width = copyDom.offsetWidth;//dom宽
    var height = copyDom.offsetHeight;//dom高
    var scale = 2;//放大倍数
    html2canvas(copyDom[0], {
        dpi: window.devicePixelRatio*2,
        scale:scale,
        width:width,
        heigth:height,
		useCORS:true,
		taintTest: false,
    }).then(function (canvas) {
        var url = canvas.toDataURL();
		var timestamp = Date.parse(new Date());
        var triggerDownload = $("<a>").attr("href", url).attr('download',timestamp + '.png').appendTo("#downimg");
        triggerDownload[0].click();
        triggerDownload.remove();
    });
});
})(jQuery);