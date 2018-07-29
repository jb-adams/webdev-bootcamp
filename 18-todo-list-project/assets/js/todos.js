// Check off specific todos by clicking
$("ul").on("click", "li", function() { // adds listener to potential future lis that are part of the existing ul
  $(this).toggleClass("completed");
})

// Click on X to delete todo
$("ul").on("click", "span", function(event) { // adds listener to potential future spans that are part of the existing ul
  $(this).parent().fadeOut(500, function() { // 'this' refers to the span
    $(this).remove(); // 'this' refers to the li, as it's in the parent callback
  });
  event.stopPropagation();
})

$("input[type=text]").keypress(function(event) {
  if (event.which === 13) {
    let todoText = $(this).val(); // grab new todo text from input
    $(this).val("");
    // create new li and add to ul
    $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
  }
})

$(".fa-plus").click(function() {
  $("input[type=text]").fadeToggle();
})
