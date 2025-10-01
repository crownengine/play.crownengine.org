(function() {
  'use strict';

  // Returns true if mobile.
  function detectMobile() {
    try {
      // UA Client Hints.
      if (navigator.userAgentData && typeof navigator.userAgentData.mobile === 'boolean') {
        if (navigator.userAgentData.mobile) 
          return true;
      }

      // Parse user-agent/platform strings.
      var ua = (navigator.userAgent || '').toLowerCase();
      var platform = (navigator.platform || '').toLowerCase();

      var tokens = ["iphone", "ipod", "ipad", "android", "blackberry", "bb10", "mobile", "windows phone", "opera mini", "silk"];
      for (var i = 0; i < tokens.length; ++i) {
        if (ua.indexOf(tokens[i]) !== -1) 
          return true;
      }

      return false;
    } catch (e) {
      return false; // Assume desktop.
    }
  }

  window.MobileDetected = !!detectMobile();

  if (window.MobileDetected) {
    document.documentElement.style.background = '#000';

    var block = document.createElement('div');
    block.className = 'centered';
    block.innerHTML = '<div id="crown_logo"></div>' +
                      '<div class="message"><h1>Page not available on mobile devices</h1>' +
                      '<p>This application requires a desktop browser. Please open this page on a desktop or laptop.</p></div>';
    document.body.appendChild(block);
  }
})();
