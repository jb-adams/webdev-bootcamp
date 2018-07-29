function newTodo(arr) {
  let newTodo = prompt("Enter new todo");
  arr.push(newTodo);
  console.log(`${newTodo} added to list`);
}

function listTodos(arr) {
  console.log("*********");
  arr.forEach(function(el, i, l) {
    console.log(`${i}: ${el}`);
  })
  console.log("*********");
}

function deleteTodo(arr) {
  idxRemove = prompt("Enter index of todo to delete");
  arr.splice(idxRemove, 1);
  console.log("Item removed from Todo");
}

window.setTimeout(function() {
  let answer;
  let todos = [];

  do {
    answer = prompt("What would you like to do?");
    if (answer === "new") {
      newTodo(todos);
    } else if (answer === "list") {
      listTodos(todos);
    } else if (answer === "delete") {
      deleteTodo(todos);
    }
  } while (answer !== "quit")

  console.log("OK, YOU QUIT THE APP");
}, 500);
