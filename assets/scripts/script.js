$(document).ready(function(){
    "use strict";

    $(".user .account").on("click", function(){
        $(".container-full .video-chat").css("margin-left", "0px");
        $(".container-full .members").removeClass("col-md-3").addClass("hidden");
        $(".container-full .chat").removeClass("col-md-9").addClass("col-md-4 small");
    });
    $(".video-chat .actions .close-btn").on("click", function(){
        $(".container-full .video-chat").css("margin-left", "-66.66%");
        $(".container-full .members").removeClass("hidden").addClass("col-md-3");
        $(".container-full .chat").removeClass("col-md-4 small").addClass("col-md-9")
    });
    $(".video-chat .actions .fullscreen-btn").bind("click", function(){
        if ($(this).hasClass("full-width")) {
            $(this).removeClass("full-width");
            $(".container-full .video-chat").removeClass("fullscreen");
            $(this).find("i").text("fullscreen");
        } else {
            $(this).addClass("full-width");
            $(".container-full .video-chat").addClass("fullscreen");
            $(this).find("i").text("fullscreen_exit");
        }
    });
});
