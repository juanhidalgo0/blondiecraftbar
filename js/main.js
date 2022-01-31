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

jQuery("document").ready(function($){

    var menuBtn = $(".menu-hamb-icon"),
        menu =  $(".hamb-1 h3");
      

    menuBtn.click(function() {

        if (menu.hasClass("show") ) {
            menu.removeClass("show")
        } else {
            menu.addClass("show");
        
        }
      
    })

});

jQuery("document").ready(function($){

    var menuBtn = $(".menu-hamb-icon"),
        menu =  $(".hamb-1 h4");
      

    menuBtn.click(function() {

        if (menu.hasClass("show") ) {
            menu.removeClass("show")
        } else {
            menu.addClass("show");
        
        }
      
    })

});
window.onload = function(){
    var contenedor = document.GetElementById("container");
    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = "0";

}