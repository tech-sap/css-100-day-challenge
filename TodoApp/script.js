var todo_list = [];

function addTodo() {
    var title = document.getElementById("todo-title").value;
    const todo_obj = {title:title, done:"false"};
    todo_list.push(todo_obj);
    localStorage.setItem("todo-list", todo_list);
    showTodos();
}

function showTodos() {
    let todo = document.getElementById("todos");
    todos = "";
    for(var i =0; i < todo_list.length; ++i) {
        todos += "<input type='checkbox'><p>"+todo_list[i].title+"</p>"
    }
    todo.innerHTML = todos;
}