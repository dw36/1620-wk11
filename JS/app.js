// your JavaScript goes here, you can delete this comment
todoList = [{ todo: "clone repo for starter code", status:"started" },
            { todo: "Commit your code at appropriate intervals, with clear commit messages.", status:"started" },
            { todo: "push your code to GitHub repo", status:"complete" },
            { todo: "submit a link to GitHub repository", status:"complete" }
          ];

completedTodos = [];

for (var j = 0; j < todoList.length; j++){
  if(todoList[j].status == "complete") {
    completedTodos.push(todoList[j]);
  }
}

for (var j = 0; j < completedTodos.length; j++){
  const { todo } = completedTodos[j];
  console.log(todo);
}
