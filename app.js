$("#add").click(function (){
    var inputTodo = $("#input-todo").val();
    $("#todo-list").append("<li>" + inputTodo + "</li>");
});
$(document).on("change","input[type=checkbox]",function (){
    if($(this).is(":checked")){
        $(this).parent().css("text-decoration","line-through");
    }
    else{
        $(this).parent().css("text-decoration","none");
    }
});

