$(document).ready(function(){
// our code 

 $("#list-items").html(localStorage.getItem("listItems"));
$(".add-items").submit(function(event){

    // to prevent submitaion of our form items
    event.preventDefault();
    // get the value of the input field 
    var item = $('#todo-list-item').val();
    // prevent add empty item
    if(item ){
        // add the item to our list
        $("#list-items").append("<li><input class='checkbox' type='checkbox' />" + item + "<a class='remove'>x</a><hr></li>");
      
        // get the list-items and set it in listItems key
        localStorage.setItem("listItems",$("#list-items").html());

          // clear our field 
        $('#todo-list-item').val("");
    }
});

// $(".checkbox").change(function(){
//     console.log("ayman");
// });

// the element of html genereted automatiaclly so we need to reload the entire doc
$(document).on('change','.checkbox', function(){
    if($(this).attr("checked")){
        $(this).removeAttr("checked" ,"checked" );
    } else {
            // attr(value , attribuite)
    $(this).attr("checked" ,"checked" );
    }

    $(this).parent().toggleClass("completed");
    localStorage.setItem("listItems",$("#list-items").html());
});

// remove the element form the dom  
$(document).on('click','.remove',function(){
        $(this).parent().fadeOut( "slow", function() {
          // Animation complete.
          $(this).remove();
          // refresh the dom statue in the local storage
          localStorage.setItem("listItems",$("#list-items").html());
        });

});

});