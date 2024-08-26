/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : sodeker
    Version         : 1.0
    
* ================================================================= */

(function($) {
    "use strict";

    $(document).on('ready', function() {


        /* ==================================================
            Easy Pie Chart Init
         ===============================================*/
        $('.chart').easyPieChart({
            //your options goes here
            scaleColor:'',
            lineWidth: 5,
            scaleLength: 10,
            size: 120,
        });


    }); // end document ready function
})(jQuery); // End jQuery