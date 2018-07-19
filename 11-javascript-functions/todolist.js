window.setTimeout(function() {
  let answer;
  let todos = [];

  do {
    answer = prompt("What would you like to do?");

    if (answer == "new") {
      let newTodo = prompt("Enter new todo");
      todos.push(newTodo);

    } else if (answer == "list") {
      console.log(todos);
    }

  } while (answer != "quit")

  console.log("OK, YOU QUIT THE APP");
}, 500);
