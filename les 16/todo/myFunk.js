// const $todoForm = document.forms['todo-form'];
// const $addBtn = document.querySelector('todo-button')
// const $todoInput = document.querySelector('todo-input')


// const $list = document.querySelector('todo_list')

//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const ul_list=document.getElementById('ul-list')

todoButton.addEventListener("click", function(){
  
  addTodo(task)
});

todoList.addEventListener("click", deleteTodo);

function addTodo(task) {
  task.preventDefault();
 
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const li = document.createElement("li");
  li.innerText = todoInput.value;
  li.classList.add("todo-item");

  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  let id= document.createAttribute('data-id')
  id.value = task
  trashButton.setAttributeNode(id)

  todoDiv.appendChild(li);
  todoList.appendChild(todoDiv).append(trashButton);
   
    // todoDiv.appendChild(trashButton);
    // todoList.appendChild(todoDiv);
   
   postNewTodo(todoInput.value)  
}

function deleteTodo(id_todo){


}


 

// function addTodo(task) {
//   task.preventDefault();
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   const newTodo = document.createElement("li");
//   newTodo.innerText = todoInput.value;
//   newTodo.classList.add("todo-item");

//   todoDiv.appendChild(newTodo);
//   todoInput.value = "";
//    todoList.appendChild(todoDiv);
   
//    const trashButton = document.createElement("button");
//    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
//    trashButton.classList.add("trash-btn");

//    trashButton.createAttribute('data-id').value = result['data'][i]['id'];
//   trashButton.createAttribute('data-id').value = '370'
//     todoDiv.appendChild(trashButton);
//     todoList.appendChild(todoDiv);
   
//    postNewTodo(todoInput.value)  
// }

// function deleteTodo(id_todo){


// }

