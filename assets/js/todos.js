$("ul").on("click","li", function(){
    $(this).toggleClass("striked");
});

//delete todo on command
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add list to todo
$("input[type='text']").keypress(function (event) { 
    var inputText = $("input[type='text']").val();
    if(event.which === 13){
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ inputText +"</li>");
        $("input[type='text']").val("");
    }
});
$("h1").on("click",".fa-edit",function () {  
    $("input").fadeToggle("slow");
});