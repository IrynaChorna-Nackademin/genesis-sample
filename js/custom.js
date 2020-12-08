jQuery( document ).on(
	'click', '#genesis-mobile-nav-primary', function() {
    jQuery('body').css('overflow-y','visible');	
	}
);
jQuery( document ).on(
  'click', '#genesis-mobile-nav-primary.activated', function() {
    jQuery('body').css('overflow-y','hidden');	
  }
);