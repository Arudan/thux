/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

  var docElem = $(document);
  var header = $('.navbar-default');
  var didScroll = false;
  var changeHeaderOn = $('header').height() - 100;

  function init() {
    $( window ).scroll(function() {
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
      }
    });
		$(window).resize(function() {
			changeHeaderOn = $('header').height() - 100;
		});
  }

  function scrollPage() {
    var sy = scrollY();
    if (sy >= changeHeaderOn) {
      header.removeClass('hidden');
    } else {
      header.addClass('hidden');
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();
