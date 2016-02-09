// contents of main.js
require.config({
    waitSeconds: 0
});

spider.nbModules++;

var put;
var SpiderLaunch;

var SpiderLaunchExecuted = false;
function SpiderMain() {
  if (spider.nbLoadedModules == spider.nbModules && !SpiderLaunchExecuted)
  { 
    if (SpiderLaunch)
    {
      // disable virtual desktop scrolling when dragging a window outside the screen
      //
      $(document).on('scroll', function() {
        $(document).scrollLeft(0);
        $(document).scrollTop(0);
      });
      
      SpiderLaunchExecuted = true;
      SpiderLaunch();
    }
  }
};

requirejs(['put-selector/put', 'jquery.min'],
function (PutSelectorPut) {
  
  put = PutSelectorPut;

  // We need to load these after jquery, as it depends on it  
  require(['jquery-ui.custom.min', 'jquery.injectCSS'], function   () {
             spider.nbLoadedModules++;
             SpiderMain(); // Try to launch the main procedure (will happen if all other libs modules are loaded)
    }
  );
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    
  (function($) {
   $.fn.cssValue = function(p) {
      var result;
      return isNaN(result = parseFloat(this.css(p))) ? 0 : result;
   };
  })(jQuery);
});