jQuery("document").ready(function($){

    var menuBtn = $(".menu-icon"),
        menu =  $(".menu-productos ul");

    menuBtn.click(function() {

        if (menu.hasClass("show") ) {
            menu.removeClass("show")
        } else {
            menu.addClass("show");
        }
      
    })

});