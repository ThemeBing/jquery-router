(function($) {
    "use strict";

    function loadContent(hash){
    	if (hash === '') {
    		hash = 'home';
    	}
    	$('body,html').animate( { scrollTop:0 } , '600' , 'swing' );
    	$('section').load('pages/'+ hash +'.html');
    }

    $(window).on('hashchange', function() {
    	loadContent(location.hash.slice(1));
    });

    var url = window.location.href;
    var hash = url.substring(url.indexOf('#')+1);

    if (hash === url) {
    	hash = 'home';
    }
    $('header').load('includes/header.html');
    $('section').load('pages/'+ hash +'.html');
    $('footer').load('includes/footer.html');

})(jQuery);