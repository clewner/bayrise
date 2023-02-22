$(document).ready(function() {

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        
        if($("#hiddennavbar").hasClass("is-active")){
        $("#hiddennavbar").removeClass("is-active");
        $("#hiddennavbar").addClass("is-removed");
        
        }else if($("#hiddennavbar").hasClass("is-removed")){
        $("#hiddennavbar").addClass("is-active");
        $("#hiddennavbar").removeClass("is-removed");
        
        
        }else{
        $("#hiddennavbar").addClass("is-active");
        
        }
        
        $("html").toggleClass("htmlnav");
        
        
    });
});