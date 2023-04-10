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

    $("#dropclicker").click(function(){
        if($(".dropdowncontent").css("display") == "none"){
            $(".dropdowncontent").css("display", "inline-block");
            $(".dropicon").css("transform", "rotate(90deg)");
        }else{
            $(".dropdowncontent").css("display", "none");
            $(".dropicon").css("transform", "rotate(0deg)");
        }
        
        
        
    });

    $("#drophidden").click(function(){
        
        if($(".hiddendropdown").css("display") == "none"){
            $(".hiddendropdown").css("display", "block");
            $(".dropicon").css("transform", "rotate(90deg)");
            
        }else if($(".hiddendropdown").css("display") == "block"){
            $(".hiddendropdown").css("display", "none");
            $(".dropicon").css("transform", "rotate(0deg)");
            
        }
        
        
        
    });
});