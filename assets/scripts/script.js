$(document).ready(function(){
    "use strict";
    var persian = {0:'۰',1:'۱',2:'۲',3:'۳',4:'۴',5:'۵',6:'۶',7:'۷',8:'۸',9:'۹'};
    function traverse(el){
          if(el.nodeType==3){
              var list=el.data.match(/[0-9]/g);
              if(list!=null && list.length!=0){
                  for(var i=0;i<list.length;i++)
                      el.data=el.data.replace(list[i],persian[list[i]]);
              }
          }
          for(var i=0;i<el.childNodes.length;i++){
              traverse(el.childNodes[i]);
          }
      }

    traverse(document.body);

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
