$(document).ready(function(){
  $('.sidenav').sidenav();
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});

hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();

$("h1,h2").slice(1).each(function (){
    var elementId = $(this).attr("id");
    $(this).removeAttr('id');
    $(this).nextUntil("h1,h2").andSelf().wrapAll("<div id=\""+ elementId + "\" class=\"scrollspy\"></div>");
});


$(document).ready(function (){
    if( $("#postIndicator").length>0 ) {
        $("#divider").toggle("slow");
        $("#personalInfoContainer").slideToggle("slow");
    }
    $('.scrollspy').scrollSpy({
        scrollOffset: 30
    });
    var lastActive=undefined;
    $("#backToMenu").on("click",function() {
        $("#divider").toggle("slow");
        $("#personalInfoContainer").slideToggle("slow");
    })
});
