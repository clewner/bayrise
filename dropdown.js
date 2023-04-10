$(document).ready(function() {

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