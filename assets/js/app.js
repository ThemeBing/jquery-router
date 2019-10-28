(function($) {
    "use strict";

    function loadContent(hash){
    	if (hash === '') {
    		hash = 'home'
    	}
    	$('body,html').animate( { scrollTop:0 } , '600' , 'swing' )
    	$('section').load('pages/'+ hash +'.html')
    }

    $(window).on('hashchange', function() {
    	// body...
    })

})(jQuery);