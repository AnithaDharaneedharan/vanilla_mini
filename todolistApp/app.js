const todoInput = document.getElementById("addInput");
const addTodo = document.getElementById("addTodo");
const todolist = document.getElementById("todolist");
const storage = window.localStorage;
let save = {};
let todosArray = [];


addTodo.addEventListener("click", addTodoList);
todoInput.addEventListener("keypress", checkEnterPressed);
load();

function checkEnterPressed(keypress) {
  keypress.keyCode === 13 ? addTodoList() : ``;
}

function load() {
    // if(storage.getItem("save")) {
    //     save = JSON.parse(storage.getItem("save"));
    //     console.log("save found ", save)
    // }
    // else {

    // }
    getTodos();

}

function addTodoList() { 

  const todoText = todoInput.value;
  todoInput.value = " ";

  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.innerHTML = todoText;
  todolist.append(todo);
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-button");
  removeBtn.innerHTML = "REMOVE";

 todosArray.push(todo.innerText);

saveTodos(todosArray);
// getTodos();
removeBtn.addEventListener('click' , () => todo.parentNode.removeChild(todo) )

todo.append(removeBtn);

}

function saveTodos(todosArray) {
 const str = JSON.stringify(todosArray);
 localStorage.setItem("todostorage", str)
}

function getTodos() {
    const str = localStorage.getItem("todostorage")
    todostorage = JSON.parse(str);
    
    if(!todostorage) {
        todostorage = [];
    }
    else {
        displayToDos(todostorage);
    }
   
   }

   function displayToDos(todostorage) {
       let active =  todostorage.map(function (el) {
            return el;
        })
        console.log(active)
      const  activeTodolist = document.querySelector('#activeTodolist')
        activeTodolist.textContent = active;
   }

//    app.innerHTML = '<ul>' + wizards.map(function (wizard) {
//     return '<li>' + wizard + '</li>';
// }).join('') + '</ul>';
   