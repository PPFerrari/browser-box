
$(document).ready(function() {
   if ( ($.browser.msie) && ($.browser.version < '9.0') ){
        $('#overlay').show();
        $('#browser-choise').show();
        
        $.fn.centerMe = function () {
          this.css('left', $(window).width()/2 - $(this).width()/2);
        };

        $(window).resize(function() { $('#browser-choise').centerMe(); });

        $('#browser-choise').centerMe();
   }
});

